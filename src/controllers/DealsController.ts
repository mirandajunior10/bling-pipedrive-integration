import { Request, Response } from 'express';
import ListConsolidatedDataService from '../services/ListConsolidatedDataService';


export default class IntegrateController {
  public async index(req: Request, res: Response) {

    const listData = new ListConsolidatedDataService();

    const mongoData = await listData.execute()

    return res.json(mongoData)

  }
}
