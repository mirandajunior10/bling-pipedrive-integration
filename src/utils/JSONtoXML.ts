import xmlbuilder from 'xmlbuilder'
import { PipedriveData } from '../interfaces/IPipedriveAPIResponse';

export default function (pipeDriveData: PipedriveData): string {
  const [parsedDate,] = pipeDriveData.add_time.split(' ')


  var blingOrder = {

    pedido: {
      data: {
        '#text': pipeDriveData.add_time
      },
      cliente: {
        nome: { '#text': pipeDriveData.person_name },
        fone: { '#text': pipeDriveData.person_id.phone[0].value },
        email: { '#text': pipeDriveData.person_id.email[0].value },
      },
      itens: {
        item: {
          codigo: { '#text': 1 },
          qtde: { '#text': 1 },
          vlr_unit: { '#text': pipeDriveData.value }
        }
      }
    }
  }

  const xml = xmlbuilder.create(blingOrder).end({ pretty: true });
  return xml

}