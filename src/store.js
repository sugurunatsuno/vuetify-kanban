import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [{ title: "test", id: 0 }],
    maxId: 0
  },
  mutations: {
    addList(state, payload) {
      state.list.push({ title: payload.title, id: state.maxId + 1 });
      state.maxId++;
    },
    removeAt(state, payload) {
      state.list = state.list.filter(value => value.id !== payload.id);
    }
  },
  actions: {},
  getters: {
    allItems(state) {
      return state.list;
    }
  }
});
