export default {
  contactCoach(context, payload) {
    const newRequest = {
      email: payload.email,
      message: payload.message,
      coachId: payload.id,
      id: new Date().toISOString(),
    }

    context.commit('addRequest', newRequest);
  },
}
