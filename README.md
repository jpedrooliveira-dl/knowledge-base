# 📚 Base de Conhecimento de Tecnologias

Este é um projeto web simples que funciona como uma base de conhecimento, exibindo cartões de informação sobre diversas tecnologias de programação, frameworks e ferramentas. A aplicação permite buscar e filtrar dinamicamente as tecnologias com base no nome ou na descrição.

## ✨ Funcionalidades

- **Visualização em Cards:** Cada tecnologia é apresentada em um card de fácil leitura.
- **Busca Dinâmica:** Filtre os cards em tempo real digitando no campo de busca.
- **Carregamento de Dados Externo:** As informações são carregadas de um arquivo `data.json`, tornando fácil a adição de novas tecnologias.
- **API Node.js (Opcional):** O projeto inclui um servidor Express simples para simular o consumo de uma API real.

## 📸 Screenshot


![Texto Alternativo](https://imgur.com/1om7wU3.png)

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Para a estrutura da página.
- **CSS3:** Para a estilização dos componentes (não fornecido, mas implícito).
- **JavaScript (Vanilla):** Para a lógica de busca, manipulação do DOM e carregamento dos dados.
- **Node.js & Express:** Para o servidor backend (opcional).

## 🚀 Como Executar o Projeto

Este projeto pode ser executado de duas maneiras: **Modo Estático** (padrão) ou **Modo Fullstack** (com API).

### Opção 1: Modo Estático (Padrão / GitHub Pages)
1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd seu-repositorio
    ```

3.  **Abra o arquivo `index.html` no seu navegador.**

    Como o projeto usa a `Fetch API` para carregar o `data.json`, pode ser necessário executá-lo a partir de um servidor local para evitar problemas de CORS (Cross-Origin Resource Sharing). Uma maneira fácil de fazer isso é usando a extensão **Live Server** no Visual Studio Code.

> **Nota:** O arquivo `data.json` está presente na raiz do front-end especificamente para permitir que o projeto seja hospedado gratuitamente no **GitHub Pages**, que serve apenas conteúdo estático.

### Opção 2: Modo Fullstack (Com API Node.js)

Se você quiser testar a aplicação consumindo dados de um servidor real:

1.  **Inicie o Servidor:**
    Abra um terminal, navegue até a pasta `api` e instale as dependências:
    ```bash
    cd api
    npm install
    node server.js
    ```
    O servidor rodará em `http://localhost:3000`.

2.  **Configure o Front-end:**
    Abra o arquivo `script.js` e altere a fonte dos dados na função `iniciarBusca()`:

    ```javascript
    // Comente a linha do modo estático:
    // let resposta = await fetch("data.json");

    // Descomente a linha do servidor:
    let resposta = await fetch("http://localhost:3000/tecnologia");
    ```

## 📂 Estrutura de Arquivos

```
├── index.html       # Arquivo principal da página
├── style.css        # Folha de estilos (crie este arquivo se precisar)
├── script.js        # Lógica de busca e renderização
├── data.json        # Banco de dados com as tecnologias
└── README.md        # Este arquivo
```