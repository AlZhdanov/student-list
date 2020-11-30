import express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./config/routes";
import swaggerUi = require('swagger-ui-express');
import * as swaggerDocument from "../swagger.json"

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);

    this.app.use('/api-docs', swaggerUi.serve,
      swaggerUi.setup(swaggerDocument))
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;