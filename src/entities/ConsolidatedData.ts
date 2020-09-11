import {
  ObjectID,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn
} from 'typeorm';

@Entity('ConsolidatedData')
class ConsolidatedData {

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  date: Date;

  @Column()
  total: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}


export default ConsolidatedData
