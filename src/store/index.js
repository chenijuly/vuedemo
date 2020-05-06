import Vue from "vue";
import Vuex from "vuex";
import common from "./modules/common";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  //   count: 0
  // },
  // mutations: {
  //   SET_COUNT: (state, value = 1) => {
  //     state.count += value;
  //   }
  // },
  actions: {
    // 复杂业务逻辑
    asyncAdd({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit("SET_COUNT");
          resolve({ ok: 1 });
        }, 1000);
      });
    }
  },
  modules: {
    common
  },
  getters
});
