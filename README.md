# ORM-eCommerce

# Decription 
Build the back end for an e-commerce site. Take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.

# User Story 
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
# Acceptance Criteria 
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database

# Database Models
- Category

- id

1. Integer
2. Doesn't allow null values
3. Set as primary key
4. Uses auto increment
   
- category_name

1. String
2. Doesn't allow null values
3. Product

- id

1. Integer
2. Doesn't allow null values
3. Set as primary key
4. Uses auto increment
   
- product_name

1. String
2. Doesn't allow null values

- price

1. Decimal
2. Doesn't allow null values
3. Validates that the value is a decimal
stock

- Integer
1. Doesn't allow null values
2. Set a default value of 10
3. Validates that the value is numeric

- category_id

1. Integer
2. References the category model's id

- Tag

- id

1. Integer
2. Doesn't allow null values
3. Set as primary key
4. Uses auto increment
   
- tag_name

1. String
2. ProductTag

- id

1. Integer
2. Doesn't allow null values
3. Set as primary key
4. Uses auto increment
   
- product_id

1. Integer
2. References the product model's id
   
- tag_id

1. Integer
2. References the tag model's id
