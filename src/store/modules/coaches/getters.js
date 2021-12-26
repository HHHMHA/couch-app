export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state, getters) {
    return getters.coaches.length > 0;
  },
}
