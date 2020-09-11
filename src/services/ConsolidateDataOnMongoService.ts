import { getMongoRepository, MongoRepository } from 'typeorm';

import ConsolidatedData from '../entities/ConsolidatedData';



export default class ConsolidateDataOnMongoService {
  private mongoRepository: MongoRepository<ConsolidatedData>;
  constructor() {
    this.mongoRepository = getMongoRepository(ConsolidatedData);
  }

  public async execute(integratedOrders: any[]): Promise<any> {


    const consolidatedData = integratedOrders.reduce((acc, integratedOrder) => {
      let integratedOrderItem = integratedOrder.item
      let dayTotalIndex = acc.findIndex((item: any) => item.date === integratedOrderItem.add_time)

      if (dayTotalIndex > -1) {
        let dayTotal = acc[dayTotalIndex]
        dayTotal.total += integratedOrderItem.value
        acc[dayTotalIndex] = dayTotal

        return acc
      }

      let dayTotal = {
        date: integratedOrderItem.add_time,
        total: integratedOrderItem.value
      }

      acc.push(dayTotal)

      return acc



    }, [])

    console.log(consolidatedData)
    const mongoData = this.mongoRepository.create(consolidatedData)
    await this.mongoRepository.save(mongoData);


  }

}