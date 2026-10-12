const REPO = "https://github.com/dr-skaragiannis/Thesis";
const WELFARE = "https://welfare.euni.ionio.gr/";
const STORE = "thesis-board-quests-v1";
const RANKS = [
  { min: 0, name: "unranked", next: 50 },
  { min: 50, name: "scout", next: 120 },
  { min: 120, name: "operator", next: 220 },
  { min: 220, name: "analyst", next: 370 },
  { min: 370, name: "architect", next: 370 },
];

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
let seen = loadSeen();

function loadSeen() {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORE) || "[]"));
  } catch {
    return new Set();
  }
}

function saveSeen() {
  localStorage.setItem(STORE, JSON.stringify([...seen]));
}

function xpFor(id) {
  return 10 + (Number(id) % 7);
}

function totalXp() {
  return [...seen].reduce((sum, id) => sum + xpFor(id), 0);
}

function rankState() {
  const xp = totalXp();
  let current = RANKS[0];
  for (const r of RANKS) {
    if (xp >= r.min) current = r;
  }
  const span = Math.max(1, current.next - current.min);
  const pct = current.name === "architect" ? 100 : Math.min(100, Math.round(((xp - current.min) / span) * 100));
  return { xp, current, pct };
}

function renderHud() {
  const { xp, current, pct } = rankState();
  document.getElementById("rank").textContent = current.name;
  document.getElementById("quest-count").textContent = String(seen.size);
  document.getElementById("xp-label").textContent = `${xp} XP · ${current.name}`;
  document.getElementById("xp-fill").style.width = `${pct}%`;
}

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
    b.textContent = tag === "ALL" ? "all quests" : tag;
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
  countLine.textContent = `${String(rows.length).padStart(2, "0")} / ${String(topics.length).padStart(2, "0")} quests visible`;
  grid.innerHTML = "";
  rows.forEach((t) => {
    const btn = document.createElement("button");
    btn.className = "card" + (seen.has(t.id) ? " seen" : "");
    btn.type = "button";
    btn.setAttribute("aria-label", t.titleEl);
    btn.innerHTML = `
      <div class="card-head">
        <span>quest ${escapeHtml(t.id)}</span>
        <span class="xp-chip">+${xpFor(t.id)} xp</span>
      </div>
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
  seen.add(t.id);
  saveSeen();
  renderHud();
  renderGrid();
  sheet.innerHTML = `
    <div class="sheet-top">
      <span>quest ${escapeHtml(t.id)} · +${xpFor(t.id)} xp</span>
      <button class="close" type="button" aria-label="Κλείσιμο">×</button>
    </div>
    <h2>${escapeHtml(t.titleEl)}</h2>
    <div class="en">${escapeHtml(t.titleEn)}</div>
    <p>${escapeHtml(t.p1)}</p>
    <p>${escapeHtml(t.p2)}</p>
    <p>${escapeHtml(t.p3)}</p>
    <div class="tags">${(t.tags || []).map((x) => `<span class="tag">${escapeHtml(x)}</span>`).join("")}</div>
    <div class="actions">
      <a class="btn solid" href="${githubReadme(t.slug)}" target="_blank" rel="noopener">πλήρης εκφώνηση</a>
      <a class="btn" href="${WELFARE}" target="_blank" rel="noopener">δήλωση θέματος</a>
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
    "thesis board",
    "loading quests…",
    `${topics.length} modules ready`,
  ];
  bootText.textContent = "";
  for (const line of lines) {
    bootText.textContent += line + "\n";
    await new Promise((r) => setTimeout(r, 140));
  }
  boot.classList.add("gone");
  setTimeout(() => boot.remove(), 500);
}

async function main() {
  const res = await fetch("./topics.json");
  topics = await res.json();
  document.getElementById("stat-count").textContent = String(topics.length).padStart(2, "0");
  renderHud();
  renderChips();
  renderGrid();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) boot.remove();
  else typeBoot();
}

main().catch((err) => {
  bootText.textContent = "failed to load topics.json\n" + err.message;
});
