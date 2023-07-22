import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'


export default createStore({
  state: {
    unlocked: false,
    unlockError: false,
    encryptionKey: 'welcometomyportfolio',
    viewing: 'all',
  },
  getters: {},
  mutations: {
    passwordCheck(state, password) {
      if (password === state.encryptionKey) {
        state.unlocked = true;
      } else {
        setTimeout(() => {
          state.unlockError = true;
        }, 1000);
      }
    },
    setViewing(state, viewing) {
      if (viewing === 'ux') {
        state.viewing = 'ux';
      }
    },
    unlock(state) {
      state.unlocked = true;
    },
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
  }),
  ],
});
