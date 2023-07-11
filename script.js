// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Find all anchor tags with the 'data-link-text' attribute
    var links = document.querySelectorAll("a[data-link-text]");
  
    // Loop through each link and update its text
    links.forEach(function(link) {
      var linkText = link.getAttribute("data-link-text");
      link.textContent = linkText;
    });
  });