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
    if(touchDevice = ('ontouchstart' in document.documentElement)){
      $submit.classList.remove("not-allowed");
    }
  });


  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response"),
    $modal3 = d.querySelector("#modal3"),
    $CV = D.querySelector("#CVdowload");
$CV.addEventListener("click", (e) =>{
  e.preventDefault();
  alert("hola")
})


  $form.addEventListener("submit", (e) => {
    $loader.classList.remove("none");
    e.preventDefault();

    fetch("https://formsubmit.co/ajax/deivid11pdp1@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: $name.value,
        email: `De parte de ${$mail.value} `,
        message: $textarea.value
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
