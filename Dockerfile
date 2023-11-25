FROM node:21-alpine

ENV MYSQL_ROOT_PASSWORD=root

# Install Python 3 and pip for MySQL connector, requests and BeautifulSoup
RUN apk add --no-cache python3 py3-pip && \
    pip3 install mysql-connector-python requests beautifulsoup4

WORKDIR /home/app

COPY . /home/app

# Install Node.js dependencies
RUN npm install

CMD ["sh", "/home/app/entrypoint.sh"]