<template>
  <div class="box">
    <HistoryComponent></HistoryComponent>
    <div class="navigate" @click="$router.push('/start')">
      <p>Powrót do strony głównej</p>
    </div>
  </div>
</template>

<script>
import HistoryComponent from "../components/HistoryComponent";
export default {
  components: {
    HistoryComponent
  }
};
</script>

<style scoped lang="scss">
.box {
  flex-direction: column;
  justify-content: center;

  .navigate {
    margin-top: 30px;
  }
}
</style>