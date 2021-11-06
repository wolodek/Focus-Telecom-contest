<template>
  <div class="box">
    <div class="text-wrapper">
      <p class="text">Zaraz nastąpi połączenie z konsultantem.</p>
    </div>
    <div class="animation-wrapper">
      <div class="icon pulsuate"></div>
    </div>
  </div>
</template>

<script>
import ViewManager from "../services/ViewManager";
export default {
  mounted() {
    const callsId = this.$route.params.callsId;
    const number = this.$route.params.number;
    this.$store.dispatch("addCall", {
      id: callsId,
      number: number,
      time: 0,
      status: ""
    });
    ViewManager.checkStatus(callsId);
  }
};
</script>

<style scoped lang="scss">
.box {
  flex-direction: column;
  .text-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    .text {
      padding-top: 25%;
      font-size: 35px;
      font-weight: 800;
    }
  }
  .animation-wrapper {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    display: inline-block;
    width: 200px;
    height: 200px;
    background-size: cover;
    background-image: url(../assets/phone-ringing.svg);
  }
  .pulsuate {
    animation: pulse 1s linear infinite both;
  }
}
@keyframes pulse {
  from {
    transform: scale(1);
    transform-origin: center center;
  }

  10% {
    transform: scale(0.91);
  }

  17% {
    transform: scale(0.98);
  }

  33% {
    transform: scale(0.87);
  }

  45% {
    transform: scale(1);
  }
}
</style>
