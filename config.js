/* ==========================================================================
   YOUNG SADEEQUE — SITE CONFIG
   Edit anything in this file to update the site. No other file needs to
   change for the items below — main.js reads this and builds the page.
   After editing, just re-upload this file to GitHub (same file name).
   ========================================================================== */
window.SITE_CONFIG = {

  // ---- Profile photo --------------------------------------------------
  // The file shown in the circle on the homepage. To change the photo,
  // easiest is to upload a new file named exactly "hoto.jpg" (overwrite
  // the old one) — or upload it under a different name and change the
  // filename below to match.
  photo: "hoto.jpg",

  // ---- About me ---------------------------------------------------------
  // One array item = one paragraph. Add or remove paragraphs freely.
  about: [
    "I'm Abubakar S Abdullahi, publicly known as Young Sadeeque — a professional painter and creative designer with a reputation for quiet confidence and disciplined craft. Every project I take on is built on one standard: quality that speaks before I do.",
    "My creative practice spans traditional painting alongside a full suite of digital design services — photo and video editing, AI-assisted image generation, invitation cards, flyers, banners, and graphic design. A closer look at each is below."
  ],

  // ---- My services --------------------------------------------------
  // Add, remove, or edit items freely — each one automatically renders
  // as a new card in the same style as the rest, no other change needed.
  // "icon" can be any emoji.
  services: [
    { icon: "🎨", label: "Painting Services" },
    { icon: "📸", label: "Photo Editing" },
    { icon: "🎬", label: "Video Editing" },
    { icon: "🤖", label: "AI Image Generation" },
    { icon: "💌", label: "Invitation Cards" },
    { icon: "📄", label: "Flyers Design" },
    { icon: "📢", label: "Banners Design" },
    { icon: "🖌️", label: "Graphic Design" }
  ],

  // ---- Contact ------------------------------------------------------
  // The short intro line shown above the contact buttons.
  contactIntro: "You've reached the official contact point for Young Sadeeque. Use any of the channels below — all are verified and monitored personally.",

  // Each entry becomes one button, both on the homepage (if inHero: true)
  // and in the Contact section (every entry appears there).
  // "type" controls the icon + brand color for known types below:
  //   whatsapp, facebook, instagram, tiktok, email
  // Any other "type" (or a new one you invent) still renders correctly,
  // just with a neutral glass style and a generic icon.
  contacts: [
    { type: "whatsapp",  label: "WhatsApp",  href: "https://wa.me/2349165132561", inHero: false },
    { type: "facebook",  label: "Facebook",  href: "https://www.facebook.com/youngsadeeque", inHero: true },
    { type: "instagram", label: "Instagram", href: "https://www.instagram.com/young_sadeeque", inHero: true },
    { type: "tiktok",    label: "TikTok",    href: "https://www.tiktok.com/@young_sadeeque", inHero: true },
    { type: "email",     label: "abubakarsadeeque9781@gmail.com", heroLabel: "Email", href: "mailto:abubakarsadeeque9781@gmail.com", inHero: true }
  ],

  // ---- Chatbot --------------------------------------------------------
  // Paste a new bot's details here. "src" is the iframe URL your bot
  // provider gave you. Leave src empty ("") to show a "not connected
  // yet" placeholder instead.
  bot: {
    <iframe src="https://sadeeque0.github.io/Sadeeque-ai/embed.html?bot_id=SdqF979F75" title="Sadeeque AI" loading="lazy" style="width:100%;height:600px;border:0;" allow="clipboard-write"></iframe>
allow="clipboard-write"></iframe>
    title: "Young Sadeeque chatbot",
    allow: "clipboard-write"
  },

  // ---- Colors ---------------------------------------------------------
  // Any valid CSS color (hex, rgb, etc). These control every button,
  // accent, icon and background splash on the site.
  theme: {
    blue: "#3B6EF6",
    blueBright: "#5B8DFF",
    purple: "#8B5CF6",
    teal: "#22D3EE",
    bgBase: "#EEF2FC"
  }
};
