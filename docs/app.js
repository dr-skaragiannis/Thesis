const REPO = "https://github.com/dr-skaragiannis/Thesis";
const WELFARE = "https://welfare.euni.ionio.gr/";

const grid = document.getElementById("grid");
const search = document.getElementById("search");
const chips = document.getElementById("chips");
const countLine = document.getElementById("count");
const modal = document.getElementById("modal");
const sheet = document.getElementById("sheet");
const boot = document.getElementById("boot");
const bootText = document.getElementById("boot-text");

let topics = [];
let activeTag = "ALL";

function githubReadme(slug) {
  return `${REPO}/blob/main/Thesis%20Detailed%20Descriptions/${encodeURIComponent(slug)}/README.md`;
}

function uniqueTags(list) {
  const s = new Set();
  list.forEach((t) => (t.tags || []).forEach((x) => s.add(x)));
  return ["ALL", ...[...s].sort((a, b) => a.localeCompare(b, "el"))];
}

function filtered() {
  const q = (search.value || "").trim().toLowerCase();
  return topics.filter((t) => {
    const tagOk = activeTag === "ALL" || (t.tags || []).includes(activeTag);
    if (!tagOk) return false;
    if (!q) return true;
    const blob = [t.id, t.code, t.titleEl, t.titleEn, t.p1, t.p2, t.p3, ...(t.tags || [])]
      .join(" ")
      .toLowerCase();
    return blob.includes(q);
  });
}

function renderChips() {
  chips.innerHTML = "";
  uniqueTags(topics).forEach((tag) => {
    const b = document.createElement("button");
    b.className = "chip" + (tag === activeTag ? " active" : "");
    b.type = "button";
    b.textContent = tag === "ALL" ? "ALL" : tag;
    b.addEventListener("click", () => {
      activeTag = tag;
      renderChips();
      renderGrid();
    });
    chips.appendChild(b);
  });
}

function renderGrid() {
  const rows = filtered();
  countLine.textContent = `// ${String(rows.length).padStart(2, "0")} / ${String(topics.length).padStart(2, "0")} modules online`;
  grid.innerHTML = "";
  rows.forEach((t) => {
    const btn = document.createElement("button");
    btn.className = "card";
    btn.type = "button";
    btn.setAttribute("aria-label", t.titleEl);
    btn.innerHTML = `
      <div class="card-head"><span>ID ${t.id}</span><span class="status">AVAILABLE</span></div>
      <h2>${escapeHtml(t.code)}</h2>
      <div class="en">${escapeHtml(t.titleEn)}</div>
      <div class="tags">${(t.tags || []).map((x) => `<span class="tag">${escapeHtml(x)}</span>`).join("")}</div>
    `;
    btn.addEventListener("click", () => openModal(t));
    grid.appendChild(btn);
  });
}

function escapeHtml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function openModal(t) {
  sheet.innerHTML = `
    <div class="sheet-top">
      <span>MODULE ${escapeHtml(t.id)} // CLEARANCE: STUDENT</span>
      <button class="close" type="button" aria-label="Κλείσιμο">×</button>
    </div>
    <h2>${escapeHtml(t.titleEl)}</h2>
    <div class="en">${escapeHtml(t.titleEn)}</div>
    <p>${escapeHtml(t.p1)}</p>
    <p>${escapeHtml(t.p2)}</p>
    <p>${escapeHtml(t.p3)}</p>
    <div class="tags">${(t.tags || []).map((x) => `<span class="tag">${escapeHtml(x)}</span>`).join("")}</div>
    <div class="actions">
      <a class="btn solid" href="${githubReadme(t.slug)}" target="_blank" rel="noopener">Πλήρης εκφώνηση</a>
      <a class="btn" href="${WELFARE}" target="_blank" rel="noopener">Δήλωση θέματος</a>
    </div>
  `;
  sheet.querySelector(".close").addEventListener("click", closeModal);
  modal.hidden = false;
  modal.querySelector(".close")?.focus();
}

function closeModal() {
  modal.hidden = true;
}

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
search.addEventListener("input", renderGrid);

async function typeBoot() {
  const lines = [
    "> boot thesis-board 2026",
    "> handshake ionio.gr ... ok",
    "> mount /topics --secure",
    `> decrypt ${topics.length || 37} payloads`,
    "> ACCESS GRANTED_",
  ];
  bootText.textContent = "";
  for (const line of lines) {
    bootText.textContent += line + "\n";
    await new Promise((r) => setTimeout(r, 180));
  }
  await new Promise((r) => setTimeout(r, 280));
  boot.classList.add("gone");
  setTimeout(() => boot.remove(), 600);
}

async function main() {
  const res = await fetch("./topics.json");
  topics = await res.json();
  document.getElementById("stat-count").textContent = String(topics.length).padStart(2, "0");
  renderChips();
  renderGrid();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) boot.remove();
  else typeBoot();
}

main().catch((err) => {
  bootText.textContent = "> failed to load topics.json\n> " + err.message;
});
