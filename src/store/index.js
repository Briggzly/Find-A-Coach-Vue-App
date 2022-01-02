import Vuex from 'vuex';
import coachesModule from './modules/coaches/index.js';

const store = new Vuex.Store({
  modules: {
    coaches: coachesModule,
  },
});

export default store;
