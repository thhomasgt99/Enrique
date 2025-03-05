document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los cuadros
  const cuadros = document.querySelectorAll(".cuadro");

  // Agrega un evento de clic a cada cuadro
  cuadros.forEach((cuadro) => {
    cuadro.addEventListener("click", function () {
      // Obtiene el valor del atributo data-pagina
      const pagina = cuadro.getAttribute("data-pagina");

      // Redirige al usuario a la página correspondiente
      if (pagina) {
        window.location.href = `${pagina}.html`;
      }
    });
  });

  // Botón "Volver arriba"
  const botonVolverArriba = document.getElementById("volver-arriba");
  botonVolverArriba.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Desplazamiento suave
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let main = document.querySelector("main"); // Seleccionamos el <main>
  if (!main) return; // Verificamos que <main> exista

  let asides = document.querySelectorAll("aside"); // Seleccionamos todos los <aside>

  if (asides.length < 6) return; // Verificamos que haya al menos 6 asides

  // Crear el primer div contenedor para las primeras 3 etiquetas aside
  let contenedorInicio = document.createElement("div");
  contenedorInicio.classList.add("contenedor-aside");

  // Crear el segundo div contenedor para las últimas 3 etiquetas aside
  let contenedorFinal = document.createElement("div");
  contenedorFinal.classList.add("contenedor-aside");

  // Mover las primeras 3 aside al contenedorInicio
  asides.forEach((aside, index) => {
    if (index < 3) {
      contenedorInicio.appendChild(aside);
    } else {
      contenedorFinal.appendChild(aside);
    }
  });

  // Insertar el contenedorInicio al principio del main
  main.insertBefore(contenedorInicio, main.firstChild);

  // Insertar el contenedorFinal al final del main
  main.appendChild(contenedorFinal);
});

document.addEventListener("DOMContentLoaded", () => {
  const contenedores = document.querySelectorAll(".contenedor-aside");
  const ruta = window.location.pathname;

  function aplicarEstilos() {
    const url = window.location.href
    const partes = url.split("/");
    const ultimoTramo = partes.pop();
    console.log(ultimoTramo)
    if (ruta === "/" || ruta.endsWith("index.html") || ultimoTramo == 'Enrique' ) {
      contenedores.forEach((contenedor) => {
        if (window.innerWidth >= 769 & window.innerWidth <= 1240) {
          contenedor.style.marginTop = "51%";
        } else {
          contenedor.style.marginTop = "19%";
        }
      });
    } else if(ruta.endsWith("quienes-somos.html")) {
      contenedores.forEach((contenedor) => {
        if (window.innerWidth >= 769 & window.innerWidth <= 1240) {
          contenedor.style.marginTop = "66%";
        } else {
          contenedor.style.marginTop = "26.4%";
        }
      });
    }else {
      contenedores.forEach((contenedor) => {
        if (window.innerWidth >= 769 & window.innerWidth <= 1240) {
          contenedor.style.marginTop = "34%";
        } else {
          contenedor.style.marginTop = "17%";
        }
      });
    }
  }

  aplicarEstilos(); // Aplicar estilos al cargar la página
  window.addEventListener("resize", aplicarEstilos); // Reaplicar cuando se redimensione la pantalla
});




