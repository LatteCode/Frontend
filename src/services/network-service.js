import axios from "axios";

const API_URL = "http://server.jaram.net:5905/";

class NetWorkService {
  getServerTime() {
    return axios.get(API_URL + "lorem/ipsum").then((response) => {
      return response.data;
    });
  }
}
export default new NetWorkService();
