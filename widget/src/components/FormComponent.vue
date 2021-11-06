<template>
  <form @submit.prevent="submit">
    <div
      class="form-group"
      :class="{ 'form-group--error': (submitStatus === 'ERROR' && v$.number.$error) || !v$.number.numeric || !v$.number.maxLength}"
    >
      <input class="form__input" v-model.trim="v$.number.$model" />
    </div>
    <div
      class="error"
      v-if="submitStatus === 'ERROR' && !v$.number.required"
    >Pole nie może być puste!</div>
    <div class="error" v-if="!v$.number.numeric">Numer musi składać się wyłącznie z cyfr.</div>
    <div
      class="error"
      v-if="(submitStatus === 'ERROR' && !v$.number.minLength) || !v$.number.maxLength"
    >Numer musi składać się z 9 cyfr.</div>
    <CallButtonComponent @click="submit()" :disabled="submitStatus === 'PENDING'" />
    <p class="typo__p" v-if="submitStatus === 'OK'">Dziękujemy za podanie numeru!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Uzupełnij wymagane pole!</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Walidacja numeru....</p>
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import {
  required,
  minLength,
  maxLength,
  numeric
} from "@vuelidate/validators";
import CallButtonComponent from "./CallButtonComponent";
import CallService from "../services/CallService";
export default {
  components: {
    CallButtonComponent
  },
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      number: "",
      submitStatus: null
    };
  },
  validations() {
    return {
      number: {
        numeric,
        required,
        minLengthValue: minLength(9),
        maxLengthValue: maxLength(9)
      }
    }
  },
  methods: {
    submit() {
      this.v$.$touch();
      if (this.v$.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        CallService.call(this.number, this.$router);
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.form-group {
  display: flex;
  justify-content: center;
  .form__input {
    height: 2rem;
    padding-left: 10px;
    font-size: 16px;
    border: 1px solid mediumblue;
    border-radius: 10px;
    width: 70%;
    &:focus {
      outline: 0;
    }
  }
}

.form-group--error {
  animation-name: shakeError;
  animation-fill-mode: forwards;
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
  .form__input {
    border: 1.5px solid orange !important;
  }
}
@keyframes shakeError {
  0% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(0.375rem);
  }
  30% {
    transform: translateX(-0.375rem);
  }
  45% {
    transform: translateX(0.375rem);
  }
  60% {
    transform: translateX(-0.375rem);
  }
  75% {
    transform: translateX(0.375rem);
  }
  90% {
    transform: translateX(-0.375rem);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
