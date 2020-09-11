import IPipedriveAPIResponse, { PipedriveData } from "../interfaces/IPipedriveAPIResponse";
import JSONtoXML from "../utils/JSONtoXML";
import blingAPI from "../api/blingAPI";



export default class IntegratePDOToBOService {

  public async execute(data: IPipedriveAPIResponse): Promise<any> {

    const responses = await Promise.all(
      data.data.map(this.sendOrder)
    )
    console.log(responses)
    return responses
  }

  private async sendOrder(item: PipedriveData) {
    const [parsedDate,] = item.add_time.split(' ')

    item.add_time = new Date(parsedDate).toLocaleDateString('pt-BR')

    const xml = JSONtoXML(item)

    let response = await blingAPI.post('pedido/json', {}, {
      params: {
        xml
      },
    })
    return { id: item.id, response: response.data, item }

  }

}