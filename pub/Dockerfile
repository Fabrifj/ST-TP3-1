FROM node:16.15-alpine

RUN apk update
RUN apk add iputils
RUN apk add curl

WORKDIR /usr/src/app
COPY package.json .
COPY mqttPublisher.js .
RUN npm install
CMD ["node", "mqttPublisher.js"]