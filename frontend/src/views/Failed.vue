<template>
  <div class="box">
    <span>Wystąpił błąd podczas nawiązywania połączenia</span>
    <div>
      <img class="phone" src="../assets/sad-face-phone.png" alt />
    </div>
    <div class="navigate" @click="$router.push('/start')">
      <p>Wróć do strony głównej i sporóbuj ponownie</p>
    </div>
  </div>
</template>

<script>
import ViewManager from "../services/ViewManager";
export default {
  mounted() {
    ViewManager.stopListening();
    const id = this.$route.params.callsId;
    this.$store.dispatch("updateCallStatus", { id: id, status: "Błąd" });
  }
};
</script>

<style scoped lang="scss">
.box {
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  span {
    font-size: 30px;
  }
  .phone {
    max-height: 250px;
  }
}
</style>