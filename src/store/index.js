import { createStore } from 'vuex';

import coaches from './modules/coaches'

const store = createStore({
  modules: {
    coaches,
  },
})

export default store;
