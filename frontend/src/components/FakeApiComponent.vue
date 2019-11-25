<template>
  <div class="fake-wrapper">
    <div class="form-check" v-tooltip="tooltipContent">
      <label class="checkbox-label">
        <input
          @click="toggleApi()"
          v-bind:class="{ checked: isApiFake }"
          type="checkbox"
          name="check"
          class="but"
        />
        <span class="label-text">Fake Api</span>
      </label>
    </div>
    <div class="numbers" v-if="isApiFake">
      <p>Wpisz jeden z podanych numerów:</p>
      <p>555555555 - status odebrane</p>
      <p>222222222 - status odrzucone</p>
    </div>
  </div>
</template>

<script>
import ToggleFakeApiService from "../services/ToggleFakeApiService";
export default {
  mounted: async function() {
    this.isApiFake = await ToggleFakeApiService.getStatus();
  },
  methods: {
    async toggleApi() {
      this.isApiFake = !this.isApiFake;
      const status = await ToggleFakeApiService.toggle(this.isApiFake);
      this.$store.dispatch("toggleApiStatus", status);
    }
  },
  data() {
    return {
      isApiFake: false,
      tooltipContent:
        "Za pomocą fake'owego Api mozna sprawdzić działanie frontu aplikacji bez konieczności posiadania danych logowania"
    };
  }
};
</script>

<style>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

.numbers {
  margin-bottom: 50px;
}

.checkbox-label {
  position: relative;
  cursor: pointer;
  color: #666;
  font-size: 30px;
}

input[type="checkbox"],
input[type="radio"] {
  position: absolute;
  right: 9000px;
}

/*Check box*/
.but + .label-text:before {
  content: "\f096";
  font-family: "FontAwesome";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  width: 1em;
  display: inline-block;
  margin-right: 5px;
}

.checked + .label-text:before {
  content: "\f14a";
  color: #2980b9;
  animation: effect 250ms ease-in;
}

.checked + .label-text {
  color: #2980b9;
}

input[type="checkbox"]:disabled + .label-text:before {
  content: "\f0c8";
  color: #ccc;
}

@keyframes effect {
  0% {
    transform: scale(0);
  }
  25% {
    transform: scale(1.3);
  }
  75% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}
.tooltip {
  display: block !important;
  z-index: 10000;
  max-width: 320px;
}

.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: black;
  z-index: 1;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 5px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: rgba(22, 17, 68, 0.199);
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, 0.1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.15s, visibility 0.15s;
}

.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}
</style>