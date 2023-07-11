document.addEventListener("DOMContentLoaded", function() {
    var targetLink = document.getElementById("target_link");
    var targetLinks = document.querySelectorAll(".social-buttons a");
  
    targetLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default link behavior
  
      setTimeout(function() {
        window.open(targetLink.href, "_blank"); // Open the link after the delay
      }, 1650); // 3 seconds delay (3000 milliseconds)
    });
  
    // Delayed opening for each link within the .social-buttons div
    for (var i = 0; i < targetLinks.length; i++) {
      (function(link) {
        link.addEventListener("click", function(event) {
          event.preventDefault();
          setTimeout(function() {
            window.open(link.getAttribute("href"), "_blank");
          }, 1000);
        });
      })(targetLinks[i]);
    }
  });
  