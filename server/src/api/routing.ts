import express from 'express';

class RoutingHandler {
  router: express.Router;

  constructor() {
    this.router = express.Router();
    this.setupRoutes();
  }

  setupRoutes() {
    console.log('Setting routes...');
    this.router.use('');
  }
}

export default new RoutingHandler().router;
