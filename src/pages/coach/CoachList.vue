<template>
  <section>
    <coach-filter @change-filter='setFilters'></coach-filter>
  </section>
  <section>
    <base-card>
      <div class='controls'>
        <base-button mode='outline'>Refresh</base-button>
        <base-button to='/register' link v-if='!isCoach'></base-button>
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
import { getCoaches, hasCoaches, isCoach } from '@/store/modules/coaches/constants';
import CoachItem from '@/components/coaches/CoachItem';
import CoachFilter from '@/components/coaches/CoachFilter';

export default {
  name: 'CoachList',
  components: [
    CoachItem,
    CoachFilter
  ],
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      }
    };
  },
  computed: {
    ...mapGetters({
      hasCoaches: hasCoaches,
      isCoach: isCoach,
    }),
    filteredCoaches() {
      const coaches = this.$store.getters[getCoaches];
      return coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }

        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }

        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }

        return false;
      });
    }
  },
  methods: {
    setFilters(filters) {
      this.activeFilters = filters;
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
