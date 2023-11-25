#!/bin/bash

# Wait for MySQL service
until nc -z mysql_docker 3306; do
    echo "Waiting for MySQL to start..."
    sleep 1
done

# Run Python script
python3 /home/app/scrapeStoreData/web_scrap_data.py

# Wait for MySQL again if needed
until nc -z mysql_docker 3306; do
    echo "Waiting for MySQL to start..."
    sleep 1
done

# Start Node.js application
node /home/app/index.js
