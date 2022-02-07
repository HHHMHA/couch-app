import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      requests: [
        {
          id: 'r1',
          coachId: "c1",
          email: 'test@gmail.com',
          message: 'Dieeeeee',
        },
      ]
    };
  },
  mutations,
  actions,
  getters
};
