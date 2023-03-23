FROM node:16.19-alpine
WORKDIR /app
COPY ./*.json ./
RUN npm install
RUN npm install nodemon
COPY . .
CMD [ "npm","run","dev" ]