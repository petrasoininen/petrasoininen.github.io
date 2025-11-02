const navHeight = 132;
const paddingTop = 80;
const topBuffer = 150;
const sidebarItems = document.querySelectorAll("#sidebar a");
const sections = document.querySelectorAll("main section");

function updateActiveNav() {
  if (window.innerWidth < 1440) {
    return;
  }

  let current = "overview";
  sections.forEach((section) => {
    if (
      window.scrollY + navHeight + paddingTop + topBuffer >=
      section.offsetTop
    ) {
      current = section.id;
    }
  });

  sidebarItems.forEach((item) => {
    if (item.href.includes(current)) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();
