<template>
  <div>
    <div class="img-container">
      <img :src="imgUrl" alt="기관 이미지" />
    </div>
    <div class="container">
      <h1>{{ title }}</h1>
      <list-box
        v-show="info !== '' && info !== null"
        icon-style="fa fa-info fa-2x"
        :info="info"
      ></list-box>
      <list-box
        v-show="tel !== '' && tel !== null"
        icon-style="fa fa-phone fa-2x"
        :info="tel"
      ></list-box>
      <list-box
        v-show="pos !== '' && pos !== null"
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
      const url = this.idUrl.split("/");
      const midUrl = this.getParmeter(url);
      const placeUrl = apiUrl + url[0] + "/" + midUrl + url[1];
      const data = await api.BasicRequest(placeUrl);
      const place_data = await api.parseResponse(data.data);
      const place = place_data["data"];
      this.info = place["info"];
      this.tel = place["tel"];
      this.pos = place["pos"];
    },
    getAssets() {
      const url = this.idUrl.split("/");
      this.title = `${url[1]}`;
      this.imgUrl = require(`../assets/${url[0]}.jpg`);
    },
    getParmeter(url) {
      if (url[0] === "소프트웨어융합대학") {
        if (url[1] === "창업" || url[1] === "총괄")
          return "SW중심대학행정팀?job=";
      } else if (url[0] === "예체능대학") {
        if (url[1] === "골프장") return "골프장?job=";
        else if (url[1] === "테니스장") return "테니스장?job=";
      } else if (url[0] === "공학대학") {
        if (url[1] === "공학교육인증") return "공학교육혁신센터?job=";
        else if (url[1] === "책임연구원") return "학생회실";
      } else if (url[0] === "주변기관") {
        if (
          url[1] === "카페 윈드밀" ||
          url[1] === "모모커피 안산한양대점" ||
          url[1] === "쥬씨 안산한양대점"
        )
          return "음료?job=";
        else return "식당?job=";
      }
      return "행정팀?job=";
    }
  },
  data() {
    return {
      title: "",
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
