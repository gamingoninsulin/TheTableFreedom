function loadHTML(elementId, filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    });
}

// Load navbar and footer
loadHTML("navbar-container", "./data/html/navbar.html");
loadHTML("footer-container", "./data/html/footer.html");
