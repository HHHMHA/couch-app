<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ selectedCoach.rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to='contactLink'>Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for='area in selectedCoach.areas' :key='area' :type='area' :title='area'></base-badge>
      <p>{{ selectedCoach.description }}</p>
    </base-card>
  </section>
</template>

<script>
import { getCoach } from '@/store/modules/coaches/constants';

export default {
  name: 'CoachDetail',
  data() {
    return {
      selectedCoach: null,
    };
  },
  props: [
    'id',
  ],
  created() {
    this.selectedCoach = this.$store.getters[getCoach](this.id);
  },
  computed: {
    fullName() {
      return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`;
    },
    contactLink() {
      return `${this.$route.path}/${this.id}/contact`;
    },
  }
};
</script>

<style scoped>

</style>
