FROM node:10.13.0-alpine
ENV NODE_ENV=development
ENV HOST 0.0.0.0 
# for Nginx reverse proxy, NUXT must host on 0.0.0.0

RUN mkdir -p /var/www/html

# COPY . /var/www/html

WORKDIR /var/www

COPY ./package.json /var/www/package.json
RUN npm install

RUN npm install pm2 -g
COPY ./process.yml /var/www/process.yml
CMD pm2-dev start process.yml
