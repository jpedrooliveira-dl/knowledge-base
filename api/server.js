const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000

// app.arguments(cors())
app.use(cors())

const dadosTecnologia = [
  {
    "nome": "JavaScript",
    "descricao": "JavaScript é uma linguagem de programação muito usada em desenvolvimento web.",
    "data_criacao": "1995",
    "link": "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "tags": ["linguagem de programação", "frontend", "web", "scripting", "nodejs"]
  },
  {
    "nome": "Python",
    "descricao": "Python é uma linguagem de programação muito usada para criar IA",
    "data_criacao": "1991",
    "link": "https://docs.python.org/pt-br/3.14/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    "tags": ["linguagem de programação", "backend", "ia", "ciência de dados", "automação"]
  },
  {
    "nome": "Java",
    "descricao": "Java é uma linguagem de programação orientada a objetos e uma plataforma de computação.",
    "data_criacao": "1995",
    "link": "https://docs.oracle.com/en/java/",
    "logo": "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    "tags": ["linguagem de programação", "backend", "orientado a objetos", "jvm", "enterprise"]
  },
  {
    "nome": "C#",
    "descricao": "C# (pronuncia-se 'C sharp') é uma linguagem de programação moderna, orientada a objetos e de tipo seguro.",
    "data_criacao": "2000",
    "link": "https://learn.microsoft.com/pt-br/dotnet/csharp/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg",
    "tags": ["linguagem de programação", "backend", "dotnet", "microsoft", "jogos"]
  },
  {
    "nome": "Go",
    "descricao": "Go é uma linguagem de programação de código aberto que torna fácil a construção de software simples, confiável e eficiente.",
    "data_criacao": "2009",
    "link": "https://go.dev/doc/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
    "tags": ["linguagem de programação", "backend", "concorrência", "google", "sistemas"]
  },
  {
    "nome": "TypeScript",
    "descricao": "TypeScript é um superconjunto de JavaScript que adiciona tipagem estática opcional à linguagem.",
    "data_criacao": "2012",
    "link": "https://www.typescriptlang.org/docs/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    "tags": ["linguagem de programação", "frontend", "backend", "javascript", "tipagem"]
  },
  {
    "nome": "PHP",
    "descricao": "PHP é uma linguagem de script de uso geral popular, especialmente adequada para o desenvolvimento web.",
    "data_criacao": "1995",
    "link": "https://www.php.net/manual/pt_BR/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    "tags": ["linguagem de programação", "backend", "web", "scripting", "servidor"]
  },
  {
    "nome": "Ruby",
    "descricao": "Ruby é uma linguagem de programação dinâmica, de código aberto, com foco na simplicidade e produtividade.",
    "data_criacao": "1995",
    "link": "https://www.ruby-lang.org/pt/documentation/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
    "tags": ["linguagem de programação", "backend", "web", "scripting", "rails"]
  },
  {
    "nome": "Swift",
    "descricao": "Swift é uma linguagem de programação poderosa e intuitiva para macOS, iOS, watchOS e tvOS. Desenvolvida pela Apple.",
    "data_criacao": "2014",
    "link": "https://developer.apple.com/swift/documentation/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg",
    "tags": ["linguagem de programação", "mobile", "ios", "apple", "frontend"]
  },
  {
    "nome": "Kotlin",
    "descricao": "Linguagem de programação moderna, estaticamente tipada, que roda na JVM e é a linguagem oficial para desenvolvimento Android.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
    "data_criacao": "2011",
    "link": "https://kotlinlang.org/",
    "tags": [
      "linguagem de programação",
      "jvm",
      "android",
      "backend",
      "multiplataforma"
    ]
  },
  {
    "nome": "Rust",
    "descricao": "Linguagem de programação de sistemas focada em segurança, velocidade e concorrência, garantindo segurança de memória sem garbage collector.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
    "data_criacao": "2010",
    "link": "https://rust-lang.org/pt-BR/",
    "tags": [
      "linguagem de programação",
      "sistemas",
      "performance",
      "segurança",
      "baixo nível"
    ]
  },
  {
    "nome": "Scala",
    "descricao": "Linguagem que combina recursos de programação orientada a objetos e programação funcional, executada na Java Virtual Machine (JVM).",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Scala-full-color.svg/330px-Scala-full-color.svg.png",
    "data_criacao": "2004",
    "link": "https://www.scala-lang.org/",
    "tags": [
      "linguagem de programação",
      "jvm",
      "funcional",
      "big data"
    ]
  },
  {
    "nome": "C++",
    "descricao": "Extensão da linguagem C, amplamente utilizada para desenvolvimento de sistemas operacionais, jogos de alto desempenho e software embarcado.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    "data_criacao": "1985",
    "link": "https://isocpp.org/",
    "tags": [
      "linguagem de programação",
      "sistemas",
      "jogos",
      "performance",
      "baixo nível"
    ]
  },
  {
    "nome": "Dart",
    "descricao": "Linguagem otimizada para cliente, desenvolvida pelo Google, e é a base para o framework Flutter, focado em desenvolvimento multi-plataforma.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png",
    "data_criacao": "2011",
    "link": "https://dart.dev/",
    "tags": [
      "linguagem de programação",
      "mobile",
      "frontend",
      "flutter",
      "multiplataforma"
    ]
  },
  {
    "nome": "Elixir",
    "descricao": "Linguagem funcional e concorrente construída sobre a Erlang Virtual Machine (BEAM), conhecida por construir sistemas escaláveis e tolerantes a falhas.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Official_Elixir_logo.png/250px-Official_Elixir_logo.png",
    "data_criacao": "2012",
    "link": "https://elixir-lang.org/",
    "tags": [
      "linguagem de programação",
      "funcional",
      "backend",
      "concorrência",
      "web"
    ]
  },
  {
    "nome": "Haskell",
    "descricao": "Linguagem de programação puramente funcional, de propósito geral, com tipagem estática forte e avaliação preguiçosa (lazy evaluation).",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg",
    "data_criacao": "1990",
    "link": "https://www.haskell.org/",
    "tags": [
      "linguagem de programação",
      "funcional",
      "acadêmica",
      "pesquisa"
    ]
  },
  {
    "nome": "R",
    "descricao": "Linguagem e ambiente de software livre para computação estatística e gráficos, amplamente usada em ciência de dados e análise estatística.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg",
    "data_criacao": "1993",
    "link": "https://www.r-project.org/",
    "tags": [
      "linguagem de programação",
      "ciência de dados",
      "estatística",
      "análise"
    ]
  },
  {
    "nome": "SQL",
    "descricao": "Linguagem de consulta padrão utilizada para gerenciar e manipular dados em sistemas de gerenciamento de banco de dados relacionais (RDBMS).",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    "data_criacao": "1974",
    "link": "https://www.iso.org/standard/63555.html",
    "tags": [
      "linguagem de consulta",
      "banco de dados",
      "relacional",
      "dados"
    ]
  },
  {
    "nome": "Lua",
    "descricao": "Linguagem de script leve, Brasileira, poderosa e incorporável, frequentemente usada para scripting em jogos (como Roblox) e sistemas embarcados.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg",
    "data_criacao": "1993",
    "link": "https://www.lua.org/",
    "tags": [
      "linguagem de programação",
      "scripting",
      "jogos",
      "embutido",
      "performance"
    ]
  },
  {
    "nome": "Julia",
    "descricao": "Linguagem de programação dinâmica de alto nível, projetada especificamente para computação científica, machine learning e análise de dados.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Julia_Programming_Language_Logo.svg",
    "data_criacao": "2012",
    "link": "https://julialang.org/",
    "tags": [
      "linguagem de programação",
      "computação científica",
      "machine learning",
      "performance"
    ]
  },
  {
    "nome": "C",
    "descricao": "Linguagem imperativa, procedural e estruturada, fundamental para o desenvolvimento de sistemas operacionais e software de baixo nível.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
    "data_criacao": "1972",
    "link": "https://en.wikipedia.org/wiki/C_(programming_language)",
    "tags": [
      "linguagem de programação",
      "sistemas",
      "baixo nível",
      "kernel"
    ]
  },
  {
    "nome": "HTML5",
    "descricao": "A quinta revisão da linguagem de marcação mais utilizada para estruturar e apresentar conteúdo na World Wide Web.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    "data_criacao": "2008",
    "link": "https://html.spec.whatwg.org/multipage/",
    "tags": [
      "linguagem de marcação",
      "frontend",
      "web",
      "estrutura"
    ]
  },
  {
    "nome": "CSS3",
    "descricao": "A linguagem de folha de estilo usada para descrever a apresentação (aparência e formatação) de um documento escrito em HTML.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    "data_criacao": "1999",
    "link": "https://www.w3.org/Style/CSS/",
    "tags": [
      "linguagem de estilo",
      "frontend",
      "design",
      "web"
    ]
  },
  {
    "nome": "React",
    "descricao": "Biblioteca JavaScript declarativa e eficiente para construir interfaces de usuário baseadas em componentes.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "data_criacao": "2013",
    "link": "https://reactjs.org/",
    "tags": [
      "biblioteca",
      "frontend",
      "web",
      "ui"
    ]
  },
  {
    "nome": "Vue.js",
    "descricao": "Framework progressivo para a construção de interfaces de usuário. É projetado para ser adaptável e fácil de integrar.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    "data_criacao": "2014",
    "link": "https://vuejs.org/",
    "tags": [
      "framework",
      "frontend",
      "web",
      "reatividade"
    ]
  },
  {
    "nome": "Angular",
    "descricao": "Framework completo e robusto, mantido pelo Google, para construir Single Page Applications (SPAs) de grande escala.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/250px-Angular_gradient_logo.png",
    "data_criacao": "2016",
    "link": "https://angular.io/",
    "tags": [
      "framework",
      "frontend",
      "typescript",
      "spa"
    ]
  },
  {
    "nome": "Svelte",
    "descricao": "Framework de frontend que compila o código em JavaScript Vanilla em tempo de build, resultando em pacotes menores e mais rápidos.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
    "data_criacao": "2016",
    "link": "https://svelte.dev/",
    "tags": [
      "framework",
      "frontend",
      "compilador",
      "web"
    ]
  },
  {
    "nome": "PostgreSQL",
    "descricao": "Sistema de gerenciamento de banco de dados objeto-relacional robusto, de código aberto, conhecido por sua confiabilidade e conformidade com SQL.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    "data_criacao": "1996",
    "link": "https://www.postgresql.org/",
    "tags": [
      "banco de dados",
      "relacional",
      "opensource",
      "robustez"
    ]
  },
  {
    "nome": "MongoDB",
    "descricao": "Banco de dados NoSQL orientado a documentos, que oferece alta disponibilidade, escalabilidade e flexibilidade de esquema.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    "data_criacao": "2009",
    "link": "https://www.mongodb.com/",
    "tags": [
      "banco de dados",
      "nosql",
      "documentos",
      "escalabilidade"
    ]
  },
  {
    "nome": "Docker",
    "descricao": "Plataforma de código aberto que permite empacotar uma aplicação e todas as suas dependências em um contêiner virtual isolado.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_(container_engine)_logo.svg",
    "data_criacao": "2013",
    "link": "https://www.docker.com/",
    "tags": [
      "ferramenta",
      "devops",
      "containerização",
      "infraestrutura",
      "cloud"
    ]
  },
  {
    "nome": "Kubernetes",
    "descricao": "Sistema de orquestração de contêineres de código aberto, originalmente projetado pelo Google, que automatiza a implantação, escala e gerenciamento de aplicações.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
    "data_criacao": "2014",
    "link": "https://kubernetes.io/",
    "tags": [
      "ferramenta",
      "devops",
      "orquestração",
      "cloud"
    ]
  },
  {
    "nome": "Terraform",
    "descricao": "Ferramenta de infraestrutura como Código (IaC) da HashiCorp, que permite provisionar e gerenciar recursos de infraestrutura usando arquivos de configuração.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg",
    "data_criacao": "2014",
    "link": "https://www.terraform.io/",
    "tags": [
      "ferramenta",
      "devops",
      "iac",
      "cloud",
      "infraestrutura"
    ]
  },
  {
    "nome": "Apache Kafka",
    "descricao": "Plataforma distribuída de streaming de eventos de código aberto, usada para construir pipelines de dados em tempo real e aplicativos de streaming.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Apache_kafka.png",
    "data_criacao": "2011",
    "link": "https://kafka.apache.org/",
    "tags": [
      "plataforma",
      "big data",
      "streaming",
      "mensageria",
      "dados"
    ]
  },
  {
    "nome": "Erlang",
    "descricao": "Linguagem funcional projetada para sistemas massivamente concorrentes, distribuídos e tolerantes a falhas, com foco em telecomunicações.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/04/Erlang_logo.svg",
    "data_criacao": "1986",
    "link": "https://www.erlang.org/",
    "tags": [
      "linguagem de programação",
      "concorrência",
      "sistemas distribuidos",
      "backend"
    ]
  },
  {
    "nome": "Next.js",
    "descricao": "Framework React para produção que oferece renderização do lado do servidor (SSR), geração de site estático (SSG) e recursos completos de full-stack.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    "data_criacao": "2016",
    "link": "https://nextjs.org/",
    "tags": [
      "framework",
      "frontend",
      "fullstack",
      "react",
      "servidor"
    ]
  },
  {
    "nome": "Redis",
    "descricao": "Estrutura de dados em memória, usada como cache, banco de dados e message broker, conhecida por sua alta performance.",
    "logo": "https://adevait.com/_next/image?url=https%3A%2F%2Fstatic.adevait.com%2F2017%2F12%2Fredis-1-768x512.png&w=828&q=100",
    "data_criacao": "2009",
    "link": "https://redis.io/",
    "tags": [
      "banco de dados",
      "cache",
      "nosql",
      "ferramenta"
    ]
  },
  {
    "nome": "Cassandra",
    "descricao": "Banco de dados NoSQL distribuído e altamente escalável, projetado para lidar com grandes volumes de dados em servidores commodity.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Cassandra_logo.svg",
    "data_criacao": "2008",
    "link": "https://cassandra.apache.org/",
    "tags": [
      "banco de dados",
      "nosql",
      "distribuido",
      "big data"
    ]
  },
  {
    "nome": "GitHub Actions",
    "descricao": "Plataforma de CI/CD integrada ao GitHub, usada para automatizar fluxos de trabalho de desenvolvimento de software.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/GitHub_Actions_logo.svg/320px-GitHub_Actions_logo.svg.png",
    "data_criacao": "2018",
    "link": "https://github.com/features/actions",
    "tags": [
      "ci/cd",
      "automação",
      "ferramenta",
      "devops"
    ]
  },
  {
    "nome": "AWS Lambda",
    "descricao": "Serviço de computação serverless que permite executar código em resposta a eventos sem provisionar ou gerenciar servidores.",
    "logo": "data:image/jpeg;base64,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",
    "data_criacao": "2014",
    "link": "https://aws.amazon.com/lambda/",
    "tags": [
      "cloud computing",
      "serverless",
      "aws",
      "computação"
    ]
  },
  {
    "nome": "Vite",
    "descricao": "Ferramenta de construção frontend moderna que melhora significativamente a experiência de desenvolvimento usando módulos ES nativos.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
    "data_criacao": "2020",
    "link": "https://vitejs.dev/",
    "tags": [
      "ferramenta",
      "build tool",
      "frontend",
      "módulos"
    ]
  },
  {
    "nome": "Express.js",
    "descricao": "Framework de aplicação web minimalista e flexível para Node.js, amplamente utilizado para construir APIs RESTful e aplicações backend.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    "data_criacao": "2010",
    "link": "https://expressjs.com/",
    "tags": [
      "framework",
      "backend",
      "nodejs",
      "api"
    ]
  },
  {
    "nome": "Tailwind CSS",
    "descricao": "Framework CSS utilitário que permite construir designs rapidamente, aplicando classes diretamente na marcação HTML.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    "data_criacao": "2017",
    "link": "https://tailwindcss.com/",
    "tags": [
      "css",
      "framework",
      "frontend",
      "design"
    ]
  },
  {
    "nome": "XML",
    "descricao": "Linguagem de marcação usada para definir regras para codificar documentos em um formato que é legível por humanos e máquinas.",
    "logo": "data:image/png;base64,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",
    "data_criacao": "1998",
    "link": "https://www.w3.org/XML/",
    "tags": [
      "linguagem de marcação",
      "formato de dados",
      "dados",
      "web"
    ]
  },
  {
    "nome": "NestJS",
    "descricao": "Framework Node.js progressivo para construir aplicações eficientes e escaláveis do lado do servidor, baseado em arquitetura modular.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg",
    "data_criacao": "2017",
    "link": "https://nestjs.com/",
    "tags": [
      "framework",
      "backend",
      "nodejs",
      "typescript"
    ]
  },
  {
    "nome": "MariaDB",
    "descricao": "Um fork do MySQL, este sistema de gerenciamento de banco de dados relacional é conhecido por ser de código aberto e orientado à comunidade.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/ca/MariaDB_colour_logo.svg",
    "data_criacao": "2009",
    "link": "https://mariadb.org/",
    "tags": [
      "banco de dados",
      "relacional",
      "rdbms",
      "open source"
    ]
  },
  {
    "nome": "Shell Script",
    "descricao": "Linguagem de script usada para automatizar tarefas operacionais, manipular arquivos e executar comandos em sistemas operacionais Unix/Linux.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg",
    "data_criacao": "1970",
    "link": "https://www.gnu.org/software/bash/",
    "tags": [
      "linguagem de script",
      "automação",
      "sistemas operacionais",
      "devops"
    ]
  },
  {
    "nome": "Webpack",
    "descricao": "Um empacotador de módulos primário para aplicações JavaScript, usado para compilar e otimizar ativos de frontend.",
    "logo": "data:image/png;base64,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",
    "data_criacao": "2012",
    "link": "https://webpack.js.org/",
    "tags": [
      "ferramenta",
      "build tool",
      "frontend",
      "módulos"
    ]
  },
  {
    "nome": "Azure Functions",
    "descricao": "Solução serverless da Microsoft Azure que permite executar pequenos pedaços de código ('funções') em resposta a eventos.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
    "data_criacao": "2016",
    "link": "https://azure.microsoft.com/en-us/products/functions",
    "tags": [
      "cloud computing",
      "serverless",
      "microsoft azure",
      "computação"
    ]
  },
  {
    "nome": "Neo4j",
    "descricao": "Sistema de gerenciamento de banco de dados de grafo nativo, ideal para modelar e consultar dados altamente conectados.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Neo4j-logo2024color.png/250px-Neo4j-logo2024color.png",
    "data_criacao": "2007",
    "link": "https://neo4j.com/",
    "tags": [
      "banco de dados",
      "nosql",
      "grafo",
      "big data"
    ]
  },
  {
    "nome": "Helm",
    "descricao": "Gerenciador de pacotes para Kubernetes que ajuda a definir, instalar e fazer upgrade de aplicações complexas usando 'Charts'.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Helm_logo.svg",
    "data_criacao": "2016",
    "link": "https://helm.sh/",
    "tags": [
      "kubernetes",
      "devops",
      "ferramenta",
      "orquestração"
    ]
  },
  {
    "nome": "gRPC",
    "descricao": "Framework de chamada de procedimento remoto (RPC) de código aberto e alto desempenho, usado para comunicação entre microsserviços.",
    "logo": "https://grpc.io/img/logos/grpc-logo.png",
    "data_criacao": "2015",
    "link": "https://grpc.io/",
    "tags": [
      "protocolo",
      "microsserviços",
      "comunicação",
      "ferramenta"
    ]
  },
  {
    "nome": "Jest",
    "descricao": "Framework de teste em JavaScript focado em simplicidade, usado principalmente para testar componentes frontend e código Node.js.",
    "logo": "https://www.jetbrains.com/guide/assets/jest-5ee71e9b.svg",
    "data_criacao": "2014",
    "link": "https://jestjs.io/",
    "tags": [
      "framework",
      "testes",
      "javascript",
      "ferramenta"
    ]
  },
  {
    "nome": "npm",
    "descricao": "Gerenciador de pacotes padrão para o ecossistema Node.js, usado para instalar bibliotecas e gerenciar dependências de projetos.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
    "data_criacao": "2010",
    "link": "https://www.npmjs.com/",
    "tags": [
      "ferramenta",
      "gerenciador de pacotes",
      "nodejs",
      "javascript"
    ]
  },
  {
    "nome": "SQLite",
    "descricao": "Sistema de banco de dados relacional que implementa um mecanismo de banco de dados SQL serverless, leve e de arquivo único.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg",
    "data_criacao": "2000",
    "link": "https://www.sqlite.org/index.html",
    "tags": [
      "banco de dados",
      "relacional",
      "embedded",
      "serveless"
    ]
  },
  {
    "nome": "PowerShell",
    "descricao": "Linguagem de script e shell de linha de comando desenvolvida pela Microsoft, usada para automação de tarefas em ambientes Windows e cross-platform.",
    "logo": "data:image/jpeg;base64,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",
    "data_criacao": "2006",
    "link": "https://learn.microsoft.com/en-us/powershell/",
    "tags": [
      "linguagem de script",
      "automação",
      "sistemas operacionais",
      "microsoft"
    ]
  },
  {
    "nome": "GitLab CI",
    "descricao": "Ferramenta de Integração e Entrega Contínua (CI/CD) embutida no GitLab, que automatiza a construção, teste e implantação de software.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/GitLab_logo.svg/240px-GitLab_logo.svg.png",
    "data_criacao": "2014",
    "link": "https://docs.gitlab.com/ee/ci/",
    "tags": [
      "ci/cd",
      "automação",
      "ferramenta",
      "devops"
    ]
  },
  {
    "nome": "Remix",
    "descricao": "Framework web full-stack focado em performance e na Web Standards, construído em torno de React Router.",
    "logo": "https://i.ibb.co/b5xtKrLj/remix-letter-dark.png",
    "data_criacao": "2020",
    "link": "https://remix.run/",
    "tags": [
      "framework",
      "fullstack",
      "frontend",
      "react"
    ]
  },
  {
    "nome": "Astro",
    "descricao": "Construtor de sites focado em desempenho, que entrega zero JavaScript por padrão, ideal para blogs e sites estáticos de conteúdo.",
    "logo": "https://agilosoftware.com/wp-content/uploads/2025/07/1_a9mDOQAsIsf-EElJVRwNSg.jpg",
    "data_criacao": "2021",
    "link": "https://astro.build/",
    "tags": [
      "build tool",
      "frontend",
      "static sites",
      "web performance"
    ]
  },
  {
    "nome": "JSON",
    "descricao": "Formato de arquivo aberto e padrão de dados que usa texto legível por humanos para transmitir objetos de dados compostos por pares de atributo-valor e arrays.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg",
    "data_criacao": "2001",
    "link": "https://www.json.org/json-en.html",
    "tags": [
      "formato de dados",
      "api",
      "interoperabilidade",
      "web"
    ]
  },
  {
    "nome": "React Native",
    "descricao": "Framework baseado em React para desenvolvimento de aplicativos móveis nativos para Android e IOS usando JavaScript.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "data_criacao": "2015",
    "link": "https://reactnative.dev/",
    "tags": [
      "framework",
      "mobile",
      "javascript",
      "ios",
      "android",
      "multiplataforma"
    ]
  }

]

app.get('/tecnologia', (req, res) => {
    res.json(dadosTecnologia)
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
