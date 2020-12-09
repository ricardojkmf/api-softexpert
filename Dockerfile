FROM node:14.11.0-alpine3.11
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 2107:2107
CMD ["node", "server.js"]