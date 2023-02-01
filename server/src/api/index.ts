import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import express, { Express } from 'express';

class API {
  express: Express;

  io;
  server;

  constructor() {
    this.express = express();
    this.setupMiddlewares();
    this.setupRouting();
    this.server = http.createServer();
    this.io = new Server(this.server);
  }

  private setupMiddlewares() {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
  }

  private setupRouting() {
    // this.express.use('/', router);
  }
}

export default new API();
