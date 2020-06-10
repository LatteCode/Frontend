<template>
  <div class="list-view">
    <div class="list-icon-size">
      <i :class="iconStyle" style="position: relative; color: rgb(70, 161, 189); alignment: center"></i>
    </div>
    <div class="info-view">{{ info }}</div>
  </div>
</template>

<script>
export default {
  name: "list-box",
  props: {
    info: String,
    iconStyle: String
  }
};
</script>

<style scoped>
.list-view {
  display: inline-flex;
  position: relative;
  margin-left: 10%;
  margin-top: 5%;
  width: 90%;
}
.list-icon-size {
  min-width: 50px;
}
.info-view {
  font-size: 1em;
  color: rgb(70, 161, 189);
  line-height: 1.65em;
}
</style>
