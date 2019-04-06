<!--
*** Obrigado por estar vendo o nosso README. Se você tiver alguma sugestão que possa melhorá-lo ainda mais, dê um fork no repositório e crie uma Pull Request ou abra uma Issue com a tag "sugestão".

*** Obrigado novamente! Agora vamos rodar esse projeto incrível :D
-->

<!-- PROJECT SHIELDS -->

[![express](https://img.shields.io/badge/express-4.16.4-brightgreen.svg)](https://expressjs.com/)
[![node](https://img.shields.io/badge/node-%5E10.13.0-brightgreen.svg)](https://nodejs.org/en/)
[![GitHub issues](https://img.shields.io/badge/open%20issues-0-brightgreen.svg)](https://github.com/danielfelizardo2017/jobify/issues)
[![GitHub last commit](https://img.shields.io/badge/last%20commit-today-orange.svg)](https://github.com/danielfelizardo2017/jobify/commits/master)

<!-- LOGO -->
<br/>
<p align="center">
  <a href="https://github.com/danielfelizardo2017">
    <img src="public/images/logo.png" alt="Logo">
  </a>

  <h3 align="center">feat. DevPleno, Daniel Felizardo - Desenvolvedor Front-End</h3>
</p>

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto e Requisitos](#sobre-o-projeto-e-requisitos)
  - [Feito Com](#feito-com)
- [Começando](#come%C3%A7ando)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Edição](#edi%C3%A7%C3%A3o)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Contato](#contato)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto e Requisitos

Você trabalha no desenvolvimento de uma grande indústria. Nesta indústria eles não tem a necessidade de atualização do site principal da empresa com grande frequência, porém, é de grande reclamação da área de recursos humanos a grande demora na publicação das novas vagas de emprego no site - visto que isso também atrasa novas contratações e está impactando diretamente o crescimento da empresa. O site da empresa é todo estático e atualizações demoram sempre para serem realizadas (elas passam por um processo burocrático, e demoram até 15 dias para acontecer).

Seu chefe quer uma maneira de ajudar a equipe de recursos humanos, agilizando esse processo sem tem que refazer o site todo e sem ter que criar um sistema extenso (com autenticação e muitas regras) - pois seus time tem várias outras demandas. Ele quer agiliar esse processo mesmo que envolva alguém da equipe dele (talvez um estagiário) “copie e cole” as novas vagas de uma maneira que o site possa ser atualizado mais rapidamente. Os candidatos aplicam para a vaga enviando um e-mail específico que o pessoal de recursos humanos diariamente verifica.

Seu chefe quer que as atualizações aconteçam com segurança e rapidez, e te deu o prazo de 2 dias para execução do projeto.

\*\*\* Baseado em uma história real.

### Feito Com

Abaixo segue o que foi utilizado na criação deste projeto:

- [Express](https://reactnavigation.org/) - O Express é uma ferramenta utilizada para capitar requisições do servidor e mostrar para o cliente.
- [Node](http://nodejs.org/en/) - O Node é um gerenciador de pacotes, criado por desenvolvedores para facilitar a criação de projetos.

<!-- GETTING STARTED -->

## Começando

Este projeto foi desenvolvido juntamente com o [DevPleno - Tulio Faria](https://github.com/tuliofaria), com o seu projeto **FullStack Lab**, me ajudou a ter um pouco mais de conhecimento, para me tornar um profissional tão desejado no mercado no mundo do desenvolvimento, chamado de FullStack. Com isso, foi pensado uma maneira que sejamos realmente preparados para futuros projetos profissionais.

### Pré-requisitos

Para este projeto, foi pensado para programadores iniciantes, talvez você não tenha um conhecimento adequado sobre as tecnologias que hoje são essenciais para este mercado. Por isso acesse o canal do **DevPleno**, para receber notícias e para que seja realmente um profissional qualificado:

**[DevPleno](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww)**

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
jobify
├── public/
│   │   ├── images/
│   │   └── estilo.css
│   └── views/
│      └── admin/
├── .gitignore
├── banco.sqlite
├── index.js
├── now.json
├── package.json
├── README.md
└── yarn.lock
```

Serão explicados os arquivos e diretórios na seção de [Edição](#edição) logo a seguir.

### Edição

Nesta seção haverão instruções caso você queira editar o projeto, explicando para que os diretórios são utilizados e também os arquivos de configuração.

- **public** - São os arquivos públicos para que os usuários tenham acesso aos arquivos armazenados neste diretório.

- **views** - Diretório onde é guardado os componentes usando o ESJ para rendenizar em alguma das páginas da aplicação.

  - **admin** - Diretório para o armazenamento de arquivos que somente o desenvolvedor da aplicaçõo terá o acesso.

    - **categorias.js** - Arquivo ejs para capiturar as categorias da aplicação.
    - **home.ejs** - Arquivo de início para o gerenciamento das categorias e vagas armazenadas.
    - **vagas.ejs** - Arquivo ejs para capiturar as vagas da aplicação.

- **.gitignore** - Arquivo de configuração do **git** para ignorar arquivos como o `node_modules` existente de muito espaço, para que não seja exportado para alguma plataforma de repositório.

- **index.js** - Arquivo raiz da aplicação, também chamado de _Entry Point_, é o primeiro arquivo chamado no momento do build e execução da aplicação, nele é chamado o arquivo `index.js` que por sua vez chama as rotas da aplicação.

- **package.json** - Diferente dos projetos comuns, esse arquivo tem as configurações necessárias e para o link da referência da pasta `node_modules`.

- **README.md** - Arquivo de leitura do projeto, tais como o auxílio de outros programadores utilizarem como base.

- **yarn.lock** - Arquivo de cache do gerenciador de pates Yarn.

<!-- CONTRIBUTING -->

## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra uma Pull Request

<!-- CONTACT -->

## Contato

DevPleno - [Github](https://github.com/devpleno)

Daniel Felizardo - [Github](https://github.com/danielfelizardo2017) - **daniel.david772@gmail.com**
