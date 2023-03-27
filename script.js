const header = document.querySelector("header")
window.addEventListener ("scroll",function() {
    header.classList.toggle ("sticky",window.scrollY > 100)
});

const menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", function() {
  // Get the ID of the target section from the href attribute of the first menu item
  const targetSectionId = document.querySelector(".navlist li:first-child a").getAttribute("href").substr(1);
  // Get the target section element by ID
  const targetSection = document.getElementById(targetSectionId);
  // Scroll the page to the target section
  targetSection.scrollIntoView({ behavior: "smooth" });
});

