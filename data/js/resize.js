window.addEventListener('resize', () => {
    const divs = document.querySelectorAll(".menu-list");
    if (window.innerWidth < 768){
      divs.forEach(div => div.classList.add("tags"));
    }
    else {
      divs.forEach(div => div.classList.remove("tags"));
    }
  });
    
    document.addEventListener("DOMContentLoaded", function() {
      //The first argument are the elements to which the plugin shall be initialized
      //The second argument has to be at least a empty object or a object with your desired options
      OverlayScrollbars(document.querySelectorAll("body"), { });
  });