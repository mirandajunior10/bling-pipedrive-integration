import { Request, Response } from 'express';
import pipedriveAPI from '../api/pipedriveAPI';
import IPipedriveAPIResponse from '../interfaces/IPipedriveAPIResponse';
import IntegratePDOToBOService from '../services/IntegratePDOToBOService';
import ConsolidateDataOnMongoService from '../services/ConsolidateDataOnMongoService';

export default class IntegrateController {
  public async create(req: Request, res: Response) {
    const { data } = await pipedriveAPI.get<IPipedriveAPIResponse>('deals', {
      params: {
        status: 'won'
      }
    });


    const integrateOrdersService = new IntegratePDOToBOService();
    const consolidateDataService = new ConsolidateDataOnMongoService();

    const integratedOrders = await integrateOrdersService.execute(data)
    const consolidateData = await consolidateDataService.execute(integratedOrders)


    return res.json(integratedOrders)

  }
}
