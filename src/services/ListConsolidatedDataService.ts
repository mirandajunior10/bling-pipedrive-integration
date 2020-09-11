import { getMongoRepository, MongoRepository } from 'typeorm';

import ConsolidatedData from '../entities/ConsolidatedData';



export default class ListConsolidatedDataService {
  private mongoRepository: MongoRepository<ConsolidatedData>;
  constructor() {
    this.mongoRepository = getMongoRepository(ConsolidatedData);
  }

  public async execute(): Promise<ConsolidatedData[]> {
    const data = await this.mongoRepository.find()
    return data


  }

}