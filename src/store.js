import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: [],
    maxId: 0
  },
  mutations: {
    addList(state, payload) {
      state.lists.push({
        title: payload.title,
        id: state.maxId + 1,
        listId: payload.listId
      });
      state.maxId++;
    },
    removeAt(state, payload) {
      state.lists = state.lists.filter(value => value.id !== payload.id);
    }
  },
  actions: {},
  getters: {
    itemsBy: state => id => {
      return state.lists.filter(value => value.listId == id);
    }
  }
});
