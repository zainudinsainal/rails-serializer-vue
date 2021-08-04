import { createStore } from 'vuex'
import MusicianStore from './modules/musician_store';

const store = createStore({
  modules: {
    MusicianStore
  }
});

export default store;
