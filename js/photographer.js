let menu = document.querySelector("nav  .menu"),
  close = document.querySelector("nav .close "),
  links = document.querySelector("nav .links-sm");

menu.onclick = function () {
  links.style.width = "100%";
  links.style.paddingLeft = "25px";
};

close.onclick = function () {
  links.style.width = "0";
  links.style.paddingLeft = "0";
};

let lis = document.querySelectorAll("nav ul li div"),
  sections = [
    document.querySelector(".about"),
    document.querySelector(".features"),
    document.querySelector(".projects"),
    document.querySelector(".testimonials"),
    document.querySelector(".contact"),
  ];

window.onscroll = function () {
  let windowTop = document.documentElement.scrollTop;
  for (let i = 0; i < sections.length; i++) {
    if (
      windowTop + 200 >= sections[i].offsetTop &&
      windowTop + 200 < sections[i].clientHeight + sections[i].offsetTop
    ) {
      lis.forEach((li) => {
        if (li.id === sections[i].id) {
          li.classList.add("active");
        }
      });
    } else {
      lis.forEach((li) => {
        if (li.id === sections[i].id) {
          li.classList.remove("active");
        }
      });
    }
  }
};

lis.forEach((li) => {
  li.onclick = function () {
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].id == li.id) {
        window.scrollTo({
          top: sections[i].offsetTop - 50,
        });
      }
    }
  };
});

let smLis = document.querySelectorAll(".links-sm div");

smLis.forEach((smLi) => {
  smLi.addEventListener("click", () => {
    links.style.width = "0";
    links.style.paddingLeft = "0";
  });
});
