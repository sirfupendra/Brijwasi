# Stage 1
FROM node:21 AS backend-builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Stage 2
FROM node:21-slim

WORKDIR /app

 # copy the above stage as compressed

COPY --from=backend-builder /app .

EXPOSE 5000

CMD ["npm", "start"]

