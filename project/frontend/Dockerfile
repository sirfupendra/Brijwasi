
FROM node:21

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm i

# currently not here: COPY .env.sample .env.local


EXPOSE 5173


CMD ["npm", "run", "dev", "--", "--host"]


