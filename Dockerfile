FROM node:alpine
WORKDIR /the/workdir/path
COPY package*.json .
RUN npm ci
COPY . .
CMD ["npm", "start", "dev"]