import axios from "axios";

const api = {
  BasicRequest(url) {
    try {
      return axios.get(url, {
        auth: {
          username: 1,
          password: ""
        }
      });
    } catch (error) {
      console.error(error);
    }
  },

  parseResponse(res) {
    const isSuccess = res["isSuccess"];
    const errorCode = res["errorCode"];
    const errorMessage = res["errorMessage"];
    const data = res;
    const timestamp = res["timestamp"];

    if (isSuccess && isSuccess === false) {
      throw `Request Fail. Try again later.\n${errorCode} : ${errorMessage} - ${timestamp}`;
    }
    if (errorCode && (errorCode === 200 || errorCode === 201)) {
      throw `${errorCode} : ${errorMessage} - ${timestamp}`;
    }
    return data;
  }
};

export default api;
