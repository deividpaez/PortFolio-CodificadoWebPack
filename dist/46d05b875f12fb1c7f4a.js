function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import style from "./style.css";
import hero from "./assets/0__k7tukRsPMECDxY.jpg";
import CV from "./assets/FotoCV.jpg";
import Html from "./assets/Icons/html5.svg";
import Css from "./assets/Icons/css.svg";
import BootStrap from "./assets/Icons/bootstrap.svg";
import JS from "./assets/Icons/javascript.svg";
import React from "./assets/Icons/react.svg";
import Node from "./assets/Icons/node.svg";
import Jquery from "./assets/Icons/jquery.svg";
import MySql from "./assets/Icons/mysql.svg";
import WebPack from "./assets/Icons/webpack.svg";
import GitHub from "./assets/Icons/github.svg";
import FavIcon from "./assets/icons8-mek-quake.svg";
import Projects_1 from "./assets/Proyecto-1.jpg"; // *******************MENU******************

var d = document,
    $hamburguesa = d.querySelector(".menu-btn"),
    $openHamburguesa = d.querySelector(".open"),
    $closeHamburguesa = d.querySelector(".close"),
    $menuNav = d.querySelector(".menu");

(function () {
  d.addEventListener("click", function (e) {
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
})(d); // **************ModalWindow*****************


var openEls = document.querySelectorAll("[data-open]");
var closeEls = document.querySelectorAll("[data-close]");
var isVisible = "is-visible";

var _iterator = _createForOfIteratorHelper(openEls),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var el = _step.value;
    el.addEventListener("click", function () {
      var modalId = this.dataset.open;
      document.getElementById(modalId).classList.add(isVisible);
    });
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var _iterator2 = _createForOfIteratorHelper(closeEls),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var _el = _step2.value;

    _el.addEventListener("click", function () {
      this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
  } // ContactForm

} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

(function (d) {
  var $mail = d.getElementById("contact-form-email"),
      $name = d.getElementById("contact-form-name"),
      $submit = d.getElementById("Submit");
  $mail.addEventListener("keyup", function (e) {
    $submit.classList.add("not-allowed");
    $mail.value = $mail.value.toString();
    var expreMail = new RegExp(/[\w]+@{1}[\w]+\.[a-z]{2,3}/);

    if (!expreMail.test($mail.value)) {
      $mail.classList.add("invalid");
      $submit.classList.add("not-allowed");
      $mail.classList.remove("valid");
    } else {
      $mail.classList.remove("invalid");
      $mail.classList.add("valid");
    }
  });
  $name.addEventListener("keyup", function (e) {
    $submit.classList.add("not-allowed");
    $name.value = $name.value.toString();
    var expreName = new RegExp(/[A-Z][a-zA-Z]/);

    if (!expreName.test($name.value)) {
      $name.classList.add("invalid");
      $submit.classList.add("not-allowed");
      $name.classList.remove("valid");
    } else {
      $name.classList.remove("invalid");
      $name.classList.add("valid");
    }
  });
  var $textarea = d.getElementById("textarea");
  var contador = document.getElementById("contador");
  $textarea.addEventListener("keyup", function (e) {
    $submit.classList.add("not-allowed");
    var target = e.target;
    var longitudMax = target.getAttribute("maxlength");
    var longitudAct = target.value.length;
    contador.innerHTML = "".concat(longitudAct, "/").concat(longitudMax);

    if (longitudAct >= 20) {
      $submit.classList.remove("not-allowed");
    } else {
      $submit.classList.add("not-allowed");
    }

    var expretext = new RegExp(/[A-Z][a-zA-Z]/);

    if (expretext.test($textarea.value)) {
      $textarea.classList.add("invalid");
      $submit.classList.add("not-allowed");
      $textarea.classList.remove("valid");
    } else {
      $textarea.classList.remove("invalid");
      $textarea.classList.add("valid");
    }

    if (touchDevice = "ontouchstart" in document.documentElement) {
      $submit.classList.remove("not-allowed");
    }
  });
  var $form = d.querySelector(".contact-form"),
      $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response"),
      $modal3 = d.querySelector("#modal3"),
      $CV = d.querySelector("#CVdowload");
  $CV.addEventListener("click", function (e) {
    e.preventDefault();
    alert("hola");
  });
  $form.addEventListener("submit", function (e) {
    $loader.classList.remove("none");
    e.preventDefault();
    fetch("https://formsubmit.co/ajax/deivid11pdp1@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: $name.value,
        email: "De parte de ".concat($mail.value, " "),
        message: $textarea.value
      })
    }).then(function (res) {
      return res.ok ? res.json() : Promise.reject(res);
    }).then(function (data) {
      $form.reset();
    })["catch"](function (err) {
      console.log(err);
      var message = err.statusText || "Ocurrio un error, intenta de nuevo ";
      $response.querySelector("h3").innerHTML = "Error ".concat(err.statusText, ": ").concat(message);
    })["finally"](function () {
      $loader.classList.add("none");
      setInterval(function (e) {
        $modal3.classList.remove("is-visible");
      }, 2000);
    });
  });
})(document); //  Insert Images


d.querySelector(".article-2").innerHTML = "<img src=\"".concat(CV, "\" alt=\"Hoja de Vida DeividPaez\">");
d.getElementById("HeroImage").style.setProperty("--image", "url(".concat(hero, ")"));
var $tecnology = d.getElementById("Tecnology"),
    // HTML5
html = d.createElement("img");
html.src = "".concat(Html);
html.title = "HTML5";
$tecnology.appendChild(html); // CSS

var css = d.createElement("img");
css.src = "".concat(Css);
css.title = "Css";
$tecnology.appendChild(css); //Boostrap

var bootstrap = d.createElement("img");
bootstrap.src = "".concat(BootStrap);
bootstrap.title = "BootStrap";
$tecnology.appendChild(bootstrap); //JavaScript

var javascript = d.createElement("img");
javascript.src = "".concat(JS);
javascript.title = "JavaScript";
$tecnology.appendChild(javascript); //React

var react = d.createElement("img");
react.src = "".concat(React);
react.title = "React";
$tecnology.appendChild(react); //Node JS

var node = d.createElement("img");
node.src = "".concat(Node);
node.title = "Node Js";
$tecnology.appendChild(node); //JQuery

var jquery = d.createElement("img");
jquery.src = "".concat(Jquery);
jquery.title = "Jquery";
$tecnology.appendChild(jquery); //MySQL

var mysqll = d.createElement("img");
mysqll.src = "".concat(MySql);
mysqll.title = "MySQL";
$tecnology.appendChild(mysqll); //WebPack

var webpack = d.createElement("img");
webpack.src = "".concat(WebPack);
webpack.title = "Webpack";
$tecnology.appendChild(webpack); //GitHub

var githubb = d.createElement("img");
githubb.src = "".concat(GitHub);
githubb.title = "Github";
$tecnology.appendChild(githubb); //  **************FAVICON********************

d.getElementsByTagName("link")[0].href = "".concat(FavIcon); // ***************Projects*********************

var imgWork1 = d.createElement("img");
imgWork1.src = "".concat(Projects_1);
var $work_1 = d.getElementById("work-1");
$work_1.appendChild(imgWork1);