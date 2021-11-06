<template>
  <div class="limiter">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "styles/variables.scss";
// 506314609
// global style reset
html {
  font-size: 16px;
}

body {
  height: 100%;
  background: linear-gradient(-135deg, $pink-4, $blue-4);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style-type: none;
  font-family: "Poppins", "sans-serif";
  letter-spacing: 0.5px;
  line-height: 2;
}
a {
  text-decoration: none;
  color: inherit;
  &:hover {
    color: inherit;
  }
}

.limiter {
  width: 100%;
  margin: 0 auto;
  .container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 15px;
  }
  .navigate {
    margin-bottom: 50px;
    background: $blue-4;
    padding: 10px;
    color: antiquewhite;
    border-radius: 7px;
    opacity: 0.8;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
}
</style>





