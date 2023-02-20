let a = false;
document.querySelector(".menu-icon").onclick = function () {
  if (a == false) {
    document.querySelector(".menu-icon span:first-child").style = `opacity: 0`;
    document.querySelector(
      ".menu-icon span:nth-child(2)"
    ).style = `top: 6px; background-color: red; transform: rotate(45deg);
  `;
    document.querySelector(
      ".menu-icon span:last-child"
    ).style = `top: 6px; background-color: red; transform: rotate(-45deg);
  `;
    document.querySelector(".nav__menu").style = `display: flex;`;
    a = true;
  } else {
    document.querySelector(
      ".menu-icon span:first-child"
    ).style = ` top: 0; opacity: 1; background-color: black;
    `;
    document.querySelector(
      ".menu-icon span:nth-child(2)"
    ).style = `top: 6px; transform: rotate(0deg); background-color: black;
  `;
    document.querySelector(
      ".menu-icon span:last-child"
    ).style = `top: 12px; transform: rotate(0deg); background-color: black;
  `;
    document.querySelector(".nav__menu").style = `display: none;
`;
    a = false;
  }
};
//button
let btn1 = document.querySelector(".buttonUp");
let btn2 = document.querySelector(".M_N");
window.onscroll = function () {
  if (window.scrollY >= 700) {
    // console.log(`Scrolling Y value Is ${window.scrollY}`);
    btn1.style.display = "block";
    btn2.style.display = "flex";
  } else {
    btn1.style.display = "none";
    btn2.style.display = "none";
  }
};

btn1.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

let i = false;
btn2.onclick = function () {
  if (i == false) {
    // document.querySelector(".M_N span:first-child").style = `opacity: 0`;
    document.querySelector(
      ".M_N span:first-child"
    ).style = `top: 6px; background-color: red; transform: rotate(45deg);
  `;
    document.querySelector(
      ".M_N span:last-child"
    ).style = `top: 6px; background-color: red; transform: rotate(-45deg);
  `;
    document.querySelector(".menu").style = `display: flex; width: 140px;`;
    let rt = document.querySelectorAll(".menu li a");
    for (j = 0; j < rt.length; j++) {
      rt[j].style = `display: block;`;
    }
    i = true;
  } else {
    // document.querySelector(
    //   ".M_N span:first-child"
    // ).style = ` top: 0; opacity: 1; background-color: black;
    // `;
    document.querySelector(
      ".M_N span:first-child"
    ).style = `top: 6px;   transform: rotate(89deg); background-color: black;
  `;
    document.querySelector(".M_N span:last-child").style = `  top: 6px;
    transform: rotate(0deg); background-color: black;
  `;

    document.querySelector(".menu").style = ` width: 0px;`;
    let rt = document.querySelectorAll(".menu li a");
    for (j = 0; j < rt.length; j++) {
      rt[j].style = `display: none;`;
    }

    i = false;
  }
};

/* الهدف كان لما يوصل الي سكشن المهارات يضيف اسم الانميشن علشان يعمل شكل حلوا لما توصل للعنصر دا */
let box = document.querySelector("#services");
let first = document.querySelector(" .box_grit .box img:first-child ");
let last = document.querySelector(" .box_grit .box img:last-child ");

/* الهدف كان لما يوصل الي سكشن المهارات يضيف اسم الانميشن علشان يعمل شكل حلوا لما توصل للعنصر دا */
let skills = document.querySelector("#skills");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
  if (window.scrollY >= box.offsetTop - 200) {
    first.classList.add("fadeInLeft");
    last.classList.add("fadeInRight");
  } else {
    first.classList.remove("fadeInLeft");
    last.classList.remove("fadeInRight");
  }
  if (window.scrollY >= skills.offsetTop - 100) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  } else {
    spans.forEach((span) => {
      span.style.width = `0`;
    });
  }
};

// what year
const spanYear = document.querySelector("footer .container span:last-child ");
let dateNow = new Date();
spanYear.innerHTML = `${dateNow.getFullYear()}`;

//More Projects  المزيد من المشاريع
const elementDiv = document.querySelector("#projects .container .projects-box");
const elementBott = document.querySelector("#projects .container .a_p .a_bott");
function* generateNumbers() {
  yield (innerHTML = `<div class="card">
  <img src="img/project-1.PNG" alt="" />
  <div class="links">
    <a href="https://andro-emad.github.io/Web-Page/" target="_blank"><i
        class="fa-regular fa-eye fa-bounce"></i></a>
    <a href="https://github.com/Andro-Emad/Web-Page" target="_blank"><i
        class="fa-brands fa-github fa-beat-fade"></i></a>
  </div>`);
  yield (innerHTML = `<div class="card">
  <img src="img/project-1.PNG" alt="" />
  <div class="links">
    <a href="https://andro-emad.github.io/Web-Page/" target="_blank"><i
        class="fa-regular fa-eye fa-bounce"></i></a>
    <a href="https://github.com/Andro-Emad/Web-Page" target="_blank"><i
        class="fa-brands fa-github fa-beat-fade"></i></a>
  </div>`);
  yield (innerHTML = `<div class="card">
  <img src="img/project-1.PNG" alt="" />
  <div class="links">
    <a href="https://andro-emad.github.io/Web-Page/" target="_blank"><i
        class="fa-regular fa-eye fa-bounce"></i></a>
    <a href="https://github.com/Andro-Emad/Web-Page" target="_blank"><i
        class="fa-brands fa-github fa-beat-fade"></i></a>
  </div>`);
  yield (innerHTML = `<div class="card">
  <img src="img/project-1.PNG" alt="" />
  <div class="links">
    <a href="https://andro-emad.github.io/Web-Page/" target="_blank"><i
        class="fa-regular fa-eye fa-bounce"></i></a>
    <a href="https://github.com/Andro-Emad/Web-Page" target="_blank"><i
        class="fa-brands fa-github fa-beat-fade"></i></a>
  </div>`);
  yield (innerHTML = `<div class="card">
  <img src="img/project-1.PNG" alt="" />
  <div class="links">
    <a href="https://andro-emad.github.io/Web-Page/" target="_blank"><i
        class="fa-regular fa-eye fa-bounce"></i></a>
    <a href="https://github.com/Andro-Emad/Web-Page" target="_blank"><i
        class="fa-brands fa-github fa-beat-fade"></i></a>
  </div>`);
  yield (innerHTML = `<div class="card">
  <img src="img/project-1.PNG" alt="" />
  <div class="links">
    <a href="https://andro-emad.github.io/Web-Page/" target="_blank"><i
        class="fa-regular fa-eye fa-bounce"></i></a>
    <a href="https://github.com/Andro-Emad/Web-Page" target="_blank"><i
        class="fa-brands fa-github fa-beat-fade"></i></a>
  </div>`);
}

elementBott.addEventListener("click", () => {
  for (let value of generateNumbers()) {
    elementDiv.innerHTML += `${value}`;
  }
});
