FROM node:18-slim

WORKDIR /client

# add '/app/node_modules/.bin' to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install application dependencies
COPY package*.json ./

# install pnpm then run install
RUN npm install pnpm -g
RUN pnpm install --silent

# copy app files
COPY . .

EXPOSE 3000
CMD ["pnpm", "dev"]