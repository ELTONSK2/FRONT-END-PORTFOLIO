// Validação do formulário
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contato-form");
  const status = document.getElementById("mensagem-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
      status.textContent = "Por favor, preencha todos os campos!";
      status.style.color = "red";
    } else {
      status.textContent = "Mensagem enviada com sucesso!";
      status.style.color = "green";
      form.reset();
    }
  });
});
// Mostrar botão quando rolar
window.onscroll = function () {
  const btn = document.getElementById("btnTopo");
  if (document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Voltar ao topo
function voltarTopo() {
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
}
