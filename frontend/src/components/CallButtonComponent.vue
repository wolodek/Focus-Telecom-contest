<template>
  <div class="button-wrapper" @click="handleClick">
    <span>Zadzwoń</span>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
.button-wrapper {
  width: 80%;
  background-color: $blue-3;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 35px;
  cursor: pointer;

  transition: background-color 0.8s ease-out, color 0.4s linear,
    transform 0.6s ease;
  &:hover {
    transform: scaleY(1.05) scaleX(1.05);
    color: $white-2 !important;
    background: $pink-4;
  }
}
</style>