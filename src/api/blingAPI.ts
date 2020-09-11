import axios from 'axios';

const blingAPI = axios.create({
  baseURL: 'https://bling.com.br/Api/v2',
  params: {
    apikey: '6aa6048c75b5e219f0fdc774dc92db5b34d389f370a384de4b0d45721e50413b7e121578'
  }

})

export default blingAPI;