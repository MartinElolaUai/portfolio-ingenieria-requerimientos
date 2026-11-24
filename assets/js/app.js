(function () {
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fecha = (iso) => { const [y, m, d] = iso.split("-"); return `${d}/${m}/${y}`; };
  const ver = (a) => `ver.html?id=${encodeURIComponent(a.id)}`;

  // TP integrador
  const tps = ARTEFACTOS.filter((a) => a.categoria === "tp");
  $("#entregas").innerHTML = tps.map((a, i) => `
    <article class="card">
      <p class="label">Entrega ${i + 1} · ${fecha(a.fecha)}</p>
      <h3>${esc(a.titulo.replace(/^Entrega \d+ · /, ""))}</h3>
      <div class="btn-row">
        <a class="btn btn--secondary" href="${ver(a)}">Ver la entrega</a>
      </div>
    </article>`).join("");
  $("#team").textContent = `Con el Grupo 9: ${GRUPO.join(", ")}.`;

  // Podcast
  const yt = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
  $("#episodios").innerHTML = EPISODIOS.map((e) => `
    <article class="card ep">
      <img src="${e.portada}" alt="Portada del Episodio ${e.n}" width="168" height="168" loading="lazy">
      <div class="ep__body">
        <p class="label">Episodio ${e.n} · ${e.dur} min</p>
        <h3>${esc(e.titulo)}</h3>
        <audio controls preload="none" src="${e.audio}" aria-label="Audio del Episodio ${e.n}"></audio>
        <div class="btn-row">
          ${e.youtube ? `<a class="btn btn--primary" href="${e.youtube}" target="_blank" rel="noopener">${yt}Ver en YouTube</a>` : ""}
          <a class="btn btn--secondary" href="ver.html?id=${e.entrega}">Leer el guion</a>
        </div>
      </div>
    </article>`).join("");

  // Actividades, separadas en individuales y grupales
  const fila = (a) => `
    <li class="row">
      <p class="row__when">Clase ${a.clase}<br>${fecha(a.fecha)}</p>
      <div>
        <p class="row__title">${esc(a.titulo)}</p>
        <p class="row__meta">${a.categoria === "simulacion" ? "Con IA · " : ""}Unidad ${a.unidad}</p>
      </div>
      <div class="row__acts">
        <a class="btn btn--secondary" href="${ver(a)}" aria-label="Ver el trabajo: ${esc(a.titulo)}">Ver trabajo</a>
        ${a.video ? `<a class="btn btn--secondary" href="${ver(a)}#video" aria-label="Ver el video: ${esc(a.titulo)}">Ver video</a>` : ""}
      </div>
    </li>`;
  const acts = ARTEFACTOS.filter((a) => a.categoria !== "tp");
  $("#lista-ind").innerHTML = acts.filter((a) => a.tipo !== "grupal").map(fila).join("");
  $("#lista-grp").innerHTML = acts.filter((a) => a.tipo === "grupal").map(fila).join("");
})();
