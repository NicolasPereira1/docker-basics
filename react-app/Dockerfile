FROM node:18-alpine
WORKDIR /app
COPY . .
RUN apk add bash
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
EXPOSE 3000