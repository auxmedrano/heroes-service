FROM node:16.19-alpine
WORKDIR /app
COPY ./*.json ./
RUN npm run prod

COPY . .
CMD [ "npm","run","start" ]