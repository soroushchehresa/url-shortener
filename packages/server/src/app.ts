import * as express from 'express';
import routes from './routes/v1';
import setupMiddlewares from './middlewares'

const app = express();

setupMiddlewares(app);

app.use('/', routes);
app.use((_req, res) => { res.status(404).json({message: 'Method does not exist!'}) });

export default app;
