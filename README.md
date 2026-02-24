# Portal de Utilidades

O Portal de Utilidades é uma aplicação desenvolvida em React com TypeScript que reúne, em um único projeto, três módulos independentes.  
Cada módulo foi criado com o objetivo de praticar conceitos vistos em aula, como componentização, navegação entre páginas, organização de pastas e validação de dados.

O projeto funciona como um hub, onde cada funcionalidade é acessada por meio de um menu principal.

---

## Objetivo do projeto

O objetivo deste projeto é aplicar, na prática, os conteúdos estudados em sala de aula, utilizando:

- React com TypeScript para tipagem e melhor organização do código
- Componentização para reaproveitamento de código e separação de responsabilidades
- Navegação entre páginas utilizando React Router DOM
- Validação de dados utilizando schemas separados para cada módulo
- Estruturação correta de um projeto front-end

---

## Funcionalidades do Portal

### TaskMaster
Módulo voltado para o gerenciamento de tarefas.

Neste módulo foi praticado:
- Criação de formulários utilizando React Hook Form
- Validação de dados com schema específico do módulo
- Controle e listagem dinâmica de tarefas
- Persistência de dados utilizando localStorage
- Organização do código em componentes reutilizáveis

---

### ConnectHub
Módulo criado para simular um gerenciamento de contatos.

Neste módulo foi praticado:
- Estruturação de páginas utilizando rotas
- Criação de formulários com validação de dados
- Uso de schema próprio para validar e-mail e telefone
- Separação entre regras de negócio e interface
- Organização do código por responsabilidade

---

### MoneyFlow
Módulo de controle financeiro.

Neste módulo foi praticado:
- Validação de valores utilizando schema (Zod)
- Regras para impedir valores inválidos, zero ou negativos
- Cálculo automático do saldo total
- Persistência de dados mesmo após atualizar a página
- Atualização do saldo ao adicionar ou remover lançamentos

---

## Estrutura do projeto

A estrutura do projeto foi organizada de forma a separar responsabilidades e facilitar a manutenção do código:

```txt
src/
 ├─ components/
 │   └─ Menu.tsx
 │      → Componente responsável pela navegação entre os módulos
 │
 ├─ pages/
 │   ├─ Home.tsx
 │   │   → Página inicial com acesso aos módulos por meio de cards
 │   ├─ TaskMaster.tsx
 │   │   → Página do módulo de gerenciamento de tarefas
 │   ├─ ConnectHub.tsx
 │   │   → Página do módulo de gerenciamento de contatos
 │   └─ MoneyFlow.tsx
 │       → Página do módulo de controle financeiro
 │
 ├─ schemas/
 │   ├─ taskSchema.ts
 │   │   → Regras de validação do formulário de tarefas
 │   ├─ contactSchema.ts
 │   │   → Regras de validação do formulário de contatos
 │   └─ moneySchema.ts
 │       → Regras de validação do formulário financeiro
 │
 ├─ App.tsx
 │   → Arquivo responsável pela configuração das rotas da aplicação
 └─ main.tsx
     → Ponto de entrada da aplicação React




## Planejamento do Projeto (Metodologias Ágeis)

Este projeto foi organizado simulando uma Sprint real de desenvolvimento, aplicando conceitos de metodologias ágeis como definição de User Stories, Critérios de Aceitação e Milestones.

---

## Visão do Produto

O Portal de Utilidades é uma aplicação web desenvolvida para centralizar ferramentas essenciais do dia a dia em um único sistema.  

O objetivo é oferecer ao utilizador uma experiência simples, organizada e eficiente, permitindo:

- Gerenciar tarefas
- Cadastrar contatos
- Controlar entradas e saídas financeiras

O projeto entrega valor ao utilizador ao reunir múltiplas funcionalidades em uma única aplicação, com navegação fluida e persistência de dados.

---

## User Stories – Módulo TaskMaster

As estórias de usuário foram registradas também na aba **Issues** do GitHub, simulando um ambiente real de gestão ágil.

### US01 – Cadastro de nova tarefa  
Como usuário, eu quero adicionar uma nova tarefa informando um título e uma categoria, para organizar melhor minhas atividades.

### US02 – Visualização da lista  
Como usuário, eu quero visualizar a lista de tarefas cadastradas, para acompanhar o que preciso fazer.

### US03 – Remoção de tarefa  
Como usuário, eu quero remover uma tarefa da lista, para manter apenas tarefas relevantes.

### US04 – Validação do título  
Como usuário, eu quero que o sistema valide o título da tarefa, para evitar cadastros incorretos.

### US05 – Persistência de dados  
Como usuário, eu quero que minhas tarefas continuem salvas mesmo após atualizar a página, para não perder informações.

---

## Critérios de Aceitação

### US01 – Cadastro de nova tarefa
- O formulário deve exigir o preenchimento do título
- O título deve ter no mínimo 5 caracteres
- A categoria deve ser selecionada antes do envio
- A tarefa deve ser adicionada à lista após o envio
- Os dados devem ser salvos no localStorage

### US02 – Visualização da lista
- A lista deve exibir todas as tarefas cadastradas
- Cada tarefa deve mostrar título e categoria
- A lista deve atualizar automaticamente ao adicionar novas tarefas
- Os dados devem ser carregados automaticamente do localStorage ao iniciar a aplicação

### US03 – Remoção de tarefa
- Cada tarefa deve possuir um botão de remover
- Ao remover, a tarefa deve desaparecer imediatamente da lista
- O estado da aplicação deve ser atualizado corretamente
- O localStorage deve ser atualizado após a remoção

### US04 – Validação do título
- O título deve ter no mínimo 5 caracteres
- Mensagens de erro devem ser exibidas quando inválido
- O formulário não deve ser enviado com dados inválidos
- A validação deve ser realizada utilizando Zod

### US05 – Persistência de dados
- As tarefas devem ser salvas no localStorage
- Ao atualizar a página (F5), os dados devem permanecer
- A lista deve carregar automaticamente os dados salvos

---

## Milestones do Projeto

### M1 – Estrutura de Rotas e Home
Configuração inicial do projeto, criação das rotas, navbar persistente e página inicial (Home) com navegação para os módulos.

### M2 – Implementação dos Módulos
Desenvolvimento completo dos módulos TaskMaster, ConnectHub e MoneyFlow, incluindo validações com Zod, uso do React Hook Form e persistência de dados no localStorage.

---

## Organização Ágil no GitHub

As User Stories foram criadas como **Issues** e organizadas em **Milestones**, simulando a gestão de tarefas dentro de uma Sprint real utilizando as ferramentas nativas do GitHub.

---

## Autoria

Projeto desenvolvido por Mhell Barroca Novaes, com fins educacionais e de portfólio.