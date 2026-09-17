// const elementos = document.querySelectorAll(".texto")

// Percorrendo a lista e imprimindo cada um dos elementos
// elementos.forEach(elemento => console.log(elemento));

// percorrendo a lista e pgando o texto do elemento (innerText)
// elementos.forEach(elemento => console.log(elemento.innerText));

// alterando textos
// elementos.forEach(elemento => {
//     elemento.innerText = "Alterado";

//     // elemento.textContent = "Alterado"; vem com a formatação do elemento
// });

// trocando as tags - innerhtml
// elementos.forEach(elemento => {
//     elemento.innerHTML = "<h2>item</h2>"
// });

// trocar a cor do elemento
// elementos.forEach(elemento => {
//     elemento.style.color = "#0000FF";
// });

// EVENTOS COM JS
// Eventos são ações do usuário

// evento click
// const botao = document.getElementById("btn");

// botao.addEventListener("click", () => {
//     alert("Você clicou");
// });

// Evento de digitação (input / keyup)

// const campo = document.getElementById("campo");
// const resultado = document.getElementById("resultado");

// INPUT
// Evento innput -> dispara sempre que diita, em tempo real

// campo.addEventListener("input", () => {
//     // value -> é o que esta sendo digitado
//     resultado.innerText = campo.value;
// })

// KEYUP
// campo.addEventListener("keyup", () => {
//     resultado.innerText = campo.value;
// })

// Evento de mouse
// const elemento = document.getElementById("troca-cor");

// mouseover -> quando passar o mouse pelo elemento
// elemento.addEventListener("mouseover", () => {
//     elemento.style.backgroundColor = "#FF0000";
// });

// mouseout -> quando o mouse sai do elemento
// elemento.addEventListener("mouseout", () => {
//     elemento.style.backgroundColor = "#0000FF";
// });

// mousemove
// pega a posição do mouse

// document.addEventListener("mousemove", (evento) => {
//     console.log(`Posição x: ${evento.clientX}, Posição Y: ${evento.clientY}`);
// })

// EVENTO DE FORMULÁRIO (submit)

const form = document.querySelector("form"); //pegando direto pela tag form

// o comportamento padrão do formulário é recarregar a página ao enviar o submit
form.addEventListener("submit", (e) => {

    e.preventDefault();

    const nome = document.getElementById("nome").value;

    console.log(`Nome: ${nome}`);
})