const photos = [
  { title: "Golden Hour", cat: "portrait", img: "images/golden-hour.jpg", color: "linear-gradient(145deg,#8a5a3c,#d8a55c)" },
  { title: "Mountain Ridge", cat: "landscape", img: "images/mountain-ridge.jpg", color: "linear-gradient(145deg,#2b3b4a,#5c7d99)" },
  { title: "City Lights", cat: "street", img: "images/city-lights.jpg", color: "linear-gradient(145deg,#1f1f26,#40405c)" },
  { title: "Quiet Portrait", cat: "portrait", img: "images/quiet-portrait.jpg", color: "linear-gradient(145deg,#4a3a3a,#a97a6b)" },
  { title: "Misty Valley", cat: "landscape", img: "images/misty-valley.jpg", color: "linear-gradient(145deg,#31413a,#6f9186)" },
  { title: "Market Walk", cat: "street", img: "images/market-walk.jpg", color: "linear-gradient(145deg,#3a2f25,#a9895f)" },
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
      // photo on top, gradient behind it as a fallback if the image is missing
      card.style.backgroundImage = `url("${p.img}"), ${p.color}`;
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

/* ---------- Sidebar navigation ---------- */
const navItems = document.querySelectorAll("nav li");
const sections = ["home", "gallery", "about", "services", "contact"].map((id) =>
  document.getElementById(id)
);

function setActive(id) {
  navItems.forEach((li) => {
    const link = li.querySelector("a");
    li.classList.toggle("active", link.getAttribute("href") === "#" + id);
  });
}

// highlight the menu item when the user clicks it
navItems.forEach((li) => {
  li.querySelector("a").addEventListener("click", () => {
    setActive(li.querySelector("a").getAttribute("href").slice(1));
  });
});

// highlight the menu item of the section currently on screen
function updateOnScroll() {
  let current = "home";
  const atBottom =
    window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
  if (atBottom) {
    current = "contact";
  } else {
    sections.forEach((sec) => {
      if (sec.getBoundingClientRect().top <= window.innerHeight * 0.4) {
        current = sec.id;
      }
    });
  }
  setActive(current);
}
window.addEventListener("scroll", updateOnScroll);
updateOnScroll();

// hero buttons scroll to their section
document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .getElementById(btn.dataset.scroll)
      .scrollIntoView({ behavior: "smooth" });
  });
});
