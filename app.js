/* Renders content.js into the page. You shouldn't need to edit this. */
(function () {
  const S = window.SITE || {};
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
  const $ = sel => document.querySelector(sel);
  const set = (sel, html) => { const el = $(sel); if (el) el.innerHTML = html; };
  const projects = Array.isArray(S.projects) ? S.projects : [];

  // Shared: nav, footer, title
  document.querySelectorAll("[data-name]").forEach(el => el.textContent = S.name || "");
  set("#mark", esc(S.initials || S.name));
  set("#year", new Date().getFullYear());
  if (!S.resume) document.querySelectorAll("[data-resume]").forEach(el => el.remove());
  else document.querySelectorAll("[data-resume]").forEach(el => el.href = S.resume);

  const figure = (src, alt) => src
    ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" onerror="this.outerHTML='<div class=&quot;placeholder&quot;><span>Image not found: ${esc(src)}</span></div>'">`
    : `<div class="placeholder"><span>Add an image</span></div>`;

  const titleblock = p => `
    <div class="titleblock">
      <div><small>Project</small><b>${esc(p.title)}</b></div>
      <div><small>Type</small><b>${esc(p.type || "—")}</b></div>
      <div><small>Tools</small><b>${esc(p.tools || "—")}</b></div>
      <div><small>Year</small><b>${esc(p.year || "—")}</b></div>
    </div>`;

  // Homepage
  if ($("#projects")) {
    document.title = `${S.name} | Engineering Portfolio`;
    set("#headline", esc(S.headline));
    set("#intro", esc(S.intro) + (S.location ? ` Based in ${esc(S.location)}.` : ""));
    set("#about-text", (S.about || []).map(p => `<p>${esc(p)}</p>`).join(""));
    set("#links", (S.links || []).map((l, i) =>
      `<a class="btn${i === 0 ? " primary" : ""}" href="${esc(l.url)}">${esc(l.label)}</a>`).join(""));
    set("#skills", (S.skills || []).map(s =>
      `<div><b>${esc(s.group)}</b><span>${esc(s.items)}</span></div>`).join(""));

    set("#projects", projects.length ? projects.map((p, i) => `
      <a class="sheet" href="project.html?id=${encodeURIComponent(p.id)}">
        <div class="figure">${figure(p.cover, p.title)}</div>
        <div class="body">
          <span class="sheet-no">Sheet ${i + 1} of ${projects.length}</span>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.summary)}</p>
          <span class="more">Read the case study</span>
        </div>
        ${titleblock(p)}
      </a>`).join("")
      : `<div class="empty"><h3>No projects yet</h3><p>Add your first project in <code>content.js</code>. Copy the example block inside <code>projects</code> and fill it in.</p></div>`);
  }

  // Project page
  if ($("#project")) {
    const id = new URLSearchParams(location.search).get("id");
    const idx = projects.findIndex(p => p.id === id);
    const p = projects[idx];
    if (!p) {
      set("#project", `<div class="empty"><h3>Project not found</h3><p>Check that the link's id matches an <code>id</code> in <code>content.js</code>.</p><a class="btn" href="index.html">Back to all projects</a></div>`);
      return;
    }
    document.title = `${p.title} | ${S.name}`;
    const next = projects[(idx + 1) % projects.length];
    set("#project", `
      <a class="back" href="index.html#work">All projects</a>
      <header class="p-head">
        <h1>${esc(p.title)}</h1>
        <p class="lead">${esc(p.summary)}</p>
      </header>
      <div class="sheet static">
        <div class="figure wide">${figure(p.cover, p.title)}</div>
        ${titleblock(p)}
      </div>
      ${(p.results || []).length ? `<div class="results">${p.results.map(r =>
        `<div><b>${esc(r.value)}</b><span>${esc(r.label)}</span></div>`).join("")}</div>` : ""}
      <div class="case">${(p.sections || []).map(s =>
        `<section><h2>${esc(s.heading)}</h2><p>${esc(s.text)}</p></section>`).join("")}</div>
      ${(p.gallery || []).length ? `<div class="gallery">${p.gallery.map(g =>
        `<figure>${figure(g.src, g.caption)}<figcaption>${esc(g.caption)}</figcaption></figure>`).join("")}</div>` : ""}
      ${(p.links || []).length ? `<div class="btns">${p.links.map(l =>
        `<a class="btn" href="${esc(l.url)}">${esc(l.label)}</a>`).join("")}</div>` : ""}
      ${projects.length > 1 ? `<a class="next" href="project.html?id=${encodeURIComponent(next.id)}"><small>Next project</small>${esc(next.title)}</a>` : ""}
    `);
  }
})();
