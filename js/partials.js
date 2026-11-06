// Shared header and footer for all Cameroon Hymns pages, defined once here so
// every page stays in sync. Header is injected synchronously (main.js binds
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

  // French pages live in /fr/ and declare <html lang="fr">. They share this
  // script, so labels come from STRINGS and asset paths get a "../" prefix.
  // Pages listed in FR_PAGES have a French copy under /fr/.
  var isFr = (document.documentElement.lang || "").toLowerCase().indexOf("fr") === 0;
  var root = isFr ? "../" : "";
  var FR_PAGES = ["index.html", "privacy.html", "terms.html", "contact.html",
    "challenge.html", "leaderboard.html", "challenge-rules.html"];
  var pageName = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  var langSwitchHref = isFr
    ? "../" + (pageName === "index.html" ? "" : pageName)
    : "fr/" + (FR_PAGES.indexOf(pageName) > -1 && pageName !== "index.html" ? pageName : "");
  // Keep ?invite=CODE when switching language on the challenge page.
  if (pageName === "challenge.html") langSwitchHref += window.location.search;

  var STRINGS = {
    en: {
      home: "Home", about: "About Us", features: "Features", screenshot: "Gallery",
      challenge: "Challenge", joinChallenge: "Join Challenge", leaderboard: "Leaderboard",
      challengeRules: "Challenge Rules", privacy: "Privacy", terms: "Terms", contact: "Contact",
      getApp: "Get the App", langSwitch: "FR", langSwitchLabel: "Version française",
      footerText: "Stay updated on the latest hymns, features, and news by following us on social media. Join us and can share your favorite hymns, discover new playlists, and engage in inspiring conversations about sacred music.",
      christmasChallenge: "Christmas Challenge", joinTheChallenge: "Join the Challenge",
      liveLeaderboard: "Live Leaderboard", officialRules: "Official Rules", contactUs: "Contact Us",
      region: "South West Region", madeBy: "Made by"
    },
    fr: {
      home: "Accueil", about: "À propos", features: "Fonctions", screenshot: "Galerie",
      challenge: "Défi", joinChallenge: "Rejoindre le défi", leaderboard: "Classement",
      challengeRules: "Règlement du défi", privacy: "Confidentialité", terms: "Conditions", contact: "Contact",
      getApp: "Télécharger", langSwitch: "EN", langSwitchLabel: "English version",
      footerText: "Suivez-nous sur les réseaux sociaux pour découvrir les derniers cantiques, les nouveautés et les actualités. Rejoignez-nous pour partager vos cantiques préférés, découvrir de nouvelles playlists et échanger autour de la musique sacrée.",
      christmasChallenge: "Défi de Noël", joinTheChallenge: "Rejoindre le défi",
      liveLeaderboard: "Classement en direct", officialRules: "Règlement officiel", contactUs: "Nous contacter",
      region: "Région du Sud-Ouest", madeBy: "Réalisé par"
    }
  };
  var t = STRINGS[isFr ? "fr" : "en"];

  var headerHTML =
    '<header class="header-area">' +
    '<div id="header-sticky" class="menu-area">' +
    '<div class="container">' +
    '<div class="second-menu">' +
    '<div class="row align-items-center">' +
    '<div class="col-xl-2 col-lg-2">' +
    '<div class="logo">' +
    '<a href="index.html"><img src="' + root + 'img/logo/logo.svg" alt="logo"></a>' +
    '</div></div>' +
    '<div class="col-xl-10 col-lg-9">' +
    '<div class="responsive"><i class="icon dripicons-align-right"></i></div>' +
    '<div class="main-menu text-right text-xl-right">' +
    '<nav id="mobile-menu"><ul>' +
    '<li class="has-sub"><a href="index.html#parallax">' + t.home + '</a></li>' +
    '<li><a href="index.html#about">' + t.about + '</a></li>' +
    '<li><a href="index.html#features">' + t.features + '</a></li>' +
    '<li><a href="index.html#screen">' + t.screenshot + '</a></li>' +
    '<li class="has-sub" id="nav-challenge"><a href="challenge.html">' + t.challenge + '</a>' +
    '<ul>' +
    '<li><a href="challenge.html">' + t.joinChallenge + '</a></li>' +
    '<li><a href="leaderboard.html">' + t.leaderboard + '</a></li>' +
    '<li><a href="challenge-rules.html">' + t.challengeRules + '</a></li>' +
    '</ul></li>' +
    '<li><a href="index.html#gettheapp">' + t.getApp + '</a></li>' +
    '<li><a href="privacy.html#privacy">' + t.privacy + '</a></li>' +
    '<li><a href="terms.html#terms">' + t.terms + '</a></li>' +
    '<li><a href="contact.html#contact">' + t.contact + '</a></li>' +
    '<li><a href="' + langSwitchHref + '" hreflang="' + (isFr ? "en" : "fr") + '" aria-label="' + t.langSwitchLabel + '">' + t.langSwitch + '</a></li>' +
    '</ul></nav>' +
    '</div></div></div></div></div></div>' +
    '</header>';

  var footerHTML =
    '<footer class="footer-bg footer-p pt-40" style="background-image: url(' + root + 'img/bg/f-bg.png); background-position: center top; background-size: auto;background-repeat: no-repeat;">' +
    '<div class="footer-top"><div class="container">' +
    '<div class="row justify-content-between">' +
    '<div class="col-xl-4 col-lg-4 col-sm-6">' +
    '<div class="footer-widget mb-30">' +
    '<div class="logo mt-15 mb-15"><a href="index.html#"><img src="' + root + 'img/logo/w_logo.png" alt="logo"></a></div>' +
    '<div class="footer-text mb-20"><p>' + t.footerText + '</p></div>' +
    '<div class="footer-social">' +
    '<a href="https://www.tiktok.com/@cameroonhymns" target="_blank" rel="noopener" aria-label="TikTok">' + TIKTOK_SVG + '</a>' +
    '<a href="https://www.instagram.com/cameroonhymns/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
    '<a href="https://www.facebook.com/share/1EkwySAJrW/?mibextid=wwXIfr" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>' +
    '<a href="https://vero.co/chymns" target="_blank" rel="noopener" aria-label="Vero">' + VERO_SVG + '</a>' +
    '</div></div></div>' +
    '<div class="col-xl-3 col-lg-3 col-sm-6">' +
    '<div class="footer-widget mb-30">' +
    '<div class="f-widget-title"><h5>' + t.christmasChallenge + '</h5></div>' +
    '<div class="footer-link"><ul>' +
    '<li><a href="challenge.html">' + t.joinTheChallenge + '</a></li>' +
    '<li><a href="leaderboard.html">' + t.liveLeaderboard + '</a></li>' +
    '<li><a href="challenge-rules.html">' + t.officialRules + '</a></li>' +
    '</ul></div></div></div>' +
    '<div class="col-xl-3 col-lg-3 col-sm-6">' +
    '<div class="footer-widget mb-10">' +
    '<div class="f-widget-title"><h5>' + t.contactUs + '</h5></div>' +
    '<div class="footer-link"><div class="f-contact"><ul>' +
    '<li><i class="icon dripicons-mail"></i><span><a href="mailto:kefeh@kitendo.net">kefeh@kitendo.net</a><br><a href="mailto:chymns@kitendo.net">chymns@kitendo.net</a></span></li>' +
    '<li><i class="fal fa-map-marker-alt"></i><span>Buea Cameroon</span><span>' + t.region + '</span></li>' +
    '</ul></div></div></div></div>' +
    '</div></div></div>' +
    '<div class="copyright-wrap text-center"><div class="container"><div class="row"><div class="col-12">' +
    '<div class="copyright-text"><p>&copy; 2026 Cameroon Hymns · ' + t.madeBy + ' <a href="https://kitendo.net" target="_blank" rel="noopener noreferrer">Kitendo Group</a></p></div>' +
    '</div></div></div></div>' +
    '</footer>';

  var navStyle = document.createElement("style");
  navStyle.textContent =
    ".main-menu ul li.has-sub ul li a { color: #190a32; padding: 12px 18px; }" +
    ".main-menu ul li.has-sub ul li a:hover { color: #F316F8; }" +
    "@media (max-width: 991px) {" +
    "  .main-menu .has-sub > ul { display: block; position: static; box-shadow: none; border-top: 0; padding-left: 16px; margin-top: 0; min-width: 0; }" +
    "  .main-menu .has-sub > ul > li { float: none; border-bottom: 0; }" +
    "  .main-menu ul li.has-sub ul li a { color: #707692; padding: 8px 20px; font-size: 13px; }" +
    "}";
  if (document.head) {
    document.head.appendChild(navStyle);
  }

  var headerMount = document.getElementById("site-header");
  if (headerMount) {
    headerMount.outerHTML = headerHTML;
    if (
      pageName === "challenge.html" ||
      pageName === "leaderboard.html" ||
      pageName === "challenge-rules.html"
    ) {
      var challengeNav = document.getElementById("nav-challenge");
      if (challengeNav) {
        challengeNav.classList.add("current");
      }
    }
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
    var anchor = e.target && e.target.closest ? e.target.closest("a[href]") : null;
    if (!anchor) {
      return;
    }
    if (!redirectDisabled() && /#gettheapp$/.test(anchor.getAttribute("href") || "")) {
      var url = storeUrlForDevice();
      if (url) {
        e.preventDefault();
        window.location.replace(url);
        return;
      }
    }
    if (anchor.closest(".main-menu")) {
      var targetPage = (anchor.pathname.split("/").pop() || "index.html").toLowerCase();
      var activePage = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
      if (targetPage !== activePage || !anchor.hash) {
        e.stopPropagation();
      }
    }
  }

  maybeRedirectToStore();
  window.addEventListener("hashchange", maybeRedirectToStore);
  document.addEventListener("click", handleStoreLinkClick, true);
})();
