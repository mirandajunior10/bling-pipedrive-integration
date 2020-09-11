import { Router } from 'express';
import dealsRouter from './deals.routes';
import integrateRouter from './integrate.routes';

const routes = Router();

routes.use('/integrate', integrateRouter);
routes.use('/deals', dealsRouter);

export default routes;
