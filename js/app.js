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
// const an_skills = document.querySelector(".skill .html::after");
// window.onscroll = function () {
//   console.log(window.scrollY);
//   if (window.scrollY >= 1000) {
//     an_skills.style.cssText = `animation-name: up-and-html;`;
//   } else {
//     an_skills.style.cssText = `animation-name: up-and;`;
//   }
// };
