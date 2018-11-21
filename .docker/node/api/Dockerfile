FROM node:10.13.0-alpine

WORKDIR  /var/www

COPY ./package.json /var/www/package.json
RUN npm install

RUN npm install pm2 -g
COPY ./process.yml /var/www/process.yml
CMD pm2-dev start process.yml

# pm2-dev,pm2-docker : https://github.com/Unitech/pm2/issues/2641#issuecomment-429522495