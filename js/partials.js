// Shared header and footer for all Cameroon Hymns pages, defined once here so
// the three pages stay in sync. Header is injected synchronously (main.js binds
// #header-sticky and .main-menu at parse time, so the markup must exist before
// that bundle runs); the footer has no script dependencies and is injected on
// DOMContentLoaded.
(function () {
  "use strict";

  // TikTok and Vero have no glyph in the bundled Font Awesome Pro 5.10.1, so
  // their marks are inline SVGs. fill="currentColor" makes them inherit the
  // footer-social icon color (and hover color) like the Font Awesome <i> icons.
  var TIKTOK_SVG =
    '<svg viewBox="0 0 448 512" width="1em" height="1em" fill="currentColor" aria-hidden="true">' +
    '<path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z"/>' +
    '</svg>';
  var VERO_SVG =
    '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">' +
    '<path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.93 6.4l-4.2 9.1a.8.8 0 0 1-1.46 0l-4.2-9.1a.7.7 0 0 1 .64-1h1.5a.8.8 0 0 1 .73.48L12 14.6l2.06-6.22a.8.8 0 0 1 .73-.48h1.5a.7.7 0 0 1 .64 1z"/>' +
    '</svg>';

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
    '<a href="https://www.tiktok.com/@cameroonhymns" target="_blank" rel="noopener" aria-label="TikTok">' + TIKTOK_SVG + '</a>' +
    '<a href="https://www.instagram.com/cameroonhymns/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
    '<a href="https://www.facebook.com/share/1EkwySAJrW/?mibextid=wwXIfr" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>' +
    '<a href="https://vero.co/cameroonhymns" target="_blank" rel="noopener" aria-label="Vero">' + VERO_SVG + '</a>' +
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

  function redirectDisabled() {
    return /[?&]noredirect\b/.test(window.location.search);
  }

  function maybeRedirectToStore() {
    if (window.location.hash !== "#gettheapp") {
      return;
    }
    if (redirectDisabled()) {
      return;
    }
    var url = storeUrlForDevice();
    if (url) {
      window.location.replace(url);
    }
  }

  // A nav link to #gettheapp on a page that has that section is intercepted by
  // the onePageNav plugin (preventDefault + smooth scroll), so the hash never
  // changes and hashchange never fires. Catch the click in the capture phase,
  // before onePageNav, and send phones to the store directly.
  function handleStoreLinkClick(e) {
    if (redirectDisabled()) {
      return;
    }
    var anchor = e.target && e.target.closest ? e.target.closest("a[href]") : null;
    if (!anchor) {
      return;
    }
    if (!/#gettheapp$/.test(anchor.getAttribute("href") || "")) {
      return;
    }
    var url = storeUrlForDevice();
    if (url) {
      e.preventDefault();
      window.location.replace(url);
    }
  }

  maybeRedirectToStore();
  window.addEventListener("hashchange", maybeRedirectToStore);
  document.addEventListener("click", handleStoreLinkClick, true);
})();
