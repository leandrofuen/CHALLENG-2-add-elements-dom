 // Aquí tu código


/* Este ejercicio consiste en crear una página web donde los usuarios puedan agregar elementos a una lista utilizando un cuadro de diálogo `prompt`. Luego, los elementos ingresados se mostrarán en una lista en la página.

Al pulsar el botón 'agregar elemento' aparecerá el cuadro de dialogo (`prompt`) y ahí se introducirá el elemento que después aparecerá en la lista.

La estructura ya está creada en el HTML, así solo tendrás que trabajar con JavaScript.

**PISTA: Aquí hay unos métodos, eventos, propiedades que pueden ser útiles**

- `addEventListener`
- `getElementById`
- `createElement`
- `appendChild`

Si tienes otra solución que no lleve esos elementos, ¡adelante!

Puedes añadir CSS a tu gusto. Si es así, añade un documento CSS y a trabajar ;)
 */


/*
var BOTagregar = document.getElementById("agregar");

var lista = document.getElementById("lista");


BOTagregar.addEventListener("click", function() {

 var elemento = prompt("Introduce tu elemento:");
   const li = document.createElement("li");
    li.textContent = elemento;


    lista.appendChild(li);

    lista.innerHTML += lista. 
     }
)
;*/

// NO FUNCIONAAAAAA
// CORRECCION SEGUN LA IA... QUE NO ENTIENDO POR QUE NO FUNCIONA EL MIO

var BOTagregar = document.getElementById("agregar");
var lista = document.getElementById("lista");

BOTagregar.addEventListener("click", function() {
  // Pedimos el texto
  var elemento = prompt("Introduce tu elemento:");

  // Creamos el <li>
  const li = document.createElement("li");
  li.textContent = elemento;

  // Lo agregamos a la lista
  lista.appendChild(li);
});

