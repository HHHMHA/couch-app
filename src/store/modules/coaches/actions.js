export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;

    const coachData = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      hourlyRate: payload.rate,
      areas: payload.areas,
      description: payload.description,
    }

    // const response = await fetch(`${baseUrl}/${userId}.json`, {
    //   method: 'PUT',
    //   body: JSON.stringify(coachData),
    // })
    // const responseDate = await response.json()
    // if ( !response.ok ) {
    //   // error
    // }

    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },
}
