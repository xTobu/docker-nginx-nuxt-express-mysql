
[ Practice ]  

# docker-nginx-nuxt-express-mysql 

> Docker, Docker-Compose, Nginx, Nuxt, Express API, MySql

Simple JS full-stack environment with docker for development 

---

  
### Start all container  
`docker-compose up --build`

### Stop and remove all container  
`docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q)`
or
`docker system prune -af`

### Delete all PM2
`pm2 delete all`
