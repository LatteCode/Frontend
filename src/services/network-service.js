import axios from "axios";

const API_URL = "http://server.jaram.net:5905/";
// const API_TEST = "http://foolminecraft.iptime.org:9999/";

class NetWorkService {
  getServerTime() {
    return axios.get(API_URL + "lorem/ipsum").then((response) => {
      return response.data;
    });
  }
  //   handleResponse(response) {
  //     if (response.status !== 200) {
  //       const error = response.data;
  //       return Promise.reject(error);
  //     }
  //     return Promise.resolve(response);
  //   }
}
export default new NetWorkService();
