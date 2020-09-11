import { Router } from 'express';
import integrateRouter from './integrate.routes';
const routes = Router();

routes.use('/integrate', integrateRouter);

export default routes;
