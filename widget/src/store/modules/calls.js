export default {
  state: {
    calls: []
  },
  mutations: {
    ADD_CALL(state, payload) {
      state.calls.push(payload);
    },
    UPDATE_CALL_STATUS(state, payload) {
      const rest = state.calls.map(call => {
        if (call.id == payload.id) {
          call.status = payload.status;
        }
        return call;
      });
      state.calls = rest;
    },
    UPDATE_CALL_TIME(state, payload) {
      const rest = state.calls.map(call => {
        if (call.id == payload.id) {
          call.time = payload.time;
        }
        return call;
      });
      state.calls = rest;
    }
  },
  actions: {
    addCall(context, call) {
      context.commit("ADD_CALL", call);
    },
    updateCallStatus(context, payload) {
      context.commit("UPDATE_CALL_STATUS", payload);
    },
    updateCallTime(context, payload) {
      context.commit("UPDATE_CALL_TIME", payload);
    }
  },
  getters: {
    getCalls(state) {
      return state.calls;
    },
    getCallsLength(state) {
      return state.calls.length;
    }
  }
};
