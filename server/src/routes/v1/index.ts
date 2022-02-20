import * as express from 'express';
import urlRoute from './url';

interface RouteItem {
  path: string,
  route: express.Router,
}

const router: express.Router = express.Router();

const defaultRoutes: RouteItem[] = [
  {
    path: '/',
    route: urlRoute,
  },
];

defaultRoutes.forEach((route: RouteItem) => {
  router.use(route.path, route.route);
});

export default router;
