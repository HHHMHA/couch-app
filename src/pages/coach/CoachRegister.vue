<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data='saveCoach'></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '@/components/coaches/CoachForm';
import { registerCoach } from '@/store/modules/coaches/constants';

export default {
  name: 'CoachRegister',
  components: [
    CoachForm,
  ],
  methods: {
    saveCoach(coachData) {
      this.$store.dispatch(registerCoach, coachData);
      this.$router.replace('/coaches')
    },
  },
};
</script>

<style scoped>

</style>
