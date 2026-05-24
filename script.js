const checks = document.querySelectorAll(".check");
const botonReiniciar = document.getElementById("reiniciar");

checks.forEach((check) => {
  check.addEventListener("click", () => {
    check.parentElement.classList.toggle("comprado");
  });
});

botonReiniciar.addEventListener("click", () => {
  document.querySelectorAll(".grupo li").forEach((item) => {
    item.classList.remove("comprado");
  });
});