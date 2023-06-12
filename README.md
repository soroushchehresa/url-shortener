<p align="center">
  <img src="https://i.imgur.com/rs0YM4e.gif" width="100%" />
</p>

<br>

# URL Shortener
Containerized full-stack URL Shortener application built using web technologies.

<br>

## Demo
[https://s.soroush.se](https://s.soroush.se)

<br>

## Technologies
* [Lerna](https://github.com/lerna/lerna)
* [Node](https://github.com/nodejs/node)
* [Express](https://github.com/expressjs/express)
* [MongoDB](https://github.com/mongodb/mongo)
* [React](https://github.com/facebook/react)
* [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)
* [TypeScript](https://github.com/microsoft/TypeScript)
* [Docker](https://github.com/docker)

<br>

## Production
1: Add your server URL in `packages/client/.env` file:
```
NEXT_PUBLIC_SERVER_BASE_URL=[your-server-url]
```
2: Add your server URL to MongoDB URI in `packages/server/.env` file:
```
MONGODB_URL=mongodb://[your-server-url]:27017/url-shortener
```
3: Run deployment:
```bash
$ docker-compose build && docker-compose up
```

<br>

## Development
1: Install and run MongoDB on your local machine (Instructions: [Windows](https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514) | [Mac](https://medium.com/macoclock/setup-mongodb-on-macos-94e0c687c649) | [Linux](https://www.cherryservers.com/blog/how-to-install-and-start-using-mongodb-on-ubuntu-20-04)).

2: Run development:
```bash
$ yarn bootstrap && yarn start
```

<br>


## App URL
Client:
```
https://[your-server-url or localhost:3000]
```
Server:
```
https://[your-server-url or localhost]:8000
```

<br>
