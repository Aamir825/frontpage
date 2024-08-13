// Toggle Menus in Navbar
let btn = document.getElementById("toggle");
let menus = document.getElementById("menus");

btn.addEventListener("click", () => {
  menus.classList.toggle("show");
});

/*********************************************************/

// Dynamic Gallery
const tabs = document.querySelectorAll(".coll-tabs ul li");
const cards = document.querySelectorAll(".coll-gallery .card");

tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    document.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");

    cards.forEach((card) => {
      card.classList.add("hide");
      if (
        card.dataset.name === event.target.dataset.name ||
        event.target.dataset.name === "all"
      ) {
        card.classList.remove("hide");
      }
    });
  });
});
