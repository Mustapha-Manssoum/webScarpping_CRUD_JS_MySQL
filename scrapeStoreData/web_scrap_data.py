import requests
from bs4 import BeautifulSoup
from db import mydb

url = "https://en.wikipedia.org/wiki/Shah_Rukh_Khan_filmography"
# send a GET request to fetch the page content
response = requests.get(url)
# parse the HTML content using BeautiulSoup
soup = BeautifulSoup(response.text, 'html.parser')
# Find the section titled "Feature films"
feature_films_section = soup.find('span', {'id': 'Feature_films'})
# find the first table that contains data about movies
movies_table = feature_films_section.find_next('table')

if movies_table:
    movies_data = []
    # find all rows <tr> in the table
    rows = movies_table.find_all('tr')
    # loop through each row and extract data 
    for row in rows:
        columns = row.find_all(['th', 'td'])  # find all columns <th> and <td>
        movie_info = [col.get_text(strip=True) for col in columns]  # get text from each column
        movies_data.append(movie_info)

else:
    print('Movies table are not found on the page.')


# add the year data to rows that misses it
for i in range(1, len(movies_data)):
    if len(movies_data[i]) == 4:
        movies_data[i].insert(0, movies_data[i - 1][0])

# for movie in movies_data:
#     print(movie)

# Create MySQL cursor
cursor = mydb.cursor()

# Create the database if it doesn't exist
cursor.execute("CREATE DATABASE IF NOT EXISTS srk_movies")

# Switch to the created database
cursor.execute("USE srk_movies")

#  Create a table to store movie data
cursor.execute("""
            CREATE TABLE IF NOT EXISTS movies (
                year INT,
                title VARCHAR(255),
                role VARCHAR(255),
                notes TEXT,
                refs TEXT
            )
               """)
# Insert the movie data into the MySQL database
for movie in movies_data[1:]:
    year, title, role, notes, refs = movie
    sql = "INSERT INTO movies (year, title, role, notes, refs) VALUES (%s, %s, %s, %s, %s)"
    val = (year, title, role, notes, refs)
    cursor.execute(sql, val)

# commit changes and close the db connection
mydb.commit()
mydb.close()

# print("HEEEEEELLOOOOO\n\n\n\n")