var selectedStation = null;
var audioPlayer = document.querySelector(".audio-player");
var nowPlayingText = document.querySelector(".now-playing");
var stationGrid = document.querySelector(".station-grid");

function playStation(station) {
  selectedStation = station;
  if (station.name) {
    nowPlayingText.textContent = station.name;
    var activeImage = document.getElementById("radio-image"); // Ensure this is inside the loop
    activeImage.classList.add("station-image");
    activeImage.src = station.logo;
  } else {
    // Handle cases where station.name is missing
    console.error("Missing station name!");
  }

  audioPlayer.onerror = function handleAudioError(error) {
    nowPlayingText.textContent = "Error: Failed to play the radio.";
    console.error("Audio playback error:", error); // Log the error for debugging
  };
  audioPlayer.src = station.url;
  audioPlayer.load();
  audioPlayer.play();
}

// Get the station list container element
var stationGrid = document.querySelector(".station-grid");

stations.forEach(function (station, index) {
  var stationItem = document.getElementById("Rdiv");
  stationItem.classList.add("station-item");
  stationItem.dataset.stationIndex = index;

  var stationImage = document.getElementById("Rimg"); // Ensure this is inside the loop
  stationImage.classList.add("station-image");
  stationImage.src = station.logo; // Replace with your logo paths

  var stationName = document.getElementById("Rspan");
  stationName.classList.add("station-name");
  stationName.textContent = station.name;

  stationItem.appendChild(stationImage);
  stationItem.appendChild(stationName);
  stationGrid.appendChild(stationItem);

  stationItem.addEventListener("click", function () {
    playStation(station);
  });
});
