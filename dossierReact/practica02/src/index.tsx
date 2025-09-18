/**
* @author Noelia Hernández Domínguez.
*/

/* Práctica 02: Realizar lo descrito y tomar captura de pantalla del mensaje en el navegador
(recordar que por defecto la web está en el puerto 3000). */

import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';

const mensaje = <h1> Vamos a renderizar este mensaje en nuestra web. </h1>;

const divRoot = document.getElementById("root");

ReactDOM.createRoot(divRoot).render(mensaje);