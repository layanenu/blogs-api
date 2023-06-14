<strong>Blogs Api 👩🏻‍💻 </strong>

<strong>:wavy_dash: Sobre</strong>

Construção de uma API com CRUD para gerenciar a produção de conteúdo para um blog. Foi feito utilizando um banco de dados SQL. A API foi construída utilizando os princípios REST e seguindo a arquitetura MSC (Model, Service, Controller).

Suas principais funcionalidades são:

* Busca, cadastro, login, autenticação e remoção de pessoas usuárias;
* Busca e cadastro de categorias de posts do blog;
* Busca, cadastro, atualização e remoção de posts do blog.

<details>
  <summary><strong> Stacks </strong></summary><br />

  * Node JS
  * MySQL
  * Express
  * Json Web Token (JWT)
  * Sequelize
  * Docker
  * Joi

</details>

<details>
<summary><strong>:whale: Rodando com o Docker</strong></summary><br />

Obs: O seu docker-compose precisa estar na versão 1.29 ou superior.
 
Clone o repositório:
```bash
git clone git@github.com:layanenu/blogs-api.git
```

Entre no diretório car-shop:
```bash
cd blogs-api
```

Instale as dependências do projeto:
```bash
npm install
```
  
Suba a orquestração de containers:
```bash
docker-compose up -d
```
Esses serviços irão inicializar um container chamado ``blogs_api`` e outro chamado ``blogs_api_db``
  
</details>
