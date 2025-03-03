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
  
});

const botonVolverArriba = document.getElementsByClassName("volver-arriba")[0];
  botonVolverArriba.addEventListener("click", function () {
    console.log("click");
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Desplazamiento suave
    });
  });
