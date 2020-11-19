import axios from 'axios';


export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID AkPG2_qOoAClT5ZEHNH0drUHLYZkdLbL3HijUnQeWrs'
  }
});
