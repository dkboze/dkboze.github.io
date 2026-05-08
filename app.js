// FINAL — combined direction, polished.
// Wide-name layout, responsive, print stylesheet baked in.
const Final = () => {
  const S = window.SITE;

  // Fixed dusk palette (canonical purple).
  const palette = {
    g1: 'oklch(0.42 0.20 300 / 0.95)',
    g2: 'oklch(0.50 0.16 295 / 0.6)',
    l1: 'oklch(0.86 0.03 285)',
    l2: 'oklch(0.74 0.07 290)',
    l3: 'oklch(0.55 0.13 295)',
    l4: 'oklch(0.32 0.18 300)'
  };
  const css = `
    .fn-root {
      width: 100%; max-width: 1280px; margin: 0 auto;
      min-height: 1620px;
      padding-bottom: 80px;
      background: #f4f1ea;
      color: #1a1518;
      font-family: 'Cormorant Garamond', 'EB Garamond', Georgia, serif;
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
      --p: oklch(0.45 0.20 300);
      --p-soft: oklch(0.42 0.18 300);
    }
    .fn-grain {
      position: absolute; top: 0; left: 0; right: 0; height: 560px;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.16 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
      opacity: 0.5; pointer-events: none; mix-blend-mode: multiply; z-index: 5;
    }
    .fn-haze {
      position: absolute; top: 0; left: 0; right: 0; height: 560px;
      background:
        radial-gradient(ellipse 90% 70% at 50% 100%, ${palette.g1} 0%, ${palette.g2} 35%, transparent 75%),
        linear-gradient(180deg, ${palette.l1} 0%, ${palette.l2} 30%, ${palette.l3} 60%, ${palette.l4} 100%);
      filter: blur(0.5px);
      transition: opacity 0.6s;
    }
    .fn-haze::after {
      content: ''; position: absolute; inset: 0;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.1  0 0 0 0 0.05  0 0 0 0 0.2  0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
      mix-blend-mode: overlay; opacity: 0.55;
    }
    .fn-name-block {
      position: absolute; top: 230px; left: 96px; right: 96px;
      z-index: 10;
      color: oklch(0.98 0.01 290);
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
      border-radius: 50%;
      box-shadow: 0 4px 16px rgba(0,0,0,0.25), 0 0 0 1px oklch(0.98 0.01 290 / 0.18);
      filter: saturate(0.85) contrast(1.02);
    }
    .fn-portrait img {
      width: 100%; height: 100%;
      object-fit: cover;
      object-position: 55% 35%;
      display: block;
    }
    .fn-name {
      display: grid;
      grid-template-columns: 1fr 1fr auto 1fr;
      align-items: baseline;
      font-size: clamp(48px, 5.4vw, 72px);
      font-weight: 400;
      letter-spacing: -0.03em;
      line-height: 0.92;
      font-style: italic;
      margin: 0 0 56px 0;
      white-space: nowrap;
    }
    .fn-name > :nth-child(1) { text-align: left; }
    .fn-name > :nth-child(2) { text-align: center; }
    .fn-name > :nth-child(3) { text-align: center; padding: 0 0.18em; transform: translateX(0.18em); }
    .fn-name > :nth-child(4) { text-align: right; }
    .fn-bio-top {
      font-family: 'Cormorant Garamond', serif;
      font-size: 18px; line-height: 1.55;
      max-width: 560px; margin: 0;
      color: oklch(0.96 0.02 290); font-weight: 400;
    }
    .fn-bio-top em { font-style: italic; color: oklch(0.88 0.08 295); }

    .fn-body {
      position: relative; z-index: 10;
      padding: 0 96px; margin-top: 600px;
    }
    .fn-contact {
      display: flex; justify-content: space-between; align-items: baseline;
      gap: 48px; padding-bottom: 28px;
      border-bottom: 1px solid oklch(0.30 0.02 290 / 0.25);
      font-family: 'Inter', system-ui, sans-serif;
      flex-wrap: wrap;
    }
    .fn-contact-item .lbl {
      display: block;
      font-size: 9px; letter-spacing: 0.28em; text-transform: uppercase;
      color: #6a5e64; margin-bottom: 5px; font-weight: 500;
    }
    .fn-contact a {
      color: #1a1518; text-decoration: none; font-size: 13px;
      border-bottom: 1px solid oklch(0.45 0.20 300 / 0.5);
      padding-bottom: 1px; letter-spacing: 0.01em;
    }
    .fn-contact a:hover { color: var(--p); border-bottom-color: var(--p); }

    .fn-section { margin-top: 64px; }
    .fn-section-head {
      display: flex; align-items: baseline; justify-content: space-between;
      border-top: 1px solid #1a1518;
      padding-top: 14px; margin-bottom: 24px;
    }
    .fn-h2 {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic; font-weight: 400; font-size: 36px;
      letter-spacing: -0.01em; margin: 0;
    }

    .fn-track {
      display: grid; grid-template-columns: 32px 1fr 220px; gap: 32px;
      align-items: baseline; padding: 18px 0;
      border-bottom: 1px solid oklch(0.30 0.02 290 / 0.18);
      transition: background 0.3s;
      text-decoration: none; color: inherit;
    }
    .fn-track:hover { background: oklch(0.45 0.20 300 / 0.06); }
    .fn-track:hover .fn-title { color: var(--p); }
    .fn-num {
      font-family: 'Inter', system-ui, sans-serif;
      font-size: 11px; letter-spacing: 0.1em;
      color: var(--p-soft); font-weight: 500;
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
      text-transform: uppercase; color: #1a1518; text-align: right;
    }

    .fn-archive { margin-top: 8px; }
    .fn-arch-item {
      padding: 14px 0;
      border-bottom: 1px solid oklch(0.30 0.02 290 / 0.18);
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
      color: var(--p-soft); font-weight: 500;
    }
    .fn-arch-title {
      font-size: 19px; letter-spacing: -0.005em;
      transition: color 0.2s; line-height: 1.25;
    }
    .fn-arch-pub {
      font-family: 'Inter', system-ui, sans-serif;
      font-size: 11px; letter-spacing: 0.18em;
      text-transform: uppercase; color: #1a1518;
      flex-shrink: 0; text-align: right;
    }

    /* ── Responsive ── */
    @media (max-width: 900px) {
      .fn-root { min-height: 0; padding-bottom: 64px; }
      .fn-grain, .fn-haze { height: 460px; }
      .fn-portrait { width: 64px; height: 64px; }
      .fn-bio-row { grid-template-columns: 1fr 64px; gap: 16px; }
      .fn-name-block { top: 180px; left: 32px; right: 32px; }
      .fn-name { font-size: clamp(36px, 8vw, 60px); margin-bottom: 24px; }
      .fn-bio-top { font-size: 17px; }
      .fn-body { padding: 0 32px; margin-top: 500px; }
      .fn-contact { gap: 28px; }
      .fn-contact-item { flex: 1 1 auto; min-width: 140px; }
      .fn-h2 { font-size: 28px; }
      .fn-track { grid-template-columns: 24px 1fr; gap: 16px; padding: 16px 0; }
      .fn-track .fn-pub { grid-column: 2; text-align: left; margin-top: 8px; }
      .fn-title { font-size: 21px; }
      .fn-arch-item { grid-template-columns: 22px 1fr; gap: 14px; }
      .fn-arch-item .fn-arch-pub { grid-column: 2; text-align: left; margin-top: 4px; }
      .fn-arch-title { font-size: 17px; }
    }

    @media (max-width: 600px) {
      .fn-root { overflow: visible; min-height: 0; padding-bottom: 48px; }
      .fn-haze, .fn-grain { display: none; }
      .fn-name-block {
        position: relative; top: auto; left: auto; right: auto;
        padding: 72px 24px 48px;
        z-index: 1;
        background:
          radial-gradient(ellipse 90% 70% at 50% 100%, ${palette.g1} 0%, ${palette.g2} 35%, transparent 75%),
          linear-gradient(180deg, ${palette.l1} 0%, ${palette.l2} 30%, ${palette.l3} 60%, ${palette.l4} 100%);
      }
      .fn-name {
        display: flex; flex-wrap: wrap;
        gap: 0 0.32em;
        grid-template-columns: none;
        white-space: normal;
        font-size: clamp(40px, 11vw, 52px);
        margin-bottom: 24px;
      }
      .fn-name > * { text-align: left !important; transform: none !important; padding: 0 !important; }
      .fn-bio-row { grid-template-columns: 1fr; gap: 20px; }
      .fn-bio-top { font-size: 16px; max-width: 100%; }
      .fn-portrait { width: 80px; height: 80px; }
      .fn-body { padding: 32px 24px 0; margin-top: 0; }
      .fn-section { margin-top: 40px; }
      .fn-track { grid-template-columns: 28px 1fr; gap: 12px; padding: 14px 0; }
      .fn-track .fn-pub { grid-column: 2; text-align: left; margin-top: 6px; }
      .fn-arch-item { grid-template-columns: 24px 1fr; gap: 12px; }
      .fn-title { font-size: 19px; }
      .fn-arch-title { font-size: 16px; }
    }

    /* ── Print ── */
    @media print {
      @page { margin: 0.6in; }
      body, html { background: #fff !important; }
      .fn-root {
        background: #fff !important;
        min-height: 0 !important; padding: 0 !important;
        max-width: 100% !important;
      }
      .fn-haze, .fn-grain, .fn-portrait { display: none !important; }
      .fn-name-block {
        position: static !important;
        max-width: 100% !important;
        color: #1a1518 !important;
        margin-bottom: 36px;
      }
      .fn-name { font-size: 48px; color: #1a1518 !important; margin-bottom: 16px; flex-wrap: wrap; display: flex; gap: 0; grid-template-columns: none; }
      .fn-name > * { text-align: left !important; }
      .fn-bio-top { color: #1a1518 !important; font-size: 14px; max-width: 100%; }
      .fn-bio-top em { color: #1a1518 !important; }
      .fn-body { margin-top: 0 !important; padding: 0 !important; }
      .fn-contact { padding-bottom: 16px; margin-bottom: 24px; }
      .fn-contact a { border: none !important; }
      .fn-section { margin-top: 28px; page-break-inside: avoid; }
      .fn-h2 { font-size: 22px; }
      .fn-track, .fn-arch-item { padding: 8px 0 !important; page-break-inside: avoid; }

      .fn-title { font-size: 15px; }
      .fn-desc { font-size: 10px; color: #333 !important; }
      .fn-arch-title { font-size: 13px; }
      .fn-pub, .fn-arch-pub, .fn-num, .fn-arch-num { font-size: 9px; color: #555 !important; }
    }
  `;
  return /*#__PURE__*/React.createElement("div", {
    className: "fn-root"
  }, /*#__PURE__*/React.createElement("style", null, css), /*#__PURE__*/React.createElement("div", {
    className: "fn-haze"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fn-grain"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fn-name-block"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "fn-name"
  }, /*#__PURE__*/React.createElement("span", null, "Dan"), /*#__PURE__*/React.createElement("span", null, "Kagan"), /*#__PURE__*/React.createElement("span", null, "-"), /*#__PURE__*/React.createElement("span", null, "Kans")), /*#__PURE__*/React.createElement("div", {
    className: "fn-bio-row"
  }, /*#__PURE__*/React.createElement("p", {
    className: "fn-bio-top"
  }, "I'm a writer from Maryland living in New York. I work on AI, science, culture, and ideas for publications including ", /*#__PURE__*/React.createElement("em", null, "The Wall Street Journal"), " and ", /*#__PURE__*/React.createElement("em", null, "The New York Times"), ". Email for assignments. I was previously managing editor at ", /*#__PURE__*/React.createElement("em", null, "Mosaic"), "."), /*#__PURE__*/React.createElement("figure", {
    className: "fn-portrait"
  }, /*#__PURE__*/React.createElement("img", {
    src: "dkk.jpeg",
    alt: "Dan Kagan-Kans"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "fn-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fn-contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fn-contact-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Email"), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${S.email}`
  }, S.email)), /*#__PURE__*/React.createElement("div", {
    className: "fn-contact-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Elsewhere"), /*#__PURE__*/React.createElement("a", {
    href: S.twitter.url
  }, S.twitter.handle)), /*#__PURE__*/React.createElement("div", {
    className: "fn-contact-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Agent"), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${S.agent.email}`
  }, S.agent.name))), /*#__PURE__*/React.createElement("div", {
    className: "fn-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fn-section-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "fn-h2"
  }, "Recent")), S.recent.map((p, i) => /*#__PURE__*/React.createElement("a", {
    className: "fn-track",
    key: i,
    href: p.url
  }, /*#__PURE__*/React.createElement("div", {
    className: "fn-num"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "fn-title"
  }, p.title), /*#__PURE__*/React.createElement("div", {
    className: "fn-desc"
  }, p.desc)), /*#__PURE__*/React.createElement("div", {
    className: "fn-pub"
  }, p.pub)))), /*#__PURE__*/React.createElement("div", {
    className: "fn-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fn-section-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "fn-h2"
  }, "Archive")), /*#__PURE__*/React.createElement("div", {
    className: "fn-archive"
  }, S.archive.map((p, i) => /*#__PURE__*/React.createElement("a", {
    className: "fn-arch-item",
    key: i,
    href: p.url
  }, /*#__PURE__*/React.createElement("div", {
    className: "fn-arch-num"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    className: "fn-arch-title"
  }, p.title), /*#__PURE__*/React.createElement("span", {
    className: "fn-arch-pub"
  }, p.pub)))))));
};
window.Final = Final;