## How to setup the development environment

This document will guide you through the setup process of this project. Please follow all steps in this document, each step is designed to be repeatable in any environment.

## Forking and Cloning the project

To contribute to the project, you need to create a fork of the project, which is essentially your own copy of the project.

Then you need to clone your version of the project to your computer, using the command line or any Git client (such as Github Desktop).

I suggest reading the [Github's guide on forking projects.](https://guides.github.com/activities/forking/)

## Visual Studio Code Setup

It is also recommended that you use Visual Studio Code as your IDE with the following extensions installed:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
- [JavaScript and Typescript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)

## Installing Docker

This project uses Docker to install and manage its dependency services (Postgres, Redis, etc.). The rest of this guide assumes you're using Docker.

Here's the official [Docker Installation Guide](https://docs.docker.com/get-docker/)

> Note You can run these services yourself on your local machine, but just make sure you update the ports in the .env file to match the ports on your local machine. You will also need to modify the run-dev.sh script to skip the docker commands

## Installing Node.js

The server is built using Node.js, a JavaScript runtime built on top of Chrome's V8 engine.

You can download it here: [https://nodejs.org/en/download/](https://nodejs.org/en/download/). The project currently supports version 16.14+.

## Setting up the environment

Run the _init-env.sh_ shell script located in the scripts folder to fully set up the development environment. This will completely skip the **Installing dependencies** and **Environment variables** steps. You can go straight to the **Running the server** step after this step.

### Prerequisites

Before anything else make sure you have installed [pnpm](https://www.npmjs.com/package/pnpm) on your system. You can verify that you have it installed by running the following command:

```
pnpm --version
```

If you don't have [pnpm](https://www.npmjs.com/package/pnpm) installed on your system, you can run the following command to install it:

```
npm install pnpm -g
```

### Running the script

Add the executions rights for all the scripts:

```
chmod +x ./scripts/*
```

Then run the init-env.sh script:

```
./scripts/init-env.sh
```

_Note that this step requires that you are using a Linux-based system._

You can now skip to the **Running the server** step! 😉

## Installing dependencies (alternative)

Open the terminal, navigate to the root directory of the project, and do the following

- Change the directory to the server directory where all server-related files are located.

```
cd server
```

- Install dependencies with pnpm. If you don't have pnpm installed, you can use npm to install it.

```
pnpm i
```

This should add a _node_modules_ directory inside the _server_ directory.

## Environment Variables (alternative)

Run the shell script _init-env.sh_ located in the scripts folder, or copy the _.env.example_ file manually and modify the .env file as needed. The .env file must be in the server directory for the server to run.

```
./scripts/init-env.sh
```

**Finally! You're done with the setup and installation, now you can run the server and start developing!**

## Running the Server

After you have set up everything above, make sure you have Docker installed and running on your machine (or your local services).

Using the Terminal, navigate back to the server directory and run the development script with the following command:

```
pnpm run dev
```

This command will start your dependencies, reset your development database, and start a hot-reload development process using ts-node-dev (restart on code changes).

### API URL

If you're using the regular Docker installation, you should be able to access the API at the URL

```
http://localhost:5000/
```

_Note that if you have reverse proxies configured on your system, the address may be different. You can change the default port assigned to the API from the .env file._

If you're using Docker Toolbox instead, you can find out what the machine's ip is by typing:

```
docker-machine ip
```

and adding :5000 to it.

The default URL should be

```
http://192.168.99.100:5000
```

### Accessing the database

You can use pgadmin to manage your database by visiting the API URL and replacing port 5000 with 54321.

Example: http://localhost:54321 or http://192.168.99.100:54321

Next, log in using the following credentials:

**Email**: test@boozebusters.net
**Password**: postgres

**Then follow these instructions:**

1.  Click "Add New Server
2.  Type "boozebusters" in the name field
3.  Click on the "Connection" tab
4.  Type "db" in the Host name/address field
5.  Type "postgres" in the Username field
6.  Type "postgres" in the password field
7.  You should now have access to the database in the left pane.
