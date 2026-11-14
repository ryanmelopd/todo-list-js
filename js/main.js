import { iniciarEventos } from "./events.js"

const elementos = {
    lista: document.querySelector("#task-list"),
    botaoAdicionar: document.querySelector("#button"),
    botaoLimpar: document.querySelector("#clear-button"),
    input: document.querySelector("#input-text")
}

iniciarEventos(elementos)