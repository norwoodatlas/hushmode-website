(function () {
  var appStoreUrl = window.HUSHMODE_APP_STORE_URL || "https://apps.apple.com/us/app/id0000000000";
  var links = document.querySelectorAll("[data-app-store-link]");

  links.forEach(function (link) {
    link.setAttribute("href", appStoreUrl);
  });
})();

