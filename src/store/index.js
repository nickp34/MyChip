import Vue from 'vue';
import Vuex from 'vuex';

import GameStoreModule from '@/store/GameStoreModule';

const game = new GameStoreModule();

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    game,
  },
  strict: process.env.NODE_ENV !== 'production',
});
