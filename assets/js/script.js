// Wait for the page to load
window.addEventListener('load', function() {
  // Wait for the "Intake Drywall" animation to complete
  setTimeout(function() {
    // Add the "content-visible" class to fade in the content
    document.getElementById('hero').classList.add('hero-visible');
  }, 2000); // 2000 milliseconds = 2 seconds
});
