// Punto de entrada: conecta los datos con la página.

import { WHATSAPP, PRODUCTOS } from "./config.js";
import { mostrarProductos } from "./tarjetas.js";

document.getElementById("wa-principal").href = WHATSAPP;
mostrarProductos(document.getElementById("tarjetas"), PRODUCTOS);
