export default {
  state: {
    isApiFake: false
  },
  mutations: {
    TOGGLE_API_STATUS(state, status) {
      state.isApiFake = status;
    }
  },
  actions: {
    toggleApiStatus(context, status) {
      context.commit("TOGGLE_API_STATUS", status);
    }
  },
  getters: {
    getApiStatus(state) {
      return state.isApiFake;
    }
  }
};
