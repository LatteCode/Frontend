<template>
  <div style="height:0">
    <Header :title="currentTitle"></Header>
    <div :class="'box_'+(idx+1)" :key="idx" v-for="(currentList, idx) in currentList" style="position: relative">
        <router-link :to="{ name: 'Info', params: { id: currentList } }">
            <MenuBox :imgPath="imgList[idx]" :textName="currentList"></MenuBox>
        </router-link>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import MenuBox from "../components/MenuBox";
export default {
  name: "College",
  methods : {
      getTitle_List() {
        var temp = this.$router.currentRoute.path.split("/");
        this.currentPath = decodeURI(temp[2]);
        if(this.currentPath == "교내 기관 안내") {
          this.currentTitle = "어느 대학을 찾으시나요?"
          this.currentList = this.list;
          this.defaultImg = "gigan.jpg";
        }else if(this.currentPath == "학교 주변") {
          this.currentTitle = "주변 어디를 찾으시나요?"
          this.currentList = this.list2;
          this.defaultImg = "gubean.jpg";
        }
      },
      getImg(){
        for (let i=0; i<this.currentList.length; i++) {
          try {
            require('../assets/' +this.currentList[i] +".jpg");
            this.imgList.push(this.currentList[i]+".jpg");
          } catch (e) {
            this.imgList.push(this.defaultImg);
          }
        }
      }
  },
  data (){
      return {
          list:['융합산업대학원','공학대학','소프트웨어융합대학','약학대학','과학기술융합대학','국제문화대학','언론정보대학','경상대학','디자인대학','예체능대학','사회교육원','국제교육원','창의인재원','학생회관'],
          list2:['카페','음식점'],
          imgList:[],
          currentList:[],
          currentTitle:"",
          currentPath:"",
          defaultImg:""
      };
  },
  created (){
    this.getTitle_List();
    this.getImg();
  },
  components: {
    Header,
    MenuBox
  }
}
</script>
<style scoped>
.box_1 {
  z-index: 14;
  line-height: 13em;
}
.box_2 {
  top: -40px; z-index: 13;
  line-height: 16em;
}
.box_3 {
  top: -80px; z-index: 12; 
  line-height: 16em;
}
.box_4 {
  top: -120px; z-index: 11;
  line-height: 16em;
}
.box_5 {
  top: -160px;  z-index: 10;
  line-height: 16em;
}
.box_6 {
  top: -200px; z-index: 9; 
  line-height: 16em;
}
.box_7 {
  top: -240px; z-index: 8;
  line-height: 16em;
}
.box_8 {
  top: -260px; z-index: 7;
  line-height: 16em;
}
.box_9 {
  top: -300px; z-index: 6; 
  line-height: 16em;
}
.box_10 {
  top: -340px; z-index: 5;
  line-height: 16em;
}
.box_11 {
  top: -360px; z-index: 4;
  line-height: 16em;
}
.box_12 {
  top: -400px; z-index: 3; 
  line-height: 16em;
}
.box_13 {
  top: -440px; z-index: 2;
  line-height: 16em;
}
.box_14 {
  top: -480px; z-index: 1;
  line-height: 16em;
}
</style>