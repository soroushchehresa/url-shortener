import * as express from 'express'
import helmet from 'helmet';
import * as xss from 'xss-clean';
import * as mongoSanitize from 'express-mongo-sanitize';
import * as compression from 'compression';
import * as cors from 'cors';

export default (app: express.Application) => {
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(xss());
  app.use(mongoSanitize());
  app.use(compression());
  app.use(cors());
  app.options('*', cors());
};
