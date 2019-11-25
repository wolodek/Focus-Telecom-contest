<template>
  <div class="call-wrapper">
    <div class="header">
      <h1 class="text">Zadzwonimy do Ciebie w ciągu 26 sekund.</h1>
    </div>
    <label class="form-label text" for="form-number">Wprowadź numer</label>
    <FormComponent />
    <div class="bottom-wrapper">
      <p class="history" @click="$router.push('/history')">Zobacz historie połączeń</p>
      <FakeApiComponent></FakeApiComponent>
    </div>
  </div>
</template>

<script>
import CallButtonComponent from "./CallButtonComponent";
import FormComponent from "./FormComponent";
import FakeApiComponent from "../components/FakeApiComponent";

export default {
  components: {
    CallButtonComponent,
    FormComponent,
    FakeApiComponent
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
.call-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
  .form-label {
    margin-bottom: 1rem;
    font-weight: 600;
  }
}
.bottom-wrapper {
  margin-bottom: 10px;
  margin-top: 60px;
  text-align: center;
  .history {
    font-size: 20px;
    margin-bottom: 1rem;
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
    opacity: 0.7;
    background-color: $purple;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>>

