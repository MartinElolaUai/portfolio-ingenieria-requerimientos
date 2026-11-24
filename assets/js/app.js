(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fecha = (iso) => { const [y, m, d] = iso.split("-"); return `${d}/${m}/${y}`; };
  const ICON = {
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    dl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12m0 0l-5-5m5 5l5-5M4 21h16"/></svg>',
    yt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  };
  const disponible = (a) => a.estado === "ok" && (a.doc || a.pagina);
  const verHref = (a) => `ver.html?id=${encodeURIComponent(a.id)}`;
  const badge = (a) => a.categoria === "simulacion"
    ? `<span class="badge b-ia">IA · Individual</span>`
    : `<span class="badge b-${a.tipo}">${a.tipo === "grupal" ? "Grupal" : "Individual"}</span>`;
  const acciones = (a) => {
    if (!disponible(a)) return `<span class="badge b-pend">Pendiente de carga</span>`;
    let h = `<a class="btn primary" href="${verHref(a)}">${ICON.eye}Ver</a>`;
    if (a.doc) h += `<a class="btn" href="${a.doc}" download>${ICON.dl}PDF</a>`;
    if (a.video) h += `<a class="btn" href="${verHref(a)}#video">${ICON.yt}Video</a>`;
    return h;
  };

  // ---- estadísticas
  const actividades = ARTEFACTOS;
  const nInd = actividades.filter((a) => a.tipo === "individual").length;
  const nGru = actividades.filter((a) => a.tipo === "grupal").length;
  $("#stats").innerHTML = `
    <div class="stat"><strong>${actividades.length}</strong><span>Artefactos</span></div>
    <div class="stat lime"><strong>${nInd}</strong><span>Individuales</span></div>
    <div class="stat coral"><strong>${nGru}</strong><span>Grupales</span></div>
    <div class="stat sky"><strong>${EPISODIOS.length}</strong><span>Episodios de podcast</span></div>`;

  // ---- TP integrador
  $("#team").innerHTML = `<b>Grupo «Noción e Impacto»</b><br>${GRUPO.map(esc).join(" · ")}`;
  const tps = ARTEFACTOS.filter((a) => a.categoria === "tp");
  $("#pipeline").innerHTML = tps.map((a, i) => `
    <li data-step="${i + 1}">
      <h4>${esc(a.titulo)}</h4>
      <div class="row">${acciones(a)}<span class="date">${a.id} · ${fecha(a.fecha)}</span></div>
    </li>`).join("");
  $("#episodes").innerHTML = EPISODIOS.map((e) => `
    <article class="ep">
      <img src="${e.portada}" alt="Portada del Episodio ${e.n}, generada con inteligencia artificial" loading="lazy" width="132" height="132">
      <div>
        <p class="kicker">Episodio ${e.n} · ${e.dur}</p>
        <h4>${esc(e.titulo)}</h4>
        <audio controls preload="none" src="${e.audio}"></audio>
        <div class="row">
          ${e.youtube ? `<a class="btn primary" href="${e.youtube}" target="_blank" rel="noopener">${ICON.yt}Ver en YouTube</a>` : ""}
          <a class="btn" href="ver.html?id=${e.entrega}">${ICON.eye}Guion (${e.entrega})</a>
        </div>
      </div>
    </article>`).join("");

  // ---- recorrido por unidades
  const FILTROS = [
    { k: "todos", t: "Todos", f: () => true },
    { k: "individual", t: "Individuales", f: (a) => a.tipo === "individual" },
    { k: "grupal", t: "Grupales", f: (a) => a.tipo === "grupal" },
    { k: "simulacion", t: "Simulaciones con IA", f: (a) => a.categoria === "simulacion" },
    { k: "investigacion", t: "Investigación", f: (a) => a.categoria === "investigacion" },
  ];
  const lista = ARTEFACTOS.filter((a) => a.categoria !== "tp");
  $("#filters").innerHTML = FILTROS.map((f, i) =>
    `<button class="chip" type="button" data-k="${f.k}" aria-pressed="${i === 0}">${f.t}<span class="n">${lista.filter(f.f).length}</span></button>`).join("");
  $("#units").innerHTML = UNIDADES.map((u) => {
    const items = lista.filter((a) => a.unidad === u.n).sort((a, b) => a.fecha.localeCompare(b.fecha));
    if (!items.length) return "";
    const clases = [...new Set(items.map((a) => a.clase))];
    return `<div class="unit" data-unit="${u.n}">
      <div class="unit-h"><span class="u">U${u.n}</span><h3>${esc(u.titulo)}</h3><span class="c">Clase${clases.length > 1 ? "s" : ""} ${clases.join(", ")}</span></div>
      ${items.map((a) => `
        <article class="item" id="${a.id}" data-tipo="${a.tipo}" data-cat="${a.categoria}">
          <div class="idc">${a.id}<small>Clase ${a.clase}<br>${fecha(a.fecha)}</small></div>
          <div>
            <h4>${esc(a.titulo)}</h4>
            <p>${esc(a.resumen)}</p>
            ${a.integrantes ? `<p class="team-line">${esc(a.integrantes)}</p>` : ""}
            <div class="tags">${(a.temas || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
          </div>
          <div class="side">${badge(a)}<div class="acts">${acciones(a)}</div></div>
        </article>`).join("")}
    </div>`;
  }).join("");
  $("#filters").addEventListener("click", (ev) => {
    const b = ev.target.closest(".chip"); if (!b) return;
    document.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", c === b));
    const f = FILTROS.find((x) => x.k === b.dataset.k).f;
    document.querySelectorAll(".item").forEach((el) => { el.hidden = !f(lista.find((a) => a.id === el.id)); });
    document.querySelectorAll(".unit").forEach((u) => { u.hidden = !u.querySelector(".item:not([hidden])"); });
  });

  // ---- matriz de trazabilidad
  const filas = [
    { t: "Actividades de clase", f: (a) => a.categoria === "actividad" },
    { t: "Investigación", f: (a) => a.categoria === "investigacion" },
    { t: "Simulaciones con IA", f: (a) => a.categoria === "simulacion" },
    { t: "TP integrador", f: (a) => a.categoria === "tp" },
  ];
  const cls = (a) => (a.categoria === "simulacion" ? "s" : a.tipo === "grupal" ? "g" : "i");
  const destino = (a) => (a.categoria === "tp" ? "#tp" : `#${a.id}`);
  $("#matrix").innerHTML = `
    <thead><tr><th>Tipo \\ Unidad</th>${UNIDADES.map((u) => `<th>U${u.n} · ${esc(u.titulo)}</th>`).join("")}</tr></thead>
    <tbody>${filas.map((r) => `<tr><td class="rowh">${r.t}</td>${UNIDADES.map((u) =>
      `<td>${ARTEFACTOS.filter((a) => r.f(a) && a.unidad === u.n).map((a) =>
        `<a class="${cls(a)}" href="${destino(a)}" title="${esc(a.titulo)}">${a.id}</a>`).join("") || '<span style="color:var(--line-2)">—</span>'}</td>`).join("")}</tr>`).join("")}
    </tbody>`;

  // ---- índice activo
  const links = [...document.querySelectorAll(".toc a")];
  const io = new IntersectionObserver((ents) => {
    ents.forEach((e) => { if (e.isIntersecting) links.forEach((l) => l.classList.toggle("on", l.getAttribute("href") === "#" + e.target.id)); });
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("section.block").forEach((s) => io.observe(s));
})();
