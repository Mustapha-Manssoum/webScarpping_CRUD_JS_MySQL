# Web Scraping Shahrukh Khan Movies and Storing Data in MySQL Database
This application performs web scraping on a Wikipedia page to extract information about all Shahrukh Khan movies (Because I used to be a big fan during my teenage years). The extracted data is stored in a MySQL database. The application then implements CRUD (Create, Read, Update, Delete) operations using Express-Nodejs.

**Features**:
- Web Scraping: Utilizes web scraping techniques to extract detailed information about Shahrukh Khan's movies from a specific Wikipedia page.
- MySQL Database: Stores the scraped data into a MySQL database for efficient data management.
- CRUD Operations: Implements CRUD functionalities using Express.js to interact with the stored movie data. This includes creating, reading, updating, and deleting movie records from the database.
- Dockerized Application: Provides Docker images for both the application and the MySQL database, facilitating easy deployment and scalability.
**Technologies Used**:
- Node.js: Backend development using JavaScript runtime.
- Express.js: Web framework for building RESTful APIs.
- MySQL: Database management system for storing movie information.
- Docker: Containerization for packaging the application and MySQL database into Docker images.
- Web Scraping Tools: Utilizes web scraping library BeautifulSoup to extract data from web pages.
**Usage**:
- Scraping Data: Run the application to perform web scraping on the Wikipedia page and store the Shahrukh Khan movie data in the MySQL database.
- CRUD Operations: Use the implemented CRUD methods in the Express.js application to manage the stored movie records.
- Docker Images: Deploy the application and MySQL database as Docker containers for easy distribution and deployment across various environments.
**Instructions**:
To run the application:

- Ensure Node.js and MySQL are installed.
- Set up environment variables for the MySQL connection (e.g., DB credentials).
- Execute the application to perform web scraping and database operations.
- Utilize Docker to run the application and MySQL as containers for streamlined deployment.
