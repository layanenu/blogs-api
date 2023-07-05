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

REQUISITOS <br/>
1 - Crie migrations para as tabelas users, categories, blog_posts, posts_categories<br/>
2 - Crie o modelo User em src/models/User.js com as propriedades corretas<br/>
3 - Sua aplicação deve ter o endpoint POST /login<br/>
4 - Sua aplicação deve ter o endpoint POST /user<br/>
5 - Sua aplicação deve ter o endpoint GET /user<br/>
6 - Sua aplicação deve ter o endpoint GET /user/:id<br/>
7 - Crie o modelo Category em src/models/Category.js com as propriedades corretas<br/>
8 - Sua aplicação deve ter o endpoint POST /categories<br/>
9 - Sua aplicação deve ter o endpoint GET /categories<br/>
10 - Crie o modelo BlogPost em src/models/BlogPost.js com as propriedades e associações corretas<br/>
11 - Crie o modelo PostCategory em src/models/PostCategory.js com as propriedades e associações corretas<br/>
12 - Sua aplicação deve ter o endpoint POST /post<br/>
13 - Sua aplicação deve ter o endpoint GET /post<br/>
14 - Sua aplicação deve ter o endpoint GET /post/:id<br/>
15 - Sua aplicação deve ter o endpoint PUT /post/:id<br/>
16 - Sua aplicação deve ter o endpoint DELETE /post/:id<br/>
17 - Sua aplicação deve ter o endpoint DELETE /user/me<br/>
18 - Sua aplicação deve ter o endpoint GET /post/search?q=:searchTerm<br/>
