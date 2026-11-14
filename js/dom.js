export function render(lista, tarefas, aoRemover) {
    lista.replaceChildren()

    tarefas.forEach(function(tarefa) {
        const li = document.createElement("li")
        li.textContent = tarefa.texto

        const botaoRemover = document.createElement("button")
        botaoRemover.textContent = "Remover"
        botaoRemover.addEventListener("click", function() {
            aoRemover(tarefa.id)
        })

        li.appendChild(botaoRemover)
        lista.appendChild(li)
    })
}