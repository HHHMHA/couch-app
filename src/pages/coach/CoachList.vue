<template>
  <section>
    FILTER
  </section>
  <section>
    <base-card>
      <div class='controls'>
        <base-button mode='outline'>Refresh</base-button>
        <base-button to='/register' link></base-button>
      </div>

      <ul v-if='hasCoaches'>
        <coach-item v-for='coach in filteredCoaches'
                    :key='coach.id'
                    :id='coach.id'
                    :first-name='coach.firstName'
                    :last-name='coach.lastName'
                    :rate='coach.hourlyRate'
                    :areas='coach.areas'
        ></coach-item>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </base-card>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import { getCoaches, hasCoaches } from '@/store/modules/coaches/constants';
import CoachItem from '@/components/coaches/CoachItem';

export default {
  name: 'CoachList',
  components: [
    CoachItem
  ],
  computed: {
    ...mapGetters({
      hasCoaches: hasCoaches
    }),
    filteredCoaches() {
      return this.$store.getters[getCoaches];
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
