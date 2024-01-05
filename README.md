## Getting Started
## Docker for window

https://www.youtube.com/watch?v=XgRGI0Pw2mM

## Docker for ubuntu 

https://www.youtube.com/watch?v=Vplj9b0L_1Y&t=1s

## Copy .env.example o .env

### How to start to develop first time

- standing at the root of the project, outside the app-react folder

> docker-compose up --build

### How to install new dependencies

- standing at the root of the project, outside the app-react folder
> docker-compose run --rm node yarn add <dependency>

In case you need to install packages already included in package.json

- standing at the root of the project, outside the app-react folder
> docker-compose run --rm node yarn install --frozen-lockfile
