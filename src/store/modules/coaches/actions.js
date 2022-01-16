export default {
  registerCoach(context, payload) {
    const coachData = {
      id: context.rootGetters.userId,
      firstName: payload.firstName,
      lastName: payload.lastName,
      hourlyRate: payload.rate,
      areas: payload.areas,
      description: payload.description,
    }

    context.commit('registerCoach', coachData);
  },
}
