FROM node:18-alpine
WORKDIR /app
COPY . .
RUN apk add bash
RUN npm install
CMD ["npm", "start"]
EXPOSE 3000