import Vue from 'vue';
import { mapMutations } from "vuex";

import Button from '@/components/Button';

import {
  ButtonContainer,
} from './styles';

const App = Vue.component('App', {
  methods: {
    ...mapMutations({
      incrementCounter: 'incrementCounter',
      decrementCounter: 'decrementCounter',
    }),
  },
  render() {
    const { counter } = this.$store.state;
    return (
      <div id="app">
        <ButtonContainer>
          Counter: {counter}
          <span onClick={this.incrementCounter}>
            <Button type="success">+</Button>
          </span>
          <span onClick={this.decrementCounter}>
            <Button type="danger">-</Button>
          </span>
        </ButtonContainer>
      </div>
    );
  }
});

export default App;
