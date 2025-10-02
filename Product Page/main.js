//LIGHTBOX

const thumbs = document.querySelectorAll(".grid-layout .thumb img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// Añadimos evento a cada miniatura
thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = thumb.src;
  });
});

// Cerrar lightbox al clicar en la X
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Cerrar al clicar fuera de la imagen
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

//ACORDEÓN

const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = document.getElementById(btn.getAttribute("aria-controls"));
    const expanded = btn.getAttribute("aria-expanded") === "true";

    if (expanded) {
      btn.setAttribute("aria-expanded", "false");
      panel.classList.remove("open");
    } else {
      btn.setAttribute("aria-expanded", "true");
      panel.classList.add("open");
    }
  });
});

//AÑADIR A FAVORITOS

const favorite = document.getElementById("favorite");
const mensaje = document.querySelector(".mensaje");

favorite.addEventListener("click", () => {
  favorite.classList.toggle("fa-regular"); // quita/añade el contorno
  favorite.classList.toggle("fa-solid"); // quita/añade relleno
  mensaje.style.display = favorite.classList.contains("fa-solid")
    ? "block"
    : "none";
});

//SELECCIONAR COLOR
const imagenes = document.querySelectorAll(".colores > img");
let colorSeleccionado = null;

imagenes.forEach((img) => {
  img.addEventListener("click", () => {
    imagenes.forEach((i) => i.classList.remove("selected"));
    img.classList.add("selected");

    colorSeleccionado = img.alt; // Guardar el color seleccionado
  });
});

//SELECCIONAR TALLA
const tallas = document.querySelectorAll(".talla");
let tallaSeleccionada = null;

tallas.forEach((talla) => {
  talla.addEventListener("click", () => {
    tallas.forEach((t) => t.classList.remove("selected"));
    talla.classList.add("selected");

    tallaSeleccionada = talla.textContent.trim(); // Guardar la talla seleccionada
  });
});

//AÑADIR AL CARRITO

const addToCart = document.getElementById("addCart");
const quantity = document.getElementById("quantity");

let contador = 0;

addToCart.addEventListener("click", () => {
  if (tallaSeleccionada && colorSeleccionado) {
    contador++;
    quantity.textContent = contador;
    quantity.style.display = "inline-block";
  } else {
    alert(
      "Por favor selecciona una talla y un color antes de añadir al carrito"
    );
  }
});

//TALLAS

const btnGuia = document.querySelector(".guia-tallas");

btnGuia.addEventListener("click", () => {
  lightbox.style.display = "flex"; // Reutiliza el mismo lightbox
  lightboxImg.src = "/guiaropamujer.jpg"; // Ruta de tu imagen de guía de tallas
});
