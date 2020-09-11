import { Router } from "express";

import IntegrateController from "../controllers/IntegrateController";

const integrateRouter = Router();
const integrateController = new IntegrateController()

integrateRouter.get('/', integrateController.create)

export default integrateRouter



