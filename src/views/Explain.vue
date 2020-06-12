<template>
  <div>
    <div class="img-container">
      <img :src="imgUrl" alt="기관 이미지" />
    </div>
    <div class="container">
      <h1>{{ title }}</h1>
      <list-box
        v-show="info != null"
        icon-style="fa fa-info fa-2x"
        :info="info"
      ></list-box>
      <list-box
        v-show="tel != null"
        icon-style="fa fa-phone fa-2x"
        :info="tel"
      ></list-box>
      <list-box
        v-show="pos != null"
        icon-style="fa fa-location-arrow fa-2x"
        :info="pos"
      ></list-box>
    </div>
  </div>
</template>

<script>
import ListBox from "../components/ListBox";
import api from "../components/api";

const apiUrl = "http://server.jaram.net:5905/result/";

export default {
  name: "Explain",
  components: {
    ListBox
  },
  methods: {
    async getData() {
      const placeUrl = apiUrl + this.idUrl;
      const data = await api.BasicRequest(placeUrl);
      const place_data = await api.parseResponse(data.data);
      const place = place_data["data"];
      this.info = place["info"];
      this.tel = "031-400-" + place["tel"];
      this.pos = place["pos"];
    },
    getAssets() {
      const getName = this.idUrl.split("/");
      this.title = `${getName[1]} ${getName[2]}`;
      this.imgUrl = require(`../assets/${getName[0]}.jpg`);
      console.log(this.imgUrl);
    }
  },
  data() {
    return {
      title: require("../assets/big_hanyang.png"),
      idUrl: this.$route.params.place,
      imgUrl: "",
      info: "",
      tel: "",
      pos: ""
    };
  },
  created() {
    this.getData();
    this.getAssets();
  }
};
</script>

<style scoped>
.img-container {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 75%;
}
.img-container img {
  position: relative;
}
.container {
  position: absolute;
  top: 50%;
  width: calc(100% - 20px);
  height: calc(50% - 20px);
  background-color: white;
  border: 10px solid rgb(70, 161, 189);
  border-radius: 3.75em 3.75em 0 0;
}
.container h1 {
  color: rgb(70, 161, 189);
  position: relative;
  font-size: 1.5em;
  margin: 8% 0 3% 10%;
}
</style>
