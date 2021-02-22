const listA = document.querySelectorAll(".project-list li a");
const allImg = document.querySelectorAll(".item");

const modeBtn = document.querySelector(".na-mode button");
const modeSpan = document.querySelector(".na-mode span");
const modeIcon = document.querySelector("button ion-icon");

const appearP = document.querySelectorAll(".title p");

const allInfo = document.querySelectorAll(".container-info");

let mode = false;
let enter = false;

listA.forEach((a) => {
  a.addEventListener("mouseenter", () => {
    enter = true;
    opacity(a);

    for (const info of allInfo) {
      if (info.dataset.key === a.dataset.key) {
        info.style.zIndex = 10;
        info.style.opacity = 1;
      } else {
        info.style.zIndex = 0;
        info.style.opacity = 0;
      }
    }
    for (const img of allImg) {
      if (img.dataset.key === a.dataset.key) {
        img.style.zIndex = 10;
        img.style.opacity = 1;
      } else {
        img.style.zIndex = 0;
        img.style.opacity = 0;
      }
    }
  });
  a.addEventListener("mouseleave", () => {
    enter = false;
    opacity(a);
  });
});

function opacity(a) {
  appearP.forEach((el) => {
    if (enter === true && a.dataset.key === el.dataset.key) {
      el.classList.remove("opacity-disable");
      el.style.opacity = "1";
      el.classList.add("opacity-active");
    } else if (enter === false && a.dataset.key === el.dataset.key) {
      el.classList.remove("opacity-active");
      el.style.opacity = "0";
      el.classList.add("opacity-disable");
    }
  });
}

modeBtn.addEventListener("click", () => {
  if (document.body.classList.contains("mode-sombre")) {
    document.body.classList.remove("mode-sombre");
    mode = false;
    effect();
  } else {
    document.body.classList.add("mode-sombre");
    mode = true;
    effect();
  }
});

function effect() {
  if (mode === true) {
    modeSpan.innerText = "Mode sombre";
    modeSpan.classList.add("mode-effect");
    modeSpan.style.right = "0px";
    setTimeout(() => {
      modeSpan.classList.remove("mode-effect");
    }, 800);
  } else if (mode === false) {
    modeSpan.innerText = "Mode clair";
    modeSpan.classList.add("mode-effect");
    modeSpan.style.right = "28px";
    setTimeout(() => {
      modeSpan.classList.remove("mode-effect");
    }, 800);
  }
}
