<template>
  <base-card>
    <h2>Find Your Coach</h2>
    <span class='filter-option'>
      <input type='checkbox' id='frontend' checked v-model='filters.frontend'>
      <label for='frontend'>Frontend</label>
      <input type='checkbox' id='backend' checked v-model='filters.backend'>
      <label for='backend'>Backend</label>
      <input type='checkbox' id='career' checked v-model='filters.career'>
      <label for='career'>Career</label>
    </span>
  </base-card>
</template>

<script>
const changeFilterEvent = 'change-filter';

export default {
  name: 'CoachFilter',
  emits: [
    changeFilterEvent
  ],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  watch: {
    filters: {
      handle() {
        this.$emit(changeFilterEvent, this.filters);
      },
      deep: true
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
