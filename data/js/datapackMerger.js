// Define constants
const statusMessageId = 'status-message';
const progressBarId = 'progress-bar';
const progressTextId = 'progress-text';

// Function to update progress bar
async function updateProgress(message) {
  console.log('updateProgress function called');
  const progressBar = document.getElementById(progressBarId);
  const progressText = document.getElementById(progressTextId);

  if (progressBar && progressText) {
    progressText.textContent = message;
    let width = 1;
    const intervalId = setInterval(() => {
      width += 5;
      progressBar.style.width = `${width}%`;
      if (width <= 100) {
        progressBar.style.backgroundColor = `hsl(${Math.round(width / 100 * 360)}, 100%, 50%)`;
      } else {
        clearInterval(intervalId);
        progressBar.style.backgroundColor = '#4CAF50';
      }
    }, 50);
  }
}

// Function to handle form submission
function handleFormSubmit(event) {
  console.log('handleFormSubmit function called');
  event.preventDefault();
  console.log('Default form submission prevented');
  combineDatapacks();
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  const form = document.querySelector('#datapacsForm');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }

  const combineButton = document.getElementById('combineButton');
  if (combineButton) {
    combineButton.addEventListener('click', handleFormSubmit);
  }
});

// Function to combine datapacks
async function combineDatapacks() {
  console.log('combineDatapacks function called');

  const descriptionElement = document.getElementById('description');
  const datapackIdElement = document.getElementById('datapackId');
  const packFormatElement = document.getElementById('packFormat');
  const packPngInput = document.getElementById('packPngInput');
  const zipInput = document.getElementById('datapackFiles');

  if (!descriptionElement || !datapackIdElement || !packFormatElement || !zipInput) {
    console.error('Some required elements are missing in the HTML.');
    alert('Some required elements are missing in the HTML.');
    return;
  }

  const description = descriptionElement.value;
  const datapackId = datapackIdElement.value;
  const packFormat = packFormatElement.value;
  const zipFiles = Array.from(zipInput.files);

  if (zipFiles.length === 0) {
    console.error('No zip files selected');
    alert('Please upload at least one datapack.');
    return;
  }

  console.log('Starting combineDatapacks...');
  updateProgress('Starting datapack combination...');

  try {
    const combinedZip = new JSZip();
    const datapackFolder = combinedZip.folder(`${datapackId}_${Math.floor(Math.random() * 1000000)}`);

    await combineDatapacksInternal(zipFiles, description, datapackId, packFormat, packPngInput, datapackFolder);

    const blob = await datapackFolder.generateAsync({ type: 'blob' });
    saveAs(blob, `${datapackId}_combined_datapack.zip`);
    document.getElementById(statusMessageId).textContent = 'Datapack combined successfully! Saving file...';
    updateProgress('Datapack combination completed!');
  } catch (error) {
    console.error('Error in combineDatapacks:', error);
    document.getElementById(statusMessageId).textContent = `Error: ${error.message}`;
    updateProgress(`Error: ${error.message}`);
  }
}

// Internal combine function
async function combineDatapacksInternal(zipFiles, description, datapackId, packFormat, packPngInput, datapackFolder) {
  console.log('combineDatapacksInternal function called');
  let processedFiles = 0;
  let totalFiles = zipFiles.length;

  // Create a new 'data' folder inside datapackFolder
  const newDataFolder = datapackFolder.folder(`${datapackId}_${Math.floor(Math.random() * 1000000)}`);

  // Process data folder
  for (let i = 0; i < totalFiles; i++) {
    console.log(`Processing zip file: ${zipFiles[i]?.name}`);

    const zipContent = await JSZip.loadAsync(zipFiles[i]);
    
    // Copy only the contents of the data folder
    const dataFolder = zipContent.folder('data');
    if (dataFolder) {
      for (const filePath in dataFolder.files) {
        if (filePath.startsWith('pack.mcmeta') || filePath === 'pack.png' || filePath.includes('license.txt') || filePath.includes('patreons.txt')) {
          continue; // Skip these files
        }

        const relativeFilePath = filePath;
        const targetFilePath = `${relativeFilePath}`;

        // Check if file already exists
        if (!newDataFolder.files[targetFilePath]) {
          newDataFolder.file(targetFilePath, await dataFolder.files[filePath].async('arraybuffer'));
        } else {
          console.warn(`Conflicting file excluded: ${targetFilePath}`);
        }
      }
    } else {
      console.warn(`The file "${zipFiles[i]?.name}" does not contain a 'data' folder.`);
    }

    processedFiles++;
    updateProgress(`Processing file ${processedFiles} of ${totalFiles}`);

    // Handle tick.mcfunction
    const tickFunctionPaths = ['data/tick.mcfunction', 'data/functions/tick.mcfunction'];
    for (const tickFunctionPath of tickFunctionPaths) {
      const tickFunction = zipContent.files[tickFunctionPath];
      if (tickFunction) {
        const tickFunctionContent = await tickFunction.async('string');
        if (tickFunctionContent) {
          const tickFunctionPathInNewPack = `${datapackId}-${Math.floor(Math.random() * 1000000)}/tick.mcfunction`;
          newDataFolder.file(tickFunctionPathInNewPack, tickFunctionContent);
        } else {
          console.warn(`No valid tick.mcfunction found in ${zipFiles[i]?.name}`);
        }
      } else {
        console.warn(`No tick.mcfunction found in ${zipFiles[i]?.name}`);
      }
    }

    // Handle load.json
    const loadJsonPath = zipContent.files['data/load.json'];
    if (loadJsonPath) {
      try {
        const loadJsonContent = await loadJsonPath.async('text');
        if (loadJsonContent) {
          const loadJson = JSON.parse(loadJsonContent);
          if (typeof loadJson === 'object' && loadJson !== null) {
            // Add load.json content to mergedLoadJsons array
            const loadJsons = [];
            loadJsons.push(loadJson);
          } else {
            console.warn(`Invalid load.json found in ${zipFiles[i]?.name}`);
          }
        } else {
          console.warn(`No valid JSON found in ${zipFiles[i]?.name}`);
        }
      } catch (error) {
        console.error(`Error loading load.json from ${zipFiles[i]?.name}:`, error);
      }
    } else {
      console.warn(`No load.json found in ${zipFiles[i]?.name}`);
    }
  }

  // Merge all load.json entries
  let mergedLoadJson = {};
  for (const zipFile of zipFiles) {
    try {
      const content = await JSZip.loadAsync(zipFile);
      const loadJsonPath = content.files['data/load.json'];
      if (loadJsonPath) {
        const loadJsonContent = await loadJsonPath.async('text');
        if (loadJsonContent) {
          const loadJson = JSON.parse(loadJsonContent);
          if (typeof loadJson === 'object' && loadJson !== null) {
            for (const [key, value] of Object.entries(loadJson)) {
              if (!mergedLoadJson[key]) {
                mergedLoadJson[key] = value;
              } else if (Array.isArray(mergedLoadJson[key])) {
                mergedLoadJson[key].push(value);
              } else {
                mergedLoadJson[key] = [mergedLoadJson[key], value];
              }
            }
          } else {
            console.warn(`Invalid load.json found in ${zipFile.name}`);
          }
        } else {
          console.warn(`No valid JSON found in ${zipFile.name}`);
        }
      } else {
        console.warn(`No load.json found in ${zipFile.name}`);
      }
    } catch (error) {
      console.error(`Error loading load.json from ${zipFile.name}:`, error);
    }
  }

  // Save merged load.json
  const loadJsonContent = JSON.stringify(mergedLoadJson, null, 2);
  newDataFolder.file('data/load.json', loadJsonContent);

  // Save pack.mcmeta
  const packMcmeta = {
    pack: {
      pack_format: parseInt(packFormat, 10),
      description: description
    },
    id: datapackId
  };
  datapackFolder.file('pack.mcmeta', JSON.stringify(packMcmeta, null, 4));

  if (processedFiles !== totalFiles) {
    console.warn(`Some files were skipped due to missing 'data' folders or conflicts.`);
  } else {
    console.log('Datapack combined successfully!');
    document.getElementById(statusMessageId).textContent = 'Datapack combined successfully!';
  }
}