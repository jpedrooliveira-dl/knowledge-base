# 📚 Base de Conhecimento de Tecnologias

Este é um projeto web simples que funciona como uma base de conhecimento, exibindo cartões de informação sobre diversas tecnologias de programação, frameworks e ferramentas. A aplicação permite buscar e filtrar dinamicamente as tecnologias com base no nome ou na descrição.

## ✨ Funcionalidades

- **Visualização em Cards:** Cada tecnologia é apresentada em um card de fácil leitura.
- **Busca Dinâmica:** Filtre os cards em tempo real digitando no campo de busca.
- **Integração com Banco de Dados:** As informações agora são carregadas de um banco de dados MySQL através de uma API Node.js.
- **API Backend:** O projeto conta com um servidor Express que fornece os dados via endpoints REST.

## 📸 Screenshot


![Texto Alternativo](https://imgur.com/1om7wU3.png)

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Para a estrutura da página.
- **CSS3:** Para a estilização dos componentes (não fornecido, mas implícito).
- **JavaScript (Vanilla):** Para a lógica de busca, manipulação do DOM e carregamento dos dados.
- **Node.js & Express:** Para o servidor backend.
- **MySQL:** Banco de dados relacional para armazenar as informações das tecnologias.

## 🚀 Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2.  **Configure o Banco de Dados MySQL:**
    Crie um banco de dados chamado `knowledge_base` e uma tabela `tecnologia` contendo as colunas compatíveis com seu código (ex: `nome`, `descricao`, `data_criacao`, `logo` e `link`). Insira alguns dados de teste na tabela.

3.  **Inicie o Servidor (API):**
    Abra um terminal, navegue até a pasta `api` e instale as dependências:
    ```bash
    cd api
    npm install
    ```
    Crie um arquivo `.env` na pasta `api` e configure a senha do seu banco de dados:
    ```env
    PASSWORD_DB=sua_senha_do_banco
    ```
    Em seguida, rode o servidor:
    ```bash
    node server.js
    ```
    O servidor rodará em `http://localhost:3000`.

4.  **Execute o Front-end:**
    Abra o arquivo `index.html` na raiz do projeto em seu navegador. Recomenda-se o uso da extensão **Live Server** do Visual Studio Code. O Front-end buscará automaticamente os dados do backend.

## 📂 Estrutura de Arquivos

```
├── index.html       # Arquivo principal da página
├── style.css        # Folha de estilos (crie este arquivo se precisar)
├── script.js        # Lógica de busca e renderização
├── api/             # Pasta contendo o servidor backend
│   ├── server.js    # Servidor Express e conexão com o MySQL
│   └── .env         # Variáveis de ambiente (senhas e configs)
└── README.md        # Este arquivo
```