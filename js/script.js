
console.log("ATSOC site carregado com sucesso.");

document.addEventListener('DOMContentLoaded', () => {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current) a.classList.add('active');
  });
});

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome")?.value.trim() || "";
    const empresa = document.getElementById("empresa")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const telefone = document.getElementById("telefone")?.value.trim() || "";
    const interesse = document.getElementById("interesse")?.value || "";
    const mensagem = document.getElementById("mensagem")?.value.trim() || "";

    const texto = `Olá! Quero entender melhor como a ATSOC pode ajudar nosso provedor.

Nome: ${nome}
Empresa: ${empresa}
E-mail: ${email}
Telefone: ${telefone}
Interesse principal: ${interesse}
Cenário atual: ${mensagem}`;

    const numeroWhatsApp = "5511916060157";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  });
}