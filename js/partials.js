// Shared header and footer for all Cameroon Hymns pages, defined once here so
// the three pages stay in sync. Header is injected synchronously (main.js binds
// #header-sticky and .main-menu at parse time, so the markup must exist before
// that bundle runs); the footer has no script dependencies and is injected on
// DOMContentLoaded.
(function () {
  "use strict";

  var headerHTML =
    '<header class="header-area">' +
    '<div id="header-sticky" class="menu-area">' +
    '<div class="container">' +
    '<div class="second-menu">' +
    '<div class="row align-items-center">' +
    '<div class="col-xl-2 col-lg-2">' +
    '<div class="logo">' +
    '<a href="index.html"><img src="img/logo/logo.svg" alt="logo"></a>' +
    '</div></div>' +
    '<div class="col-xl-10 col-lg-9">' +
    '<div class="responsive"><i class="icon dripicons-align-right"></i></div>' +
    '<div class="main-menu text-right text-xl-right">' +
    '<nav id="mobile-menu"><ul>' +
    '<li class="has-sub"><a href="index.html#parallax">Home</a></li>' +
    '<li><a href="index.html#about">About Us</a></li>' +
    '<li><a href="index.html#features">Features</a></li>' +
    '<li><a href="index.html#screen">Screenshot</a></li>' +
    '<li><a href="privacy.html#privacy">Privacy</a></li>' +
    '<li><a href="terms.html#terms">Terms</a></li>' +
    '<li><a href="index.html#gettheapp">Get the App</a></li>' +
    '</ul></nav>' +
    '</div></div></div></div></div></div>' +
    '</header>';

  var footerHTML =
    '<footer class="footer-bg footer-p pt-40" style="background-image: url(img/bg/f-bg.png); background-position: center top; background-size: auto;background-repeat: no-repeat;">' +
    '<div class="footer-top"><div class="container">' +
    '<div class="row justify-content-between">' +
    '<div class="col-xl-4 col-lg-4 col-sm-6">' +
    '<div class="footer-widget mb-30">' +
    '<div class="logo mt-15 mb-15"><a href="index.html#"><img src="img/logo/w_logo.png" alt="logo"></a></div>' +
    '<div class="footer-text mb-20"><p>Stay updated on the latest hymns, features, and news by following us on social media. Join us and can share your favorite hymns, discover new playlists, and engage in inspiring conversations about sacred music.</p></div>' +
    '<div class="footer-social">' +
    '<a href="index.html#"><i class="fab fa-facebook-f"></i></a>' +
    '<a href="index.html#"><i class="fab fa-twitter"></i></a>' +
    '<a href="index.html#"><i class="fab fa-instagram"></i></a>' +
    '<a href="index.html#"><i class="fab fa-google-plus-g"></i></a>' +
    '</div></div></div>' +
    '<div class="col-xl-3 col-lg-3 col-sm-6">' +
    '<div class="footer-widget mb-10">' +
    '<div class="f-widget-title"><h5>Contact Us</h5></div>' +
    '<div class="footer-link"><div class="f-contact"><ul>' +
    '<li><i class="icon dripicons-mail"></i><span><a href="mailto:kefeh@kitendo.net">kefeh@kitendo.net</a><br><a href="mailto:contact@kitendo.net">contact@kitendo.net</a></span></li>' +
    '<li><i class="fal fa-map-marker-alt"></i><span>Buea Cameroon</span><span>South West Region</span></li>' +
    '</ul></div></div></div></div>' +
    '</div></div></div>' +
    '<div class="copyright-wrap text-center"><div class="container"><div class="row"><div class="col-12">' +
    '<div class="copyright-text"><p>&copy; 2026 @Kitendo Group Inc</p></div>' +
    '</div></div></div></div>' +
    '</footer>';

  var headerMount = document.getElementById("site-header");
  if (headerMount) {
    headerMount.outerHTML = headerHTML;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var footerMount = document.getElementById("site-footer");
    if (footerMount) {
      footerMount.outerHTML = footerHTML;
    }
  });

  // Send phones that reach the #gettheapp anchor straight to the matching store.
  // iPadOS 13+ reports a Mac UA, so it is detected via the touch-point check.
  // The ?noredirect query param disables this so the page can be tested on a phone.
  var APP_STORE_URL = "https://apps.apple.com/us/app/cameroon-hymns/id6748924153";
  var PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=net.kitendo.cameroon_hymn";

  function storeUrlForDevice() {
    var ua = navigator.userAgent || navigator.vendor || window.opera || "";
    var isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    if (isIOS) {
      return APP_STORE_URL;
    }
    if (/android/i.test(ua)) {
      return PLAY_STORE_URL;
    }
    return null;
  }

  function maybeRedirectToStore() {
    if (window.location.hash !== "#gettheapp") {
      return;
    }
    if (/[?&]noredirect\b/.test(window.location.search)) {
      return;
    }
    var url = storeUrlForDevice();
    if (url) {
      window.location.replace(url);
    }
  }

  maybeRedirectToStore();
  window.addEventListener("hashchange", maybeRedirectToStore);
})();
