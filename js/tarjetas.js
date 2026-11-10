// Crea las tarjetas 3D de los productos.

import { WHATSAPP } from "./config.js";

function crearTarjeta(producto) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta";
  tarjeta.innerHTML =
    '<div class="cuerpo" style="--c1:' + producto.colores[0] + ";--c2:" + producto.colores[1] + '">' +
      '<div class="ondas" aria-hidden="true">' +
        '<span class="onda onda1"></span><span class="onda onda2"></span><span class="onda onda3"></span>' +
        '<span class="onda onda4">' + producto.icono + "</span>" +
      "</div>" +
      '<div class="vidrio"></div>' +
      '<div class="contenido"><h3>' + producto.nombre + "</h3><p>" + producto.detalle + "</p></div>" +
      '<div class="base"><span class="precio">' + producto.precio + "</span>" +
        '<a class="pedir" target="_blank" rel="noopener" href="' + WHATSAPP + '"' +
        ' aria-label="Pedir ' + producto.nombre + ' por WhatsApp">Pedir</a>' +
      "</div>" +
    "</div>";
  return tarjeta;
}

export function mostrarProductos(contenedor, productos) {
  productos.forEach((producto) => contenedor.appendChild(crearTarjeta(producto)));
}
