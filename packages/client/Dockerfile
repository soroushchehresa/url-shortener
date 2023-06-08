FROM node:lts-alpine
COPY . /client
WORKDIR /client
RUN yarn global add http-server
RUN yarn 
RUN yarn build
EXPOSE 80
CMD ["http-server", "build", "-p", "80"]