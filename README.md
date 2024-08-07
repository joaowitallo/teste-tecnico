
# Projeto de Aplicação Web para Venda de Carros

Este projeto é uma aplicação web para a venda de carros. Ele inclui funcionalidades para autenticação de usuários utilizando JWT (JSON Web Tokens) e utiliza dados mockados para simular a interação com a aplicação. O projeto é desenvolvido utilizando HTML, CSS e JavaScript.

## Visão Geral

A aplicação permite que os usuários visualizem e comprem carros. A autenticação é gerenciada através de tokens JWT para garantir a segurança e a integridade das sessões de usuário. Os dados dos usuários e dos carros são mockados para fins de desenvolvimento e teste.

## Funcionalidades

- **Autenticação JWT**: Protege as rotas e recursos da aplicação garantindo que apenas usuários autenticados possam acessar determinadas funcionalidades.
- **Visualização de Carros**: Exibe uma lista de carros disponíveis para venda com detalhes como marca, modelo e preço.
- **Compra de Carros**: Permite que os usuários selecionem e comprem carros, simulando o processo de compra.
- **Interface de Usuário**: Interface simples e responsiva para uma melhor experiência do usuário.

## Ferramentas e Tecnologias

- **HTML**: Estrutura básica da aplicação web.
- **CSS**: Estilização da aplicação para uma interface atraente e responsiva.
- **JavaScript**: Lógica de funcionalidade da aplicação, incluindo manipulação do DOM e autenticação JWT.
- **JWT (JSON Web Tokens)**: Autenticação e gerenciamento de sessões de usuário.
- **Mocked Data**: Dados simulados para usuários e carros para desenvolvimento e testes.

## Estrutura do Projeto

- `index.html`: Página principal da aplicação.
- `styles.css`: Arquivo CSS com a estilização da aplicação.
- `script.js`: Lógica JavaScript para manipulação da aplicação.
- `login.js`: Gerenciamento da autenticação e funcionalidades de login (substituindo `auth.js`).
- `login.html`: Página do formulário de login.
- `login.css`: Estilo da página de login.
- `pagina_inicio.html`: Página inicial da aplicação.
- `inicio.css`: Estilo da página inicial.

- # Carrinho de Compras:
Este projeto é uma aplicação simples de carrinho de compras em JavaScript. Ele permite adicionar itens ao carrinho, remover itens, alterar quantidades e calcular o total da compra. A interface é básica, com funcionalidade principal implementada através de JavaScript, HTML e CSS.

## Funcionalidades

- **Abrir e Fechar Carrinho**: Clique no ícone de carrinho para abrir e no botão de voltar para fechar.
- **Adicionar ao Carrinho**: Adicione itens ao carrinho e veja a quantidade e o preço atualizados.
- **Remover Itens**: Remova itens individuais do carrinho.
- **Alterar Quantidades**: Modifique a quantidade de itens no carrinho.
- **Comprar**: Clique no botão de comprar para finalizar a compra e limpar o carrinho.
- **Atualizar Total**: O total da compra é calculado e exibido em tempo real.

## Estrutura do Projeto

- **HTML**: Estrutura básica do carrinho de compras.
- **CSS**: Estilização do carrinho e dos itens.
- **JavaScript**: Lógica de manipulação do carrinho, incluindo adicionar, remover e atualizar itens e total.

## Arquivos

- `index.html`: Arquivo HTML principal que contém a estrutura da página.
- `styles.css`: Arquivo CSS para estilizar o carrinho e os itens.
- `script.js`: Arquivo JavaScript que contém toda a lógica do carrinho de compras.

- # Login e Autenticação:
O `login.js` é um script JavaScript que gerencia a autenticação de usuários em uma aplicação web utilizando JSON Web Tokens (JWT). Este script inclui a geração de tokens JWT e a autenticação de usuários com dados mockados. É uma parte do projeto que visa a implementação de funcionalidades de login e proteção de rotas.

## Funcionalidades

- **Geração de JWT**: Cria um token JWT para autenticação de usuários, com um tempo de expiração definido.
- **Autenticação de Usuários**: Valida as credenciais do usuário com dados mockados e emite um token JWT se as credenciais forem corretas.
- **Formulário de Login**: Manipula o envio do formulário de login e fornece feedback ao usuário sobre o sucesso ou falha no login.

## Funcionalidades Detalhadas

### Geração de JWT

A função `generateJWT(username)` cria um token JWT com os seguintes componentes:
- **Header**: Define o algoritmo de assinatura (`HS256`) e o tipo de token (`JWT`).
- **Payload**: Inclui o nome de usuário e a data de expiração do token (1 hora a partir da criação).
- **Signature**: Assina o token usando HMAC e SHA-256 com uma chave secreta.

### Autenticação de Usuários

A função `authenticateUser(username, password)` verifica as credenciais do usuário:
- **Usuário Armazenado**: Dados mockados para autenticação.
- **Verificação**: Compara as credenciais fornecidas com as armazenadas.
- **Geração de Token**: Se as credenciais forem válidas, gera um token JWT e armazena-o no `localStorage`.

### Manipulação do Formulário de Login

O script adiciona um ouvinte de eventos ao formulário de login (`login-form`):
- **Prevenção do Envio Padrão**: Impede o envio padrão do formulário para realizar a autenticação via JavaScript.
- **Captura de Credenciais**: Obtém o nome de usuário e a senha do formulário.
- **Autenticação**: Chama a função `authenticateUser` e exibe uma mensagem de sucesso ou erro com base no resultado.

