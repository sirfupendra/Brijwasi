# ------------------- Stage 1: Build Stage -----------------------------------

FROM node:21 AS frontend-builder

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm i

# ------------------ Stage 2: Final stage ------------------------------------
FROM node:21-slim

WORKDIR /app

# copy built assests and dependencies from frontend-builder stage
COPY --from=frontend-builder /app .


EXPOSE 5173


CMD ["npm", "run", "dev", "--", "--host"]


