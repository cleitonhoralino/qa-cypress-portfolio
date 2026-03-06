# Projeto de Automação de Testes com Cypress

Este projeto demonstra a automação de testes end-to-end (E2E) utilizando o framework **Cypress**, seguindo o padrão de design **Page Object Model (POM)** e utilizando **Custom Commands** para otimização dos fluxos de teste.

## 🚀 Tecnologias Utilizadas

*   **Cypress**: Framework de automação de testes focado em desenvolvedores e QAs modernos.
*   **JavaScript**: Linguagem de programação principal do projeto.
*   **Page Object Model (POM)**: Estrutura para separar a lógica das páginas da lógica dos testes.
*   **Custom Commands**: Comandos personalizados para simplificar ações repetitivas (como login).
*   **GitHub Actions**: Automação de testes em cada push/pull request.

## 🎯 Aplicação Testada

Os testes foram desenvolvidos para a aplicação de e-commerce de demonstração **Sauce Demo**.

## 📂 Estrutura do Projeto

```
qa-portfolio-cypress/
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   └── cart.cy.js
│   ├── pages/
│   │   ├── LoginPage.js
│   │   └── ProductsPage.js
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
│   └── fixtures/
├── cypress.config.js
├── package.json
└── README.md
```

## ⚙️ Configuração e Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/qa-portfolio-cypress.git
    cd qa-portfolio-cypress
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

## ▶️ Como Executar os Testes

### Executar em modo Headless (terminal)
```bash
npx cypress run
```

### Abrir o Cypress Test Runner (interface visual)
```bash
npx cypress open
```

---
**Desenvolvido por Manus AI**
