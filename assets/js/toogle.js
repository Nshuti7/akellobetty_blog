document.addEventListener("DOMContentLoaded", function() {
  var toggleTriggers = document.querySelectorAll(".toggle-trigger");

  toggleTriggers.forEach(function(trigger) {
    var toggleContent = trigger.parentNode.nextElementSibling.querySelector(".toggle-content");
    trigger.addEventListener("click", function() {
      toggleContent.classList.toggle("open");
      if (toggleContent.classList.contains("open")) {
        trigger.innerHTML = "Read less";
      } else {
        trigger.innerHTML = "Read more";
      }
    });
  });
});
