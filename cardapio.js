// Suavizar rolagem ao clicar em links com #
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Criar botão voltar ao topo
const voltarTopo = document.createElement("button");
voltarTopo.innerHTML = "↑ Topo";
voltarTopo.className = "btn-topo";
document.body.appendChild(voltarTopo);

// Mostrar ou esconder botão conforme rolagem
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    voltarTopo.classList.add("visivel");
  } else {
    voltarTopo.classList.remove("visivel");
  }
});

// Clique no botão volta ao topo
voltarTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
