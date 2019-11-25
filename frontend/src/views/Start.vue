<template>
  <div class="box">
    <div class="component-wrapper">
      <LogoComponent />
    </div>
    <div class="component-wrapper">
      <CallComponent />
    </div>
  </div>
</template>

<script>
import LogoComponent from "../components/LogoComponent";
import CallComponent from "../components/CallComponent";

export default {
  name: "Start",
  components: {
    LogoComponent,
    CallComponent
  }
};
</script>
<style lang="scss">
@import "../styles/variables.scss";
.box {
  width: 960px;
  min-height: 678px;
  height: fit-content;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 10px;
  max-height: 95vh;
  padding: 0 5%;
  .component-wrapper {
    flex: 1;
  }
}
</style>
