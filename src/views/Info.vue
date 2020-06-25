<template>
  <div style="height:0">
    <Header :title="this.url"></Header>
    <div
      :class="'box_' + (idx + 1)"
      :key="idx"
      v-for="(txt, idx) in this.list"
      style="position: relative"
    >
      <router-link :to="{ name: 'Explain', params: { place: nexturl + txt } }">
        <MenuBox :imgPath="imgList[idx]" :textName="txt"></MenuBox>
      </router-link>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import MenuBox from "../components/MenuBox";

export default {
  name: "Info",
  components: {
    Header,
    MenuBox
  },
  methods: {
    getTitle_List() {
      this.nexturl = this.url + "/";
      if (this.url === "소프트웨어융합대학") {
        this.img = "소프트웨어융합대학.jpg";
        this.list = this.computer;
      } else if (this.url === "공학대학") {
        this.list = this.engineer;
        this.img = "공학대학.jpg";
      } else if (this.url === "약학대학") {
        this.list = this.medicine;
        this.img = "약학대학.jpg";
      } else if (this.url === "과학기술융합대학") {
        this.list = this.science;
        this.img = "과학기술융합대학.jpg";
      } else if (this.url === "국제문화대학") {
        this.list = this.culture;
        this.img = "국제문화대학.jpg";
      } else if (this.url === "언론정보대학") {
        this.list = this.media;
        this.img = "언론정보대학.jpg";
      } else if (this.url === "경상대학") {
        this.list = this.economy;
        this.img = "경상대학.jpg";
      } else if (this.url === "디자인대학") {
        this.list = this.design;
        this.img = "디자인대학.jpg";
      } else if (this.url === "예체능대학") {
        this.list = this.health;
        this.img = "예체능대학.jpg";
      } else if (this.url === "음식점") {
        this.list = this.food;
        this.img = "gubean.jpg";
        this.nexturl = "주변기관/";
      } else {
        this.list = this.cafe;
        this.img = "gubean.jpg";
        this.nexturl = "주변기관/";
      }
    },
    getImg() {
      for (let i = 0; i < this.list.length; i++) {
        try {
          require("../assets/" + this.list[i] + ".jpg");
          this.imgList.push(this.list[i] + ".jpg");
        } catch (e) {
          this.imgList.push(this.img);
        }
      }
    }
  },
  data() {
    return {
      url: this.$route.params.id,
      engineer: [
        "기계공학",
        "전자공학",
        "건축",
        "재료화학",
        "시설",
        "공학교육인증"
      ],
      computer: ["소프트웨어학부", "ICT융합학부", "창업", "총괄"],
      medicine: ["장학"],
      science: ["학적", "시설", "수업"],
      culture: ["장학", "수업", "성적"],
      media: ["장학", "학적"],
      economy: ["수업", "학적", "회계세무학과"],
      design: ["학적", "수업", "시설"],
      health: ["행정실", "골프장", "테니스장"],
      food: ["일미닭갈비파전", "브라더스테이크", "미스터피자 안산한대점"],
      cafe: ["카페 윈드밀", "모모커피 안산한양대점", "쥬씨 안산한양대점"],
      imgList: [],
      img: "",
      list: "",
      nexturl: ""
    };
  },
  created() {
    this.getTitle_List();
    this.getImg();
  }
};
</script>

<style scoped>
.box_1 {
  z-index: 14;
  line-height: 13em;
}
.box_2 {
  top: -40px;
  z-index: 13;
  line-height: 16em;
}
.box_3 {
  top: -80px;
  z-index: 12;
  line-height: 16em;
}
.box_4 {
  top: -120px;
  z-index: 11;
  line-height: 16em;
}
.box_5 {
  top: -160px;
  z-index: 10;
  line-height: 16em;
}
.box_6 {
  top: -200px;
  z-index: 9;
  line-height: 16em;
}
.box_7 {
  top: -240px;
  z-index: 8;
  line-height: 16em;
}
.box_8 {
  top: -260px;
  z-index: 7;
  line-height: 16em;
}
.box_9 {
  top: -300px;
  z-index: 6;
  line-height: 16em;
}
.box_10 {
  top: -340px;
  z-index: 5;
  line-height: 16em;
}
.box_11 {
  top: -360px;
  z-index: 4;
  line-height: 16em;
}
.box_12 {
  top: -400px;
  z-index: 3;
  line-height: 16em;
}
.box_13 {
  top: -440px;
  z-index: 2;
  line-height: 16em;
}
.box_14 {
  top: -480px;
  z-index: 1;
  line-height: 16em;
}
</style>
