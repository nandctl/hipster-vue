import Vue from 'vue';
import App from '@/containers/App';
import store from '@/containers/App/store';
import sagaPlugin from '@/containers/App/sagas';

new Vue({
  el: '#app',
  store,
  data: () => store.state,
  methods: {
    incrementCounter: () => store.commit('incrementCounter'),
    decrementCounter: () => store.commit('decrementCounter'),
  },
  render: h => h(App)
});
