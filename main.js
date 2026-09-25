(function () {
  "use strict";

  var cfg = window.SITE_CONFIG || {};

  // ------------------------------------------------------------------
  // Icons for known contact/button types. Anything not listed here
  // (a type the user invents later) falls back to a generic icon so
  // new entries in config.js never break — they just render plainly.
  // ------------------------------------------------------------------
  var ICONS = {
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5h2.5l.5-3H13.5V8.5c0-.9.3-1.5 1.6-1.5H16.5V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.1H7.5v3H10V21h3.5Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.7"/><circle cx="17.2" cy="6.8" r="1"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.4 2.2 1.8 3.6 4 3.9v2.8c-1.4 0-2.8-.4-4-1.2v6.8c0 3.1-2.5 5.7-5.7 5.7S5.1 18.4 5.1 15.3s2.5-5.7 5.7-5.7c.3 0 .6 0 .9.1v2.9a2.9 2.9 0 1 0 2 2.7V3h2.8Z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.6 14.2c-.2.6-1.3 1.2-1.8 1.3-.5.1-1 .1-3.3-.7-2.8-1.1-4.6-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.6.7 1.9.8 2 .1.2.1.4 0 .6-.1.2-.2.3-.3.5-.2.2-.3.3-.5.5-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.6.3.2.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.5.7 1.8.8.3.1.5.2.5.3.1.2.1.6-.1 1.2Z"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
    "default": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1"/><path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1"/></svg>'
  };

  function el(html) {
    var wrap = document.createElement("div");
    wrap.innerHTML = html.trim();
    return wrap.firstChild;
  }

  function makeContactButton(contact, labelOverride) {
    var isExternal = /^https?:\/\//.test(contact.href || "");
    var a = document.createElement("a");
    a.className = "btn-row reveal-io" + (ICONS[contact.type] ? " " + contact.type : "");
    a.href = contact.href || "#";
    if (isExternal) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    a.innerHTML = (ICONS[contact.type] || ICONS["default"]) +
      "<span>" + (labelOverride || contact.label || contact.type) + "</span>";
    a.setAttribute("aria-label", (labelOverride || contact.label || contact.type) + (isExternal ? ", opens in a new tab" : ""));
    return a;
  }

  function renderPhoto() {
    var img = document.getElementById("heroPhoto");
    if (img && cfg.photo) img.src = cfg.photo;
  }

  function renderAbout() {
    var host = document.getElementById("aboutText");
    if (!host || !Array.isArray(cfg.about)) return;
    cfg.about.forEach(function (para) {
      var p = document.createElement("p");
      p.className = "about-text";
      p.textContent = para;
      host.appendChild(p);
    });
  }

  function renderServices() {
    var host = document.getElementById("servicesGrid");
    if (!host || !Array.isArray(cfg.services)) return;
    cfg.services.forEach(function (svc) {
      var li = el(
        '<li class="service-card reveal-io">' +
          '<span class="service-icon" aria-hidden="true">' + (svc.icon || "✨") + "</span>" +
          "<span></span>" +
        "</li>"
      );
      li.querySelector("span:last-child").textContent = svc.label || "";
      host.appendChild(li);
    });
  }

  function renderHeroActions() {
    var host = document.getElementById("heroActions");
    if (!host || !Array.isArray(cfg.contacts)) return;
    cfg.contacts.forEach(function (c) {
      if (c.inHero === false) return;
      host.appendChild(makeContactButton(c, c.heroLabel));
    });
  }

  function renderContactSection() {
    var introEl = document.getElementById("contactIntro");
    if (introEl && cfg.contactIntro) introEl.textContent = cfg.contactIntro;
    var host = document.getElementById("contactList");
    if (!host || !Array.isArray(cfg.contacts)) return;
    cfg.contacts.forEach(function (c) {
      host.appendChild(makeContactButton(c));
    });
  }

  function renderBot() {
    var host = document.getElementById("chatPanelBody");
    if (!host) return;
    var bot = cfg.bot || {};
    if (bot.src) {
      var iframe = document.createElement("iframe");
      iframe.src = bot.src;
      iframe.title = bot.title || "Chatbot";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "origin";
      if (bot.allow) iframe.setAttribute("allow", bot.allow);
      host.appendChild(iframe);
    } else {
      host.appendChild(el(
        '<div class="chat-placeholder">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="34" height="34"><path d="M4 5h16v11H8l-4 4V5Z"/></svg>' +
          "<p>The chatbot isn't connected yet.<br>Add a bot <code>src</code> in <code>config.js</code>, inside <code>bot</code>.</p>" +
        "</div>"
      ));
    }
  }

  function applyTheme() {
    var t = cfg.theme || {};
    var root = document.documentElement.style;
    if (t.blue) root.setProperty("--blue", t.blue);
    if (t.blueBright) root.setProperty("--blue-bright", t.blueBright);
    if (t.purple) root.setProperty("--purple", t.purple);
    if (t.teal) root.setProperty("--teal", t.teal);
    if (t.bgBase) root.setProperty("--bg-base", t.bgBase);
    // These three variables alias the accent trio used across the site
    // (hero ring, wordmark, drawer icons, etc.) — kept in sync with the
    // theme colors above so config.js is the only place colors live.
    if (t.blue) root.setProperty("--gold", t.blue);
    if (t.purple) root.setProperty("--rose", t.purple);
    if (t.blueBright) root.setProperty("--rose-bright", t.blueBright);
    if (t.teal) { root.setProperty("--green", t.teal); root.setProperty("--green-bright", t.teal); }
  }

  applyTheme();
  renderPhoto();
  renderHeroActions();
  renderAbout();
  renderServices();
  renderContactSection();
  renderBot();

  var sidebar = document.getElementById("sidebar");
  var backdrop = document.getElementById("backdrop");
  var menuOpen = document.getElementById("menuOpen");
  var menuClose = document.getElementById("menuClose");
  var chatPanel = document.getElementById("chatPanel");
  var chatFab = document.getElementById("chatFab");
  var chatClose = document.getElementById("chatClose");
  var chatFromDrawer = document.getElementById("chatFromDrawer");
  var chatClear = document.getElementById("chatClear");
  var chatPanelBody = document.getElementById("chatPanelBody");
  var navLinks = document.querySelectorAll("[data-nav]");

  var state = { drawerOpen: false, chatOpen: false };

  function updateBackdrop() {
    var anyOpen = state.drawerOpen || state.chatOpen;
    backdrop.classList.toggle("is-visible", anyOpen);
    document.body.style.overflow = anyOpen ? "hidden" : "";
  }

  function openDrawer() {
    state.drawerOpen = true;
    sidebar.classList.add("is-open");
    menuOpen.setAttribute("aria-expanded", "true");
    updateBackdrop();
  }

  function closeDrawer() {
    state.drawerOpen = false;
    sidebar.classList.remove("is-open");
    menuOpen.setAttribute("aria-expanded", "false");
    updateBackdrop();
  }

  function openChat() {
    state.chatOpen = true;
    chatPanel.classList.add("is-open");
    chatFab.setAttribute("aria-expanded", "true");
    updateBackdrop();
  }

  function closeChat() {
    state.chatOpen = false;
    chatPanel.classList.remove("is-open");
    chatFab.setAttribute("aria-expanded", "false");
    updateBackdrop();
  }

  menuOpen.addEventListener("click", function () {
    state.drawerOpen ? closeDrawer() : openDrawer();
  });
  menuClose.addEventListener("click", closeDrawer);

  chatFab.addEventListener("click", function () {
    state.chatOpen ? closeChat() : openChat();
    if (state.drawerOpen) closeDrawer();
  });
  chatClose.addEventListener("click", closeChat);
  chatFromDrawer.addEventListener("click", function () {
    closeDrawer();
    openChat();
  });

  // Clear conversation: reloading the embedded bot's iframe resets its
  // session for most providers (Tawk.to, Landbot, Voiceflow, Chatbase, etc.),
  // since their conversation state lives inside that iframe's own page load.
  chatClear.addEventListener("click", function () {
    var iframe = chatPanelBody.querySelector("iframe");
    if (!iframe) return; // nothing connected yet — nothing to clear
    var src = iframe.getAttribute("src");
    iframe.setAttribute("src", "about:blank");
    window.setTimeout(function () {
      iframe.setAttribute("src", src);
    }, 60);
  });

  // Tapping the backdrop closes whichever is open
  backdrop.addEventListener("click", function () {
    if (state.drawerOpen) closeDrawer();
    if (state.chatOpen) closeChat();
  });

  // Tapping a nav item: smooth-scroll to section, then close the drawer
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var targetId = link.getAttribute("href");
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        closeDrawer();
        window.setTimeout(function () {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 250);
      } else {
        closeDrawer();
      }
    });
  });

  // Escape key closes whichever panel is open
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (state.chatOpen) closeChat();
      else if (state.drawerOpen) closeDrawer();
    }
  });

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Scroll-reveal: cheap and jank-free because it only ever touches
  // opacity/transform (compositor-only, no layout/paint work), and each
  // element is watched once then released — no continuous scroll handler.
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal-io").forEach(function (el) {
      io.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal-io").forEach(function (el) {
      el.classList.add("in-view");
    });
  }
})();
