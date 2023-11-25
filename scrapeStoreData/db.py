import mysql.connector

mydb = mysql.connector.connect(
    host = 'mysql_docker',
    user = 'root',
    password = 'root',
    # database = 'srk_movies',
    port = 3306
)

