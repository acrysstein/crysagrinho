const botao = document.getElementById("btnMensagem");

botao.addEventListener("click", () => {

  alert(`
Bem-vindo ao EcoPecuária 🌱

Este projeto apresenta soluções sustentáveis para reduzir o desmatamento na pecuária do Paraná utilizando:
✔ Tecnologia
✔ Educação Ambiental
✔ Manejo Sustentável
✔ Inovação Rural
  `);

});

/* ANIMAÇÃO AO ROLAR */

const cards = document.querySelectorAll(".info-card, .card");

window.addEventListener("scroll"), () => {

  cards.forEach((card) => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100){
      card.classList.add("show");
    }

  });
}
