// PopUp Image

let images = document.querySelectorAll(".all-projects .pic");

images.forEach((img) => {
  img.onclick = function () {
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    let imgHolder = document.createElement("div");
    imgHolder.className = "img-holder";
    let image = document.createElement("img");
    image.className = "image ";
    image.src = img.getAttribute("url");
    imgHolder.appendChild(image);
    let close = document.createElement("span");
    close.innerHTML = "X";
    close.className = "close";
    imgHolder.appendChild(close);
    overlay.appendChild(imgHolder);
    document.body.appendChild(overlay);
  };
});

document.addEventListener("click", (e) => {
  if (e.target.className === "close") {
    let element = e.target.parentElement;
    element.parentElement.remove();
  } else if (e.target.className === "popup-overlay") {
    e.target.remove();
  }
});
