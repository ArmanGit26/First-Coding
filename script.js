const photos = [
  { title: "Golden Hour", cat: "portrait", color: "linear-gradient(145deg,#8a5a3c,#d8a55c)" },
  { title: "Mountain Ridge", cat: "landscape", color: "linear-gradient(145deg,#2b3b4a,#5c7d99)" },
  { title: "City Lights", cat: "street", color: "linear-gradient(145deg,#1f1f26,#40405c)" },
  { title: "Quiet Portrait", cat: "portrait", color: "linear-gradient(145deg,#4a3a3a,#a97a6b)" },
  { title: "Misty Valley", cat: "landscape", color: "linear-gradient(145deg,#31413a,#6f9186)" },
  { title: "Market Walk", cat: "street", color: "linear-gradient(145deg,#3a2f25,#a9895f)" },
];

const grid = document.getElementById("grid");
const filters = document.querySelectorAll(".filter");

function renderGallery(filter = "all") {
  grid.innerHTML = "";
  photos
    .filter((p) => filter === "all" || p.cat === filter)
    .forEach((p) => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.backgroundImage = p.color;
      card.innerHTML = `<div class="info"><h4>${p.title}</h4><span>${p.cat}</span></div>`;
      grid.appendChild(card);
    });
}

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderGallery(btn.dataset.filter);
  });
});

renderGallery();
