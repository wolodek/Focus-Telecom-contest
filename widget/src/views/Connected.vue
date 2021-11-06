<template>
  <div class="box">
    <p>Połączenie w toku.</p>
    <p>Czas trwania rozmowy:</p>
    <span>{{time}}</span>
  </div>
</template>
<script>
export default {
  mounted() {
    this.internal = setInterval(() => {
      this.time++;
    }, 1000);
  },
  data() {
    return {
      time: 0,
      internal: null
    };
  },
  destroyed() {
    clearInterval(this.internal);
    const id = this.$route.params.callsId;
    this.$store.dispatch("updateCallTime", { id: id, time: this.time });
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";
.box {
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p {
    margin-bottom: 60px;
    font-size: 35px;
  }
  span {
    text-align: center;
    font-size: 35px;
    color: $white-2;
    border-radius: 60px;
    width: 120px;
    height: 120px;
    background-color: $pink-3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>