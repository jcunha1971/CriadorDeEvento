
# Sistema de Gerenciamento de Eventos

Este projeto é um sistema completo de gerenciamento de eventos, desenvolvido utilizando Node.js, Express, e React. Ele permite autenticação e autorização de usuários, CRUD de eventos, gerenciamento de participantes, e uma interface de administração.

## Funcionalidades

- **Autenticação e Autorização de Usuários:**
    - Registro e login de usuários utilizando JSON Web Tokens (JWT).
    - Middleware para proteger rotas que requerem autenticação.
    - Diferenciação de permissões entre usuários comuns e administradores.

- **CRUD de Eventos:**
    - Criar, ler, atualizar e excluir eventos.
    - Cada evento contém título, descrição, data, local e organizador.
    - Validação de dados de entrada.

- **Gerenciamento de Participantes:**
    - Usuários podem se registrar como participantes de eventos.
    - Administradores podem visualizar e gerenciar a lista de participantes.

- **Integração com MongoDB:**
    - Banco de dados MongoDB para armazenar informações de usuários, eventos e participantes.
    - Utilização do Mongoose para modelagem de dados.

- **API RESTful:**
    - API RESTful para interação com o sistema através de endpoints claros.
    - Documentação da API utilizando Swagger.

- **Interface de Administração com React:**
    - Interface para administradores gerenciarem eventos e participantes.
    - Consumo da API RESTful criada no backend.
    - Componentes para login, listagem, criação e edição de eventos, e gerenciamento de participantes.

- **Estilização e UX:**
    - Estilização dos componentes React utilizando CSS.
    - Interface responsiva e fácil de usar.

## Estrutura do Projeto

```
EventManagementSystem/
│
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── eventController.js
│   │   └── participantController.js
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Event.js
│   │   ├── Participant.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── eventRoutes.js
│   │   └── participantRoutes.js
│   ├── swagger/
│   │   └── swagger.json
│   ├── .env.example
│   ├── app.js
│   └── package.json
│
└── client/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── EventForm.js
    │   │   ├── EventList.js
    │   │   ├── LoginForm.js
    │   │   └── ParticipantList.js
    │   ├── App.js
    │   ├── index.js
    │   └── api.js
    ├── .env.example
    ├── package.json
    └── README.md
```

## Pré-requisitos

- **Node.js** e **npm** instalados.
- **MongoDB** rodando na máquina local ou em um servidor.

## Configuração

### Backend

1. **Instalação das Dependências:**
   Navegue até a pasta `server` e execute:
   ```bash
   npm install
   ```

2. **Configuração do Banco de Dados e Variáveis de Ambiente:**
   Renomeie `.env.example` para `.env` e configure as seguintes variáveis:
   ```bash
   MONGO_URI=mongodb://localhost:27017/events_db
   JWT_SECRET=sua_chave_secreta
   PORT=5000
   ```

3. **Iniciando o Servidor:**
   ```bash
   npm start
   ```
   O servidor será iniciado na porta definida em `PORT` (padrão 5000).

4. **Documentação da API:**
   A documentação da API está disponível em:
   ```
   http://localhost:5000/api-docs
   ```

### Frontend

1. **Instalação das Dependências:**
   Navegue até a pasta `client` e execute:
   ```bash
   npm install
   ```

2. **Configuração da API:**
   Renomeie `.env.example` para `.env` e configure a variável `REACT_APP_API_URL`:
   ```bash
   REACT_APP_API_URL=http://localhost:5000/api
   ```

3. **Iniciando o Frontend:**
   ```bash
   npm start
   ```
   O frontend será iniciado e poderá ser acessado em:
   ```
   http://localhost:3000
   ```

## Uso

### Login e Registro

1. **Registro:**
   Acesse a rota de registro para criar um novo usuário. Usuários comuns e administradores têm permissões diferentes. Para criar um administrador, você deve definir `role` como `admin` ao registrar um usuário.

2. **Login:**
   Acesse a rota de login e utilize as credenciais para obter um token JWT. Use este token para acessar rotas protegidas.

### Gerenciamento de Eventos

1. **Criar Eventos:**
   Use o formulário disponível na interface de administração para criar novos eventos.

2. **Listar Eventos:**
   A interface lista todos os eventos disponíveis.

3. **Editar e Excluir Eventos:**
   Utilize as opções de edição e exclusão diretamente na lista de eventos.

### Gerenciamento de Participantes

1. **Registrar como Participante:**
   Os usuários podem se registrar como participantes em eventos específicos.

2. **Gerenciar Participantes:**
   Administradores podem visualizar e gerenciar a lista de participantes para cada evento.

## Estilização

O projeto utiliza CSS para a estilização dos componentes React. A interface foi projetada para ser responsiva e fácil de usar em dispositivos de diferentes tamanhos.
