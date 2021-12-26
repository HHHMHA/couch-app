<template>
  <section>
    FILTER
  </section>
  <section>
    <div class='controls'>
      <button>Refresh</button>
      <router-link to='/register'>Register</router-link>
    </div>
    <ul v-if='hasCoaches'>
      <li v-for='coach in filteredCoaches' :key='coach.id'>
        {{ coach.firstName }}
      </li>
    </ul>
    <h3 v-else>No coaches found.</h3>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CoachList',
  computed: {
    ...mapGetters({
      hasCoaches: 'coaches/hasCoaches',
    }),
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
  },
};
</script>

<style scoped>

</style>
