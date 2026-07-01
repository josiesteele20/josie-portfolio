/* ===================================================
   Reese Calloway — Portfolio Site
   script.js — project data, grid render, chip + modal
   =================================================== */

// Edit this array to swap in your own projects.
// "color" is just a placeholder background — replace the
// .swatch div's contents in script.js below with a real
// <img> or <video> once you have final assets.
const projects = [
  { title:"Solstice Coffee Co.", tag:"Brand Identity", mark:"S", color:"#1E3AF1",
    body:"A full identity system for a small-batch roaster, built around a wordmark that bends with the steam of the cup it sits beside." },
  { title:"Northbound Running Club", tag:"Campaign", mark:"N", color:"#15140F",
    body:"Poster and kit design for a city-wide running series, leaning on bold type and a route-map motif used across every touchpoint." },
  { title:"Atlas Civic Forum", tag:"Editorial Design", mark:"A", color:"#706F68",
    body:"Layout and print system for a quarterly civic journal, designed to read clearly at length without losing personality." },
  { title:"Verde Market", tag:"Packaging", mark:"V", color:"#1E3AF1",
    body:"Shelf packaging for a regional grocer's private label line, using a restrained palette to differentiate by category, not color chaos." },
  { title:"Lowland Athletics", tag:"Sports Branding", mark:"L", color:"#15140F",
    body:"Identity and uniform graphics for a collegiate athletics rebrand, balancing tradition with a sharper, modern mark." },
  { title:"Float Audio", tag:"Product Launch", mark:"F", color:"#706F68",
    body:"Launch identity and packaging for a wireless speaker line, including motion assets for the product reveal film." },
  { title:"Harbor & Pine", tag:"Brand Refresh", mark:"H", color:"#1E3AF1",
    body:"A ground-up refresh for a coastal home goods brand, retiring a dated mark in favor of something quieter and more durable." },
  { title:"Civic Ballot Initiative", tag:"Social Campaign", mark:"C", color:"#15140F",
    body:"Voter awareness campaign assets distributed across print, social, and transit — designed to be legible at a glance." }
];

const grid = document.getElementById('grid');

projects.forEach((p) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="swatch" style="background:${p.color}">
      <span class="mark display">${p.mark}</span>
    </div>
    <div class="info">
      <div class="tag">${p.tag}</div>
      <div class="title display">${p.title}</div>
    </div>
  `;
  card.addEventListener('click', () => openModal(p));
  card.addEventListener('mouseenter', () => showChip(p.title));
  card.addEventListener('mouseleave', hideChip);
  grid.appendChild(card);
});

// cursor chip
const chip = document.getElementById('chip');
let chipVisible = false;

window.addEventListener('mousemove', (e) => {
  if (chipVisible) {
    chip.style.left = e.clientX + 'px';
    chip.style.top = e.clientY + 'px';
  }
});

function showChip(text){
  chip.textContent = text;
  chip.classList.add('active');
  chipVisible = true;
}
function hideChip(){
  chip.classList.remove('active');
  chipVisible = false;
}

// modal
const backdrop = document.getElementById('modalBackdrop');
const modalTag = document.getElementById('modalTag');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

function openModal(p){
  modalTag.textContent = p.tag;
  modalTitle.textContent = p.title;
  modalBody.textContent = p.body;
  backdrop.classList.add('open');
}

document.getElementById('modalClose').addEventListener('click', () => backdrop.classList.remove('open'));
backdrop.addEventListener('click', (e) => { if (e.target === backdrop) backdrop.classList.remove('open'); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') backdrop.classList.remove('open'); });
