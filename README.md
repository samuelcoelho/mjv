# mjv-eShopApi

Teste de API REST com NodeJS, Express, SQLite e Sequelize.

Categorias:

	Create		- POST	 http://localhost:3001/categories
  
	Retrieve	- GET	 http://localhost:3001/categories
  
	Update		- PUT	 http://localhost:3001/categories/:id
  
	Delete		- DELETE http://localhost:3001/categories/:id

	JSON Categorias
	{
		"name": string
	}

Produtos:

	Create		- POST	 http://localhost:3001/products
  
	Retrieve	- GET	 http://localhost:3001/products
  
	Paginated List	- GET	 http://localhost:3001/products/:page
  
	Update		- PUT	 http://localhost:3001/products/:id
  
	Delete		- DELETE http://localhost:3001/products/:id

	JSON Categorias
	{
		"name": string,
		"category_id": integer
	}

Detalhe de Produto:

	Create		- POST	 http://localhost:3001/productDetails
  
	Retrieve	- GET	 http://localhost:3001/productDetails
  
	Update		- PUT	 http://localhost:3001/productDetails/:id
  
	Delete		- DELETE http://localhost:3001/productDetails/:id

	JSON Categorias
	{
		"name": string,
		"description": string,
		"product_id": integer
	}

Instruções para teste:

  Clonar o repositório, executar "npm install" para instação das dependências.
  Executar "node app" e acessar os endpoints acima descritos.
