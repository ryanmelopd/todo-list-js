export function render(lista, tarefas, aoRemover, aoAlternar) {
    lista.replaceChildren()

    tarefas.forEach(function(tarefa) {
        const li = document.createElement("li")

        const texto = document.createElement("span")
        texto.textContent = tarefa.texto
        texto.addEventListener("click", function() {
            aoAlternar(tarefa.id)
        })

        if (tarefa.concluida) {
            li.classList.add("concluida")
        }

        const botaoRemover = document.createElement("button")
        botaoRemover.textContent = "Remover"
        botaoRemover.addEventListener("click", function() {
            aoRemover(tarefa.id)
        })

        li.appendChild(texto)
        li.appendChild(botaoRemover)
        lista.appendChild(li)
    })
}