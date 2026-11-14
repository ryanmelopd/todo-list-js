import { render } from "./dom.js"

export function iniciarEventos(elementos) {
    let listaTarefas = []

    function atualizar() {
        render(elementos.lista, listaTarefas, removerTarefa)
    }

    function enviarTarefa() {
        const texto = elementos.input.value
        if (texto.trim() === "") {
            return
        }
        listaTarefas.push({ id: Date.now(), texto: texto })
        elementos.input.value = ""
        atualizar()
    }

    function removerTarefa(id) {
        listaTarefas = listaTarefas.filter(function(tarefa) {
            return tarefa.id !== id
        })
        atualizar()
    }

    function removerTodas() {
        listaTarefas = []
        atualizar()
    }

    function verificarEnter(event) {
        if (event.key === "Enter") {
            enviarTarefa()
        }
    }

    elementos.botaoAdicionar.addEventListener("click", enviarTarefa)
    elementos.input.addEventListener("keydown", verificarEnter)
    elementos.botaoLimpar.addEventListener("click", removerTodas)
}