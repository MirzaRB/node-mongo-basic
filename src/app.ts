import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { connectDb } from './config/db';
import { Routes } from './interfaces';
import swaggerSpec from './config/swagger'
import * as swaggerUi from 'swagger-ui-express'
import errorMiddleware from './middlewares/error.middleware';
import loggerMiddleware from './middlewares/logger.middleware';

class App {
  static app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    App.app = express();
    this.env = process.env.NODE_ENV || 'development';
    this.port = process.env.PORT || 3000;
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorHandling();
  }

  public listen() {
    try {
      App.app.listen(this.port, async () => {
        console.log(`Server is running on port ${this.port}`);
        await connectDb();
      });
    } catch (error) {
      console.log(error);
    }
  }

  public getServer() {
    return App.app;
  }

  private initializeMiddlewares() {
    App.app.use(loggerMiddleware);
    App.app.use(cors({ origin: '*' }));
    App.app.use(helmet());
    App.app.use(express.json());
    App.app.use(express.urlencoded({ extended: true }));
    App.app.use(`/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      App.app.use('/', route.router);
    });
  }

  private initializeErrorHandling() {
    App.app.use(errorMiddleware);
  }
}

export default App;
