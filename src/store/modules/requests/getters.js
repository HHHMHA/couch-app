export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state, getters) {
    return getters.coaches.length > 0;
  },
  getCoach(state, getters) {
    return (id) => getters.coaches.find(item => item.id === id);
  },
  isCoach(state, getters, rootState, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some(coach => coach.id === userId);
  }
}
