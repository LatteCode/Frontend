<template>
  <div class="list-view">
    <i :class="iconStyle"></i>
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
  width: 90%;
}
.info-view {
  margin-left: 5%;
  font-size: 1.25em;
}
</style>
