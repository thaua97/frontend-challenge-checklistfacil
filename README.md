# Frontend Challenge A

Este projeto é um simples ToDo List, com um bug incluso. O objetivo é encontrar e corrigir o bug, para
que o projeto funcione em modo desenvolvimento.

## Instalação e execução

- Considere utilizar NodeJs na versão 14.19.3
- Clone o respositório e execute `yarn`
- Então execute `yarn start`

Este último comando iniciará a API e então o app. A API é provida em `http://localhost:3333/api` e o app
em `http://localhost:4200`  
Sempre que projeto for reiniciado, o banco de dados é reiniciado também

## Funcionalidades

É possível executar as seguintes ações:

* iniciar a tarefa (faz ela ir para "Em Andamento")
* concluir uma tarefa (faz ela ir de "Em Andamento" para "Concluídos")
* voltar uma tarefa de "Em Andamento" para "Pendentes"
* voltar uma tarefa de "Concluídos" para "Em Andamento"
* excluir uma tarefa em qualquer status
* criar novas tarefas

## Bugs

Intencionalmente, um bug foi introduzido. E ele impede que novas tarefas sejam criadas, ou que as tarefas sejam
excluídas.

## Objetivo 1

Identificar a causa do bug e propor a solução, indicando o trecho de código responsável pelo erro e o que deve ser
corrigido.

## Objetivo 2

* Implementar uma confirmação de exclusão da task
* Implementar feedback de "processando"
* Implementar feedback de erro (quando a API responder com um erro 500, por exemplo)

## Objetivo 3

Considerando a proposta de estruturação do [NX](https://nx.dev/), crie uma biblioteca de UI e extraia para um componente o formulário de nova task. Faça com que o app `todo-list` utilize o novo componente de formulário.  
  
Material de apoio sobre o NX:

1️⃣ [Applications and libraries](https://nx.dev/more-concepts/applications-and-libraries)  
2️⃣ [Library Types](https://nx.dev/more-concepts/library-types)  
3️⃣ [Grouping Libraries](https://nx.dev/more-concepts/grouping-libraries)  
4️⃣ [Using Nx at Enterprises](https://nx.dev/more-concepts/monorepo-nx-enterprise)  

## Extras

Estes são objetivos não obrigatórios, mas que são um diferencial para a vaga.

* Implemente um teste unitário (utilize o Jest)
* Implemente um teste e2e

## Entrega e regras

**Não reimplemente o projeto para solucionar o problema.** O objetivo principal é avaliar a capacidade de diagnóstico e
entendimento das tecnologias envolvidas.
  
Para isso, crie um novo respostório, público, na sua conta, e nos envie por email o link. **Não faça um fork**. Este repositório é um template e você pode facilmente criar um novo repositório a parttir dele:

![image](https://user-images.githubusercontent.com/3875540/218765836-b4515000-ed55-4b39-8470-41bdcf6ecb93.png)

  
