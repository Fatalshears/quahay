/* Quá Hay — shared UI: header, navigation, search, motion, theming. */
(function () {
  const { categories, topics, icons } = window.QH;
  const body = document.body;
  const root = body.dataset.root || "";
  const page = body.dataset.page || "";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const catStyle = (cat) => `--c:${categories[cat].primary};--c2:${categories[cat].accent}`;

  /* ---------- Vietnamese-insensitive normalisation (1:1 length for NFC text) ---------- */
  const normChar = (ch) => ch.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase().charAt(0) || ch;
  const norm = (s) => Array.from(String(s).normalize("NFC"), normChar).join("");

  const ICON_SEARCH = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>`;

  /* ---------- Header ---------- */
  function renderHeader() {
    const isMac = /Mac|iPhone|iPad/.test(navigator.platform);
    const drop = topics.map((t) => `
      <a href="${root}${t.url}" style="${catStyle(t.cat)}">
        <span class="ico">${icons[t.icon]}</span>
        <span>${esc(t.short)}<small>${esc(categories[t.cat].name)}</small></span>
      </a>`).join("");
    const html = `
      <a class="skip" href="#main">Bỏ qua tới nội dung</a>
      ${page === "article" ? '<div class="progress" aria-hidden="true"></div>' : ""}
      <header class="site-header">
        <div class="wrap">
          <a class="brand" href="${root}index.html" aria-label="Quá Hay — trang chủ">
            <svg class="art glow" viewBox="0 0 32 32"><circle class="p" cx="16" cy="16" r="12"/><path class="a" d="M10 17l4 4 8-9"/></svg>
            <span>Quá<b>Hay</b></span>
          </a>
          <button class="menu-btn" aria-label="Mở menu" aria-expanded="false">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
          <nav class="nav" aria-label="Điều hướng chính">
            <a href="${root}index.html" ${page === "home" ? 'aria-current="page"' : ""}>Trang chủ</a>
            <div class="nav-drop">
              <button aria-expanded="false" aria-haspopup="true">Chủ đề</button>
              <div class="drop-panel">${drop}</div>
            </div>
            <a href="${root}index.html#danh-muc">Danh mục</a>
            <a href="${root}index.html#tong-ket">Tổng kết</a>
            <button class="search-btn" type="button" data-open-search>
              ${ICON_SEARCH}<span>Tìm kiếm</span><kbd>${isMac ? "⌘" : "Ctrl"} K</kbd>
            </button>
          </nav>
        </div>
      </header>`;
    body.insertAdjacentHTML("afterbegin", html);

    const menuBtn = $(".menu-btn"), nav = $(".nav");
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open);
    });
    const dd = $(".nav-drop"), ddBtn = $("button", dd);
    ddBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = dd.classList.toggle("open");
      ddBtn.setAttribute("aria-expanded", open);
    });
    document.addEventListener("click", (e) => {
      if (!dd.contains(e.target)) { dd.classList.remove("open"); ddBtn.setAttribute("aria-expanded", "false"); }
    });
  }

  /* ---------- Footer ---------- */
  function renderFooter() {
    const cats = Object.entries(categories)
      .filter(([k]) => topics.some((t) => t.cat === k))
      .map(([k, c]) => `<li><a href="${root}index.html?cat=${k}#danh-muc">${esc(c.name)}</a></li>`).join("");
    const list = topics.map((t) => `<li><a href="${root}${t.url}">${esc(t.short)}</a></li>`).join("");
    body.insertAdjacentHTML("beforeend", `
      <footer class="site-footer">
        <div class="wrap">
          <div>
            <a class="brand" href="${root}index.html"><span>Quá<b>Hay</b></span></a>
            <p style="margin-top:12px">Lần theo những chuyện ai cũng tưởng là thật. Bài nào cũng kèm nguồn để bạn tự kiểm tra lại.</p>
          </div>
          <div><h4>Chủ đề</h4><ul>${list}</ul></div>
          <div><h4>Danh mục</h4><ul>${cats}</ul></div>
          <p class="note">Mã nguồn mở, chạy trên GitHub Pages. Tài nguyên miễn phí: phông chữ <a href="https://github.com/google/fonts">Space Grotesk &amp; Be Vietnam Pro</a> (SIL Open Font License), tìm kiếm mờ <a href="https://github.com/krisk/Fuse">Fuse.js</a> (Apache 2.0). Minh họa là SVG tự vẽ. Nếu thấy chỗ nào sai hoặc thiếu nguồn, hãy <a href="https://github.com/Fatalshears/quahay/issues">mở issue trên GitHub</a>.</p>
        </div>
      </footer>`);
  }

  /* ---------- Search ---------- */
  const docs = topics.map((t) => ({
    t,
    title: norm(t.title), short: norm(t.short), myth: norm(t.myth || t.hook), fact: norm(t.fact),
    tags: norm(t.tags.join(" ")), cat: norm(categories[t.cat].name)
  }));
  let fuse = null;
  if (window.Fuse) {
    fuse = new window.Fuse(docs, {
      keys: [{ name: "title", weight: 3 }, { name: "short", weight: 3 }, { name: "tags", weight: 2 }, { name: "cat", weight: 1.5 }, { name: "myth", weight: 1 }, { name: "fact", weight: 1 }],
      threshold: 0.4, ignoreLocation: true, minMatchCharLength: 2
    });
  }
  // Exact (accent-insensitive) word matches first, ranked by field weight; Fuse.js only for typos.
  const weights = { title: 3, short: 3, tags: 2, cat: 1.5, myth: 1, fact: 1 };
  function search(q) {
    const nq = norm(q.trim());
    if (!nq) return topics.slice();
    const words = nq.split(/\s+/);
    const scored = docs.map((d) => {
      let score = 0;
      for (const w of words) {
        const best = Math.max(0, ...Object.keys(weights).map((k) => (d[k].includes(w) ? weights[k] : 0)));
        if (!best) return null;
        score += best;
      }
      return { d, score };
    }).filter(Boolean).sort((a, b) => b.score - a.score);
    if (scored.length) return scored.filter((r) => r.score >= scored[0].score * 0.5).map((r) => r.d.t);
    return fuse ? fuse.search(nq).map((r) => r.item.t) : [];
  }
  function highlight(text, q) {
    const words = norm(q.trim()).split(/\s+/).filter((w) => w.length > 1);
    if (!words.length) return esc(text);
    const n = norm(text), marks = new Array(text.length).fill(false);
    words.forEach((w) => { let i = n.indexOf(w); while (i > -1) { for (let k = i; k < i + w.length; k++) marks[k] = true; i = n.indexOf(w, i + 1); } });
    let out = "", open = false;
    Array.from(text.normalize("NFC")).forEach((ch, i) => {
      if (marks[i] && !open) { out += "<mark>"; open = true; }
      if (!marks[i] && open) { out += "</mark>"; open = false; }
      out += esc(ch);
    });
    return out + (open ? "</mark>" : "");
  }
  QH.search = search;
  QH.norm = norm;

  function renderSearch() {
    body.insertAdjacentHTML("beforeend", `
      <div class="search-modal" role="dialog" aria-modal="true" aria-label="Tìm kiếm chủ đề">
        <div class="search-backdrop" data-close-search></div>
        <div class="search-box">
          <label class="search-field">${ICON_SEARCH}
            <span class="sr-only">Từ khóa</span>
            <input type="search" placeholder="Tìm chủ đề, ví dụ: bia, NASA, não, Napoleon…" autocomplete="off" spellcheck="false">
            <kbd>Esc</kbd>
          </label>
          <ul class="search-results" role="listbox"></ul>
          <div class="search-foot"><span><kbd>↑</kbd> <kbd>↓</kbd> di chuyển</span><span><kbd>Enter</kbd> mở</span><span>Gõ không dấu cũng được</span></div>
        </div>
      </div>`);
    const modal = $(".search-modal"), input = $("input", modal), list = $(".search-results", modal);
    let active = 0, lastFocus = null;

    function draw() {
      const q = input.value, res = search(q);
      active = 0;
      if (!res.length) { list.innerHTML = `<li class="search-empty">Không tìm thấy chủ đề nào cho “${esc(q)}”.</li>`; return; }
      list.innerHTML = res.map((t, i) => `
        <li role="option"><a href="${root}${t.url}" class="${i === 0 ? "active" : ""}" style="${catStyle(t.cat)}">
          <span class="ico">${icons[t.icon]}</span>
          <span><span class="r-cat" style="color:var(--c)">${esc(categories[t.cat].name)}</span>
          <span class="r-title">${highlight(t.title, q)}</span>${highlight(t.myth || t.hook, q)}</span>
        </a></li>`).join("");
    }
    function setActive(i) {
      const links = $$("a", list);
      if (!links.length) return;
      active = (i + links.length) % links.length;
      links.forEach((a, k) => a.classList.toggle("active", k === active));
      links[active].scrollIntoView({ block: "nearest" });
    }
    function open(q) {
      lastFocus = document.activeElement;
      modal.classList.add("open");
      document.documentElement.style.overflow = "hidden";
      if (typeof q === "string") input.value = q;
      draw();
      setTimeout(() => input.focus(), 10);
    }
    function close() {
      modal.classList.remove("open");
      document.documentElement.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    }
    QH.openSearch = open;
    input.addEventListener("input", draw);
    input.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") { e.preventDefault(); setActive(active + 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); setActive(active - 1); }
      else if (e.key === "Enter") { const a = $$("a", list)[active]; if (a) location.href = a.href; }
    });
    modal.addEventListener("click", (e) => { if (e.target.closest("[data-close-search]")) close(); });
    document.addEventListener("click", (e) => { if (e.target.closest("[data-open-search]")) { e.preventDefault(); open(); } });
    document.addEventListener("keydown", (e) => {
      const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) { e.preventDefault(); modal.classList.contains("open") ? close() : open(); }
      else if (e.key === "/" && !typing && !modal.classList.contains("open")) { e.preventDefault(); open(); }
      else if (e.key === "Escape" && modal.classList.contains("open")) close();
    });
  }

  /* ---------- Motion: line drawing + reveal ---------- */
  function prepDraw(svg) {
    let i = 0;
    $$("path, circle, line, polyline, polygon, rect, ellipse", svg).forEach((el) => {
      if (el.closest(".nodraw") || el.classList.contains("fade") || el.classList.contains("fp") || el.classList.contains("fa")) return;
      el.setAttribute("pathLength", "1");
      el.setAttribute("data-draw", "");
      if (!el.style.getPropertyValue("--i")) el.style.setProperty("--i", el.dataset.i || i);
      i++;
    });
  }
  QH.prepDraw = prepDraw;
  function initMotion() {
    $$(".draw").forEach(prepDraw);
    const targets = $$(".draw, .reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-drawn", "is-in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-drawn", "is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -8% 0px" });
    targets.forEach((el) => io.observe(el));
  }

  /* ---------- Theme switching by scroll position ---------- */
  function initThemeZones() {
    const zones = $$("[data-zone]");
    if (!zones.length) return;
    const base = body.dataset.theme;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) body.dataset.theme = en.target.dataset.zone || base;
      });
    }, { rootMargin: "-45% 0px -45% 0px" });
    zones.forEach((z) => io.observe(z));
  }

  /* ---------- Article helpers ---------- */
  function initArticle() {
    const bar = $(".progress");
    if (bar) {
      const upd = () => {
        const h = document.documentElement;
        const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
        bar.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
      };
      document.addEventListener("scroll", upd, { passive: true });
      upd();
    }

    const toc = $(".toc ol");
    const heads = $$(".prose h2[id]");
    if (toc && heads.length) {
      toc.innerHTML = heads.map((h) => `<li><a href="#${h.id}">${esc(h.dataset.toc || h.textContent)}</a></li>`).join("");
      const links = $$("a", toc);
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
        });
      }, { rootMargin: "0px 0px -70% 0px" });
      heads.forEach((h) => io.observe(h));
    }

    const pager = $(".pager");
    const slug = body.dataset.slug;
    const idx = topics.findIndex((t) => t.slug === slug);
    if (pager && idx > -1) {
      const prev = topics[(idx - 1 + topics.length) % topics.length];
      const next = topics[(idx + 1) % topics.length];
      pager.innerHTML = `
        <a href="${root}${prev.url}" style="${catStyle(prev.cat)}"><small>← Chủ đề trước</small>${esc(prev.title)}</a>
        <a class="next" href="${root}${next.url}" style="${catStyle(next.cat)}"><small>Chủ đề tiếp theo →</small>${esc(next.title)}</a>`;
    }
  }

  renderHeader();
  renderSearch();
  renderFooter();
  initMotion();
  initThemeZones();
  if (page === "article") initArticle();
  document.dispatchEvent(new CustomEvent("qh:ready"));
})();
