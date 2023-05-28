document.addEventListener('DOMContentLoaded', function() {
  var currentUrl = window.location.href.toLowerCase();

  if (currentUrl === 'view-source:https://levinhkhang.xyz/' || currentUrl === 'view-source:https://levinhkhang.xyz') {
    window.location.href = 'view-source-redirect.html';
  }
});
