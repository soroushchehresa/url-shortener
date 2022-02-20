FROM node:16.13.0
COPY . /server
WORKDIR /server
RUN yarn
RUN yarn build
EXPOSE 8000
CMD ["yarn", "start"]
