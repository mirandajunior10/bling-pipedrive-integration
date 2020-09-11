import axios from 'axios';

const pipedriveAPI = axios.create({
  baseURL: 'https://companydomain.pipedrive.com/api/v1',
  params: {
    'api_token': '0998c5f9645d353cd10d0d385e4863dd56dfb7e8'
  }
})

export default pipedriveAPI;