const checks = document.querySelectorAll(".check");
const botonReiniciar = document.getElementById("reiniciar");
const cantidades = document.querySelectorAll(".cantidad");

checks.forEach((check) => {
  check.addEventListener("click", () => {
    check.parentElement.classList.toggle("comprado");
  });
});

botonReiniciar.addEventListener("click", () => {
  document.querySelectorAll(".grupo li").forEach((item) => {
    item.classList.remove("comprado");
  });

  cantidades.forEach((cantidad) => {
    cantidad.value = "";
  });
});