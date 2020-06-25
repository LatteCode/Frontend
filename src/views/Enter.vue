<template>
  <div class="content">
    <h1 class="h1_font">가이드하냥이</h1>
    <a class="a_color">복잡한 학교정보</a><br />
    <a class="a_color">이제 부터 저희가 해결해 드릴께요.</a><br />
    <img src="../assets/big_hanyang.png" class="hanyang_img"  alt="이미지"/>
    <img src="../assets/arrow.svg" class="arrow_img"  alt="이미지"/>
  </div>
</template>

<script>
export default {
  name: "Enter",
  components: {},
  created() {
    setTimeout(() => this.$router.push({ path: "/home" }), 3000);
  }
};
</script>

<style scoped>
.h1_font {
  font-size: 2em;
  color: rgb(82, 178, 207);
}
.a_color {
  color: rgb(70, 161, 189);
}

.content {
  margin: 2em;
}
.hanyang_img {
  display: block;
  width: 50%;
  margin: 10em auto 0;
}
.arrow_img {
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 2em;
}
</style>
