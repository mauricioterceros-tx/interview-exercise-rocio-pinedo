import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    registeredStudents: []
  },
  mutations: {
    addStudent: (state, student) => {
      state.registeredStudents.push(student);
    }
  },
  actions: {
    addStudent: ({commit}, student) => {
      commit("addStudent", student);
    }
  },
  getters: {
    registeredStudents: state => state.registeredStudents
  }
});
