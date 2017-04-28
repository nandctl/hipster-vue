import Vue from 'vue';
import Vuex from 'vuex';
import createSagaPlugin from 'vuex-redux-saga';
const sagaPlugin = createSagaPlugin();
import demoSaga from './sagas';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    incrementCounter(state) {
      state.counter += 1;
    },
    decrementCounter(state) {
      state.counter -= 1;
    },
  },
  plugins: [sagaPlugin],
});

sagaPlugin.run(demoSaga);

export default store;
