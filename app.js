// FINAL — D + C + E mix:
// no top gradient (D: ink), purple bar at the bottom (C), slight purple edge on the portrait (E).
const Final = () => {
  const S = window.SITE;

  const css = `
    :root {
      --p: oklch(0.42 0.20 300);
      --p-soft: oklch(0.50 0.16 298);
      --p-deep: oklch(0.32 0.18 300);
      --cream: #f4f1ea;
      --ink: #1a1518;
    }
    .fn-root {
      width: 100%; max-width: 1280px; margin: 0 auto;
      background: var(--cream);
      color: var(--ink);
      font-family: 'Cormorant Garamond', 'EB Garamond', Georgia, serif;
      position: relative;
      box-sizing: border-box;
    }
    .fn-head {
      padding: 96px 96px 48px;
    }
    .fn-name {
      display: flex; align-items: center; gap: 24px;
      font-family: 'Inter', system-ui, sans-serif;
      font-size: clamp(14px, 1.2vw, 18px);
      font-weight: 500; letter-spacing: 0.42em;
      text-transform: uppercase; line-height: 1;
      margin: 0 0 56px 0;
      color: var(--p-deep);
    }
    .fn-bio-row {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 116px;
      gap: 48px;
      align-items: center;
    }
    .fn-portrait {
      width: 116px; height: 116px;
      margin: 0;
      overflow: hidden;
      border-radius: 0;
      /* Slight purple edge (E) — outer purple ring + soft purple glow */
      box-shadow:
        0 0 0 1px var(--cream),
        0 0 0 2px var(--p),
        0 8px 24px oklch(0.42 0.20 300 / 0.18);
      filter: saturate(0.92) contrast(1.02);
    }
    .fn-portrait img {
      width: 100%; height: 100%;
      object-fit: cover;
      object-position: 55% 35%;
      display: block;
    }
    .fn-bio-top {
      font-family: 'Cormorant Garamond', serif;
      font-size: 18px; line-height: 1.55;
      max-width: 560px; margin: 0;
      color: var(--ink); font-weight: 400;
    }
    .fn-bio-top em { font-style: italic; color: var(--ink); }

    .fn-body {
      padding: 0 96px;
    }
    .fn-contact {
      display: flex; justify-content: space-between; align-items: baseline;
      gap: 48px; padding-bottom: 28px;
      border-bottom: 1px solid oklch(0.42 0.18 300 / 0.25);
      font-family: 'Inter', system-ui, sans-serif;
      flex-wrap: wrap;
    }
    .fn-contact-item .lbl {
      display: block;
      font-size: 9px; letter-spacing: 0.28em; text-transform: uppercase;
      color: #6a5e64; margin-bottom: 5px; font-weight: 500;
    }
    .fn-contact a {
      color: var(--ink); text-decoration: none; font-size: 13px;
      border-bottom: 1px solid oklch(0.45 0.20 300 / 0.5);
      padding-bottom: 1px; letter-spacing: 0.01em;
    }
    .fn-contact a:hover { color: var(--p); border-bottom-color: var(--p); }

    .fn-section { margin-top: 64px; }
    .fn-section-head {
      display: flex; align-items: baseline; justify-content: space-between;
      border-top: 1px solid var(--p-deep);
      padding-top: 14px; margin-bottom: 24px;
    }
    .fn-h2 {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic; font-weight: 400; font-size: 28px;
      letter-spacing: -0.01em; margin: 0;
      color: var(--p-deep);
    }

    .fn-track {
      display: grid; grid-template-columns: 32px 1fr 220px; gap: 32px;
      align-items: baseline; padding: 18px 0;
      border-bottom: 1px solid oklch(0.42 0.18 300 / 0.18);
      transition: background 0.3s;
      text-decoration: none; color: inherit;
    }
    .fn-track:hover { background: oklch(0.45 0.20 300 / 0.06); }
    .fn-track:hover .fn-title { color: var(--p); }
    .fn-num {
      font-family: 'Inter', system-ui, sans-serif;
      font-size: 11px; letter-spacing: 0.1em;
      color: var(--ink); font-weight: 500;
    }
    .fn-title {
      font-size: 26px; font-weight: 400;
      letter-spacing: -0.01em; line-height: 1.15;
      transition: color 0.3s;
    }
    .fn-desc {
      font-family: 'Inter', system-ui, sans-serif;
      font-size: 12px; line-height: 1.55;
      color: #4a3d44; margin-top: 6px;
      max-width: 600px; letter-spacing: 0.01em;
    }
    .fn-pub {
      font-family: 'Inter', system-ui, sans-serif;
      font-size: 11px; letter-spacing: 0.18em;
      text-transform: uppercase; color: var(--ink); text-align: right;
    }

    .fn-archive { margin-top: 8px; }
    .fn-arch-item {
      padding: 14px 0;
      border-bottom: 1px solid oklch(0.42 0.18 300 / 0.18);
      display: grid; grid-template-columns: 28px 1fr 200px; gap: 24px;
      align-items: baseline;
      text-decoration: none; color: inherit;
      transition: background 0.3s;
    }
    .fn-arch-item:hover { background: oklch(0.45 0.20 300 / 0.06); }
    .fn-arch-item:hover .fn-arch-title { color: var(--p); }
    .fn-arch-num {
      font-family: 'Inter', system-ui, sans-serif;
      font-size: 11px; letter-spacing: 0.1em;
      color: var(--ink); font-weight: 500;
    }
    .fn-arch-title {
      font-size: 19px; letter-spacing: -0.005em;
      transition: color 0.2s; line-height: 1.25;
    }
    .fn-arch-pub {
      font-family: 'Inter', system-ui, sans-serif;
      font-size: 11px; letter-spacing: 0.18em;
      text-transform: uppercase; color: var(--ink);
      flex-shrink: 0; text-align: right;
    }

    /* Purple bar at bottom (C) — no content */
    .fn-footer-bar {
      position: relative;
      margin-top: 96px;
      height: 220px;
      background: var(--p-deep);
      overflow: hidden;
    }
    .fn-footer-mark {
      position: absolute; z-index: 2;
      font-family: 'Inter', system-ui, sans-serif;
      font-size: 13px; font-weight: 500;
      letter-spacing: 0.3em;
      color: oklch(0.78 0.08 295 / 0.55);
      text-transform: uppercase;
    }
    .fn-footer-mark.tl { top: 28px; left: 40px; }
    .fn-footer-mark.tr { top: 28px; right: 40px; }
    .fn-footer-mark.bl { bottom: 28px; left: 40px; }
    .fn-footer-mark.br { bottom: 28px; right: 40px; }
    .fn-footer-rule {
      position: absolute; left: 40px; right: 40px; top: 50%; height: 1px;
      background: oklch(0.78 0.08 295 / 0.25);
      z-index: 1;
    }
    .fn-footer-bar::before {
      content: ''; position: absolute; inset: 0;
      background: radial-gradient(ellipse 90% 70% at 50% 0%, var(--p) 0%, transparent 70%);
      opacity: 0.85;
    }
    .fn-footer-bar::after {
      content: ''; position: absolute; inset: 0;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.1  0 0 0 0 0.05  0 0 0 0 0.2  0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
      mix-blend-mode: overlay; opacity: 0.45; pointer-events: none;
    }

    /* — Responsive — */
    @media (max-width: 900px) {
      .fn-head { padding: 64px 32px 32px; }
      .fn-portrait { width: 64px; height: 64px; box-shadow: 0 0 0 1px var(--cream), 0 0 0 1.5px var(--p); }
      .fn-bio-row { grid-template-columns: 1fr 64px; gap: 16px; }
      .fn-name { font-size: 13px; gap: 16px; margin-bottom: 24px; letter-spacing: 0.32em; }
      .fn-bio-top { font-size: 17px; }
      .fn-body { padding: 0 32px; }
      .fn-contact { gap: 28px; }
      .fn-contact-item { flex: 1 1 auto; min-width: 140px; }
      .fn-h2 { font-size: 24px; }
      .fn-track { grid-template-columns: 24px 1fr; gap: 16px; padding: 16px 0; }
      .fn-track .fn-pub { grid-column: 2; text-align: left; margin-top: 8px; }
      .fn-title { font-size: 21px; }
      .fn-arch-item { grid-template-columns: 22px 1fr; gap: 14px; }
      .fn-arch-item .fn-arch-pub { grid-column: 2; text-align: left; margin-top: 4px; }
      .fn-arch-title { font-size: 17px; }
      .fn-footer-bar { height: 140px; margin-top: 64px; }
    }

    @media (max-width: 600px) {
      .fn-head { padding: 56px 24px 24px; }
      .fn-name { font-size: 12px; gap: 14px; margin-bottom: 24px; letter-spacing: 0.3em; flex-wrap: wrap; }
      .fn-bio-row { grid-template-columns: 1fr; gap: 20px; }
      .fn-bio-top { font-size: 16px; max-width: 100%; }
      .fn-portrait { width: 80px; height: 80px; }
      .fn-body { padding: 0 24px; }
      .fn-section { margin-top: 40px; }
      .fn-track { grid-template-columns: 28px 1fr; gap: 12px; padding: 14px 0; }
      .fn-track .fn-pub { grid-column: 2; text-align: left; margin-top: 6px; }
      .fn-arch-item { grid-template-columns: 24px 1fr; gap: 12px; }
      .fn-title { font-size: 19px; }
      .fn-arch-title { font-size: 16px; }
      .fn-footer-bar { height: 100px; margin-top: 48px; }
    }

    /* — Print — */
    @media print {
      @page { margin: 0.6in; }
      body, html { background: #fff !important; }
      .fn-root { background: #fff !important; max-width: 100% !important; }
      .fn-portrait, .fn-footer-bar { display: none !important; }
      .fn-head { padding: 0 !important; margin-bottom: 24px; }
      .fn-name { font-size: 12px; color: #1a1518 !important; margin-bottom: 16px; gap: 16px; letter-spacing: 0.3em; }
      .fn-bio-top { color: #1a1518 !important; font-size: 14px; max-width: 100%; }
      .fn-bio-top em { color: #1a1518 !important; }
      .fn-body { padding: 0 !important; }
      .fn-contact { padding-bottom: 16px; margin-bottom: 24px; }
      .fn-contact a { border: none !important; }
      .fn-section { margin-top: 28px; page-break-inside: avoid; }
      .fn-h2 { font-size: 18px; color: #1a1518 !important; }
      .fn-section-head { border-top-color: #1a1518 !important; }
      .fn-track, .fn-arch-item { padding: 8px 0 !important; page-break-inside: avoid; }
      .fn-title { font-size: 15px; }
      .fn-desc { font-size: 10px; color: #333 !important; }
      .fn-arch-title { font-size: 13px; }
      .fn-pub, .fn-arch-pub, .fn-num, .fn-arch-num { font-size: 9px; color: #555 !important; }
    }
  `;
  return React.createElement("div", { className: "fn-root" },
    React.createElement("style", null, css),
    React.createElement("header", { className: "fn-head" },
      React.createElement("h1", { className: "fn-name" },
        React.createElement("span", null, "Dan"),
        React.createElement("span", null, "Kagan-Kans")
      ),
      React.createElement("div", { className: "fn-bio-row" },
        React.createElement("p", { className: "fn-bio-top" },
          "I'm a writer from Maryland living in New York. I work on AI, science, culture, and ideas for publications including ",
          React.createElement("em", null, "The Wall Street Journal"), " and ",
          React.createElement("em", null, "The New York Times"),
          ". Email for assignments. I was previously managing editor at ",
          React.createElement("em", null, "Mosaic"), "."
        ),
        React.createElement("figure", { className: "fn-portrait" },
          React.createElement("img", { src: "dkk.jpeg", alt: "Portrait of Dan Kagan-Kans", width: "700", height: "700", loading: "eager", decoding: "async" })
        )
      )
    ),
    React.createElement("main", { className: "fn-body" },
      React.createElement("address", { className: "fn-contact" },
        React.createElement("div", { className: "fn-contact-item" },
          React.createElement("span", { className: "lbl" }, "Email"),
          React.createElement("a", { href: `mailto:${S.email}` }, S.email)
        ),
        React.createElement("div", { className: "fn-contact-item" },
          React.createElement("span", { className: "lbl" }, "Elsewhere"),
          React.createElement("a", { href: S.twitter.url }, S.twitter.handle)
        ),
        React.createElement("div", { className: "fn-contact-item" },
          React.createElement("span", { className: "lbl" }, "Agent"),
          React.createElement("a", { href: `mailto:${S.agent.email}` }, S.agent.name)
        )
      ),
      React.createElement("section", { className: "fn-section", "aria-labelledby": "sec-recent" },
        React.createElement("div", { className: "fn-section-head" },
          React.createElement("h2", { className: "fn-h2", id: "sec-recent" }, "Recent")
        ),
        S.recent.map((p, i) => React.createElement("a", { className: "fn-track", key: i, href: p.url },
          React.createElement("div", { className: "fn-num", "aria-hidden": "true" }, String(i + 1).padStart(2, '0')),
          React.createElement("div", null,
            React.createElement("div", { className: "fn-title" }, p.title),
            React.createElement("div", { className: "fn-desc" }, p.desc)
          ),
          React.createElement("div", { className: "fn-pub" }, p.pub)
        ))
      ),
      React.createElement("section", { className: "fn-section", "aria-labelledby": "sec-archive" },
        React.createElement("div", { className: "fn-section-head" },
          React.createElement("h2", { className: "fn-h2", id: "sec-archive" }, "Archive")
        ),
        React.createElement("div", { className: "fn-archive" },
          S.archive.map((p, i) => React.createElement("a", { className: "fn-arch-item", key: i, href: p.url },
            React.createElement("div", { className: "fn-arch-num", "aria-hidden": "true" }, String(i + 1).padStart(2, '0')),
            React.createElement("div", { className: "fn-arch-title" }, p.title),
            React.createElement("span", { className: "fn-arch-pub" }, p.pub)
          ))
        )
      )
    ),
    React.createElement("footer", { className: "fn-footer-bar", "aria-hidden": "true" },
      React.createElement("span", { className: "fn-footer-mark tl" }, "R"),
      React.createElement("span", { className: "fn-footer-mark tr" }, "K"),
      React.createElement("div", { className: "fn-footer-rule" }),
      React.createElement("span", { className: "fn-footer-mark bl" }, "T"),
      React.createElement("span", { className: "fn-footer-mark br" }, "D")
    )
  );
};
window.Final = Final;
