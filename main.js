(function () {
  var placeholderUrl = "https://apps.apple.com/us/app/id0000000000";
  var appStoreUrl = window.HUSHMODE_APP_STORE_URL || "https://apps.apple.com/us/app/id0000000000";
  var links = document.querySelectorAll("[data-app-store-link]");
  var schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');

  links.forEach(function (link) {
    link.setAttribute("href", appStoreUrl);
  });

  schemaScripts.forEach(function (script) {
    if (script.textContent && script.textContent.indexOf(placeholderUrl) !== -1) {
      script.textContent = script.textContent.split(placeholderUrl).join(appStoreUrl);
    }
  });
})();
