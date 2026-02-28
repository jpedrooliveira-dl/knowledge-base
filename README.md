# 📚 Base de Conhecimento de Tecnologias

Este é um projeto web simples que funciona como uma base de conhecimento, exibindo cartões de informação sobre diversas tecnologias de programação, frameworks e ferramentas. A aplicação permite buscar e filtrar dinamicamente as tecnologias com base no nome ou na descrição.

## ✨ Funcionalidades

- **Visualização em Cards:** Cada tecnologia é apresentada em um card de fácil leitura.
- **Busca Dinâmica:** Filtre os cards em tempo real digitando no campo de busca.
- **Carregamento de Dados Externo:** As informações são carregadas de um arquivo `data.json`, tornando fácil a adição de novas tecnologias.
- **Links Externos:** Cada card possui um link "Saiba mais" que direciona para a documentação oficial ou página de referência da tecnologia.

## 📸 Screenshot


*(Dica: Tire um print da sua aplicação, envie para um site como o Imgur e cole o link aqui)*

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Para a estrutura da página.
- **CSS3:** Para a estilização dos componentes (não fornecido, mas implícito).
- **JavaScript (Vanilla):** Para a lógica de busca, manipulação do DOM e carregamento dos dados.
- **JSON:** Como formato para armazenar os dados das tecnologias.

## 🚀 Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

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

## 📂 Estrutura de Arquivos

```
├── index.html       # Arquivo principal da página
├── style.css        # Folha de estilos (crie este arquivo se precisar)
├── script.js        # Lógica de busca e renderização
├── data.json        # Banco de dados com as tecnologias
└── README.md        # Este arquivo
```