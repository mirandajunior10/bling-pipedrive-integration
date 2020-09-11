export default interface IClient {
  active_flag: boolean;
  name: string;
  email: [
    {
      value: string;
      primary: boolean;
    }
  ],
  phone: [
    {
      value: string,
      primary: boolean
    }
  ],
  value: number
}