import style from "./style.css";
import hero from "./assets/0__k7tukRsPMECDxY.jpg";
import CV from "./assets/FotoCV.jpg";
import Html from "./assets/Icons/html5.svg";
import Css from "./assets/Icons/css.svg";
import BootStrap from "./assets/Icons/bootstrap.svg"
import JS from "./assets/Icons/javascript.svg"
import React from "./assets/Icons/react.svg"
import Node from "./assets/Icons/node.svg"
import Jquery from "./assets/Icons/jquery.svg"
import MySql from "./assets/Icons/mysql.svg"
import WebPack from "./assets/Icons/webpack.svg"
import GitHub from "./assets/Icons/github.svg"
import FavIcon from "./assets/icons8-mek-quake.svg"
import Projects_1 from "./assets/Proyecto-1.jpg"
import Projects_1_Image from "./assets/Proyecto-1.jpg"
import Projects_1_Reloj from "./assets/Proyecto-1-reloj.jpg"
import Projects_1_Color from "./assets/Proyecto-1-Color.jpg"
import Projects_2 from "./assets/Proyecto-2.jpg"
import Project_3 from "./assets/Captura de pantalla 2022-03-18 195346.jpg"

// *******************MENU******************
let d = document,
  $hamburguesa = d.querySelector(".menu-btn"),
  $openHamburguesa = d.querySelector(".open"),
  $closeHamburguesa = d.querySelector(".close"),
  $menuNav = d.querySelector(".menu");
(() => {
  d.addEventListener("click", (e) => {
    if (e.target == $openHamburguesa) {
      $menuNav.classList.add("is-active");
      $openHamburguesa.classList.add("none");
      $closeHamburguesa.classList.remove("none");
    }
    if (e.target == $closeHamburguesa) {
      $menuNav.classList.remove("is-active");
      $openHamburguesa.classList.remove("none");
      $closeHamburguesa.classList.add("none");
    }
    if (e.target.matches("trabajo-1")) {
      alert("hola");
    }
    if (!e.target.matches(".menu a")) return false;

    $hamburguesa.firstElementChild.classList.remove("none");
    $hamburguesa.lastElementChild.classList.add("none");
    $menuNav.classList.remove("is-active");
  });
})(d);

// **************ModalWindow*****************
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

// ContactForm

((d) => {
  let $mail = d.getElementById("contact-form-email"),
    $name = d.getElementById("contact-form-name"),
    $submit = d.getElementById("Submit");

  $mail.addEventListener("keyup", (e) => {
    $submit.classList.add("not-allowed");
    $mail.value = $mail.value.toString();
    let expreMail = new RegExp(/[\w]+@{1}[\w]+\.[a-z]{2,3}/);
    if (!expreMail.test($mail.value)) {
      $mail.classList.add("invalid");
      $submit.classList.add("not-allowed");
      $mail.classList.remove("valid");
    } else {
      $mail.classList.remove("invalid");
      $mail.classList.add("valid");
    }
  });
  $name.addEventListener("keyup", (e) => {
    $submit.classList.add("not-allowed");
    $name.value = $name.value.toString();

    let expreName = new RegExp(/[A-Z][a-zA-Z]/);
    if (!expreName.test($name.value)) {
      $name.classList.add("invalid");
      $submit.classList.add("not-allowed");
      $name.classList.remove("valid");
    } else {
      $name.classList.remove("invalid");
      $name.classList.add("valid");
    }
  });
  let $textarea = d.getElementById("textarea");
  const contador = document.getElementById("contador");
  $textarea.addEventListener("keyup", (e) => {
    $submit.classList.add("not-allowed");
    const target = e.target;
    const longitudMax = target.getAttribute("maxlength");
    const longitudAct = target.value.length;

    contador.innerHTML = `${longitudAct}/${longitudMax}`;

    if (longitudAct >= 20) {
      $submit.classList.remove("not-allowed");
    } else {
      $submit.classList.add("not-allowed");
    }

    let expretext = new RegExp(/[A-Z][a-zA-Z]/);
    if (expretext.test($textarea.value)) {
      $textarea.classList.add("invalid");
      $submit.classList.add("not-allowed");
      $textarea.classList.remove("valid");
    } else {
      $textarea.classList.remove("invalid");
      $textarea.classList.add("valid");
    }
    if ((touchDevice = "ontouchstart" in document.documentElement)) {
      $submit.classList.remove("not-allowed");
    }
  });

  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response"),
    $modal3 = d.querySelector("#modal3"),
    $CV = d.querySelector("#CVdowload");
  $CV.addEventListener("click", (e) => {
    e.preventDefault();
    alert("hola");
  });

  $form.addEventListener("submit", (e) => {
    $loader.classList.remove("none");
    e.preventDefault();

    fetch("https://formsubmit.co/ajax/deivid11pdp1@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: $name.value,
        email: `De parte de ${$mail.value} `,
        message: $textarea.value,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => {
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message = err.statusText || "Ocurrio un error, intenta de nuevo ";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.statusText}: ${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setInterval((e) => {
          $modal3.classList.remove("is-visible");
        }, 2000);
      });
  });
})(document);

//  Insert Images
d.querySelector(
  ".article-2"
).innerHTML = `<img src="${CV}" alt="Hoja de Vida DeividPaez">`;
d.getElementById("HeroImage").style.setProperty("--image", `url(${hero})`);
let $tecnology = d.getElementById("Tecnology"),
  // HTML5
  html = d.createElement("img");
html.src = `${Html}`;
html.title = "HTML5"
$tecnology.appendChild(html);
// CSS
let css = d.createElement("img");
css.src = `${Css}`
css.title = "Css"
 $tecnology.appendChild(css)
//Boostrap
let bootstrap = d.createElement("img");
bootstrap.src = `${BootStrap}`
bootstrap.title = "BootStrap"
 $tecnology.appendChild(bootstrap)
 //JavaScript
 let javascript = d.createElement("img");
javascript.src = `${JS}`
javascript.title = "JavaScript"
 $tecnology.appendChild(javascript)
//React
let react = d.createElement("img");
react.src = `${React}`
react.title = "React"
 $tecnology.appendChild(react)
//Node JS
let node = d.createElement("img");
node.src = `${Node}`
node.title = "Node Js"
 $tecnology.appendChild(node)
//JQuery
let jquery = d.createElement("img");
jquery.src = `${Jquery}`
jquery.title = "Jquery"
 $tecnology.appendChild(jquery)
//MySQL
let mysqll = d.createElement("img");
mysqll.src = `${MySql}`
mysqll.title = "MySQL"
 $tecnology.appendChild(mysqll)
 //WebPack
 let webpack = d.createElement("img");
webpack.src = `${WebPack}`
webpack.title = "Webpack"
 $tecnology.appendChild(webpack)
 //GitHub
 let githubb = d.createElement("img");
githubb.src = `${GitHub}`
githubb.title = "Github"
 $tecnology.appendChild(githubb)
//  **************FAVICON********************
d.getElementsByTagName("link")[0].href = `${FavIcon}`
// ***************Projects*********************
const imgWork1 = d.createElement("img")
imgWork1.src = `${Projects_1}`
let $work_1 = d.getElementById("work-1")
$work_1.appendChild(imgWork1) 
d.getElementById("Proyecto_1").setAttribute("src", `${Projects_1_Image}`)
d.getElementById("Proyecto_1_Reloj").setAttribute("src", `${Projects_1_Reloj}`)
d.getElementById("Proyecto_1_Color").setAttribute("src", `${Projects_1_Color}`)
//Project 2
d.getElementById("Project-2").setAttribute("src", `${Projects_2}`)
d.getElementById("Project-Image").setAttribute("src", `${Projects_2}`)
//Project 3

let $work3 = d.getElementsByClassName("Image-Project3")
$work3[0].setAttribute("src", `${Project_3}`)
$work3[1].setAttribute("src", `${Project_3}`)