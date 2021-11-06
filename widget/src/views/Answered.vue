<template>
  <div class="box">
    <div class="left-box">
      <div class="text">
        <p>Połączenie zakończone.</p>
      </div>
      <div class="navigate" @click="$router.push('/start')">
        <p>Powrót do strony głównej</p>
      </div>
    </div>
    <div class="right-box">
      <HistoryComponent></HistoryComponent>
    </div>
  </div>
</template>
<script>
import ViewManager from "../services/ViewManager";
import HistoryComponent from "../components/HistoryComponent";

export default {
  components: {
    HistoryComponent
  },
  mounted() {
    ViewManager.stopListening();
    const id = this.$route.params.callsId;
    this.$store.dispatch("updateCallStatus", { id: id, status: "Odebrany" });
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";

.box {
  flex-direction: column;
  justify-content: flex-start;
  .left-box {
    .text {
      margin-bottom: 50px;
      margin-top: 50px;
      text-align: center;
      color: $pink-2;
    }
    .navigate {
      margin-bottom: 50px;
      background: $blue-4;
      padding: 10px;
      color: $white-2;
      border-radius: 7px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }
  .right-box {
    text-align: center;
    border-radius: 10px;
    padding: 20px;
  }

  .navigate {
    cursor: pointer;
  }
}
p {
  font-size: 25px;
  font-weight: 700;
}
</style>