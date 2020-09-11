import IUser from './IUser';
import IClient from './IClient';

export default interface IPipedriveAPIResponse {
  success: boolean;
  data: [PipedriveData]
}

export interface PipedriveData {

  id: number,
  creator_user_id: IUser;
  person_id: IClient,
  title: string,
  value: number,
  currency: string,
  add_time: string,
  update_time: Date,
  stage_change_time: Date,
  active: boolean,
  deleted: boolean,
  status: string,
  probability: null,
  close_time: Date,
  won_time: Date,
  first_won_time: Date,
  products_count: number,
  files_count: number,
  notes_count: number,
  followers_count: number,
  email_messages_count: number,
  activities_count: number,
  done_activities_count: number,
  undone_activities_count: number,
  participants_count: number,
  expected_close_date: Date,
  person_name: string,
  formatted_value: string,
  weighted_value: number,

}