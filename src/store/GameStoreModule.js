import * as types from '@/store/mutation-types';

class GameStoreModule {
  constructor() {
    this.namespaced = true;

    this.state = {
      available: [],
      selected: [],
    };

    this.getters = {
      getAvailable: state => state.available,
      getSelected: state => state.selected,
    };

    this.actions = {
      setSelected({ commit }, selected) {
        commit(types.SET_SELECTED, selected);
      },
      setAvailable({ commit }, available) {
        commit(types.SET_AVAILABLE, available);
      },
    };

    this.mutations = {
      [types.SET_SELECTED](state, selected) {
        state.selected = selected;
      },
      [types.SET_AVAILABLE](state, available) {
        state.available = available;
      },
    };
  }
}

export default GameStoreModule;
