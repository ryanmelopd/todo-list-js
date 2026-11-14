# Todo List

Lista de tarefas feita com HTML, CSS e JavaScript. O projeto foi criado para praticar eventos, manipulação do DOM e organização de código em módulos.

🔗 Demonstração: https://ryanmelopd.github.io/todolist-js/

## Funcionalidades

- Adicionar tarefas pelo botão ou pela tecla Enter
- Remover uma tarefa individualmente
- Remover todas as tarefas de uma vez
- Marcar uma tarefa como concluída (clique no texto) e desmarcar
- Persistência dos dados: as tarefas continuam na lista ao recarregar a página
- Validação: tarefas vazias ou só com espaços não são adicionadas
- Layout responsivo

## Tecnologias

- HTML5
- CSS3 
- JavaScript 

## Estrutura do projeto

```
todolist-js/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── main.js      # ponto de entrada: seleciona os elementos e inicia o app               
    ├── events.js    # estado (array de tarefas), eventos e localStorage
    └── dom.js       # renderização: desenha a lista na página
```

## Como funciona

O array de tarefas é a fonte da verdade, e a tela é apenas um desenho dele. Toda ação do usuário segue o mesmo ciclo:

1. altera o array (adicionar, remover, esvaziar ou alternar a conclusão);
2. salva o array no `localStorage`;
3. chama `render()`, que limpa a lista e a desenha de novo a partir do array.

Cada tarefa é um objeto:

```javascript
{ id: 1731600000000, texto: "Estudar JavaScript", concluida: false }
```

O `id` (gerado com `Date.now()`) identifica a tarefa na hora de removê-la ou marcá-la, já que duas tarefas podem ter o mesmo texto.

## O que pratiquei neste projeto

- Eventos com `addEventListener` (`click` e `keydown`) e o objeto `event`
- Criação e remoção de elementos com `createElement`, `appendChild` e `replaceChildren`
- Callbacks para separar a lógica da interface
- Métodos de array: `forEach`, `filter`, `find` e `push`
- Separação de responsabilidades em módulos (`import` e `export`)
- Persistência com `localStorage`, `JSON.stringify` e `JSON.parse`
- Estilização com classes CSS aplicadas pelo JavaScript