FROM node:22-alpine

WORKDIR /headwind

COPY package.json .

RUN npm install

RUN npm install -g serve

COPY . .

RUN npm run build

EXPOSE 5137

CMD ["serve", "-s", "dist", "-l", "5137"]