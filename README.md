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

### User Stories – Módulo TaskMaster

**User Story 1**  
Como usuário, eu quero adicionar uma nova tarefa informando um título e uma categoria, para organizar melhor minhas atividades.

**User Story 2**  
Como usuário, eu quero visualizar a lista de tarefas cadastradas, para acompanhar o que preciso fazer.

**User Story 3**  
Como usuário, eu quero remover uma tarefa da lista, para manter apenas tarefas relevantes.

**User Story 4**  
Como usuário, eu quero que o sistema valide o título da tarefa, para evitar cadastros incorretos.

**User Story 5**  
Como usuário, eu quero que minhas tarefas continuem salvas mesmo após atualizar a página, para não perder informações.

---

### Critérios de Aceitação

#### User Story 1 – Cadastro de tarefas
- O formulário deve exigir o preenchimento do título
- A categoria deve ser selecionada antes do envio
- A tarefa deve ser adicionada à lista após o envio

#### User Story 2 – Visualização da lista
- A lista deve exibir todas as tarefas cadastradas
- Cada tarefa deve mostrar título e categoria
- A lista deve atualizar automaticamente ao adicionar tarefas

#### User Story 3 – Remoção de tarefas
- Cada tarefa deve possuir um botão de remover
- Ao remover, a tarefa deve desaparecer da lista
- O estado da aplicação deve ser atualizado corretamente

#### User Story 4 – Validação de dados
- O título deve ter no mínimo 5 caracteres
- Mensagens de erro devem ser exibidas quando inválido
- O formulário não deve ser enviado com dados inválidos

#### User Story 5 – Persistência de dados
- As tarefas devem ser salvas no localStorage
- Ao atualizar a página (F5), os dados devem permanecer
- A lista deve carregar automaticamente os dados salvos

---

### Milestones do Projeto

**M1 – Estrutura inicial do projeto**  
Configuração do projeto, criação das rotas, menu de navegação e página inicial.

**M2 – Implementação dos módulos**  
Desenvolvimento dos módulos TaskMaster, ConnectHub e MoneyFlow, incluindo validações e persistência de dados.

---

## Autoria

Projeto desenvolvido por Mhell Barroca Novaes, com fins educacionais e de portfólio.