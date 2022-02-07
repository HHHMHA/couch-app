<template>
  <form @submit.prevent='submit'>
    <div class='form-control' :class='{invalid: !valid.firstName}'>
      <label for='firstname'>Firstname</label>
      <input type='text' id='firstname' v-model='form.firstName'>
      <p v-if='!valid.firstName'>First name must not be empty</p>
    </div>

    <div class='form-control' :class='{invalid: !valid.lastName}'>
      <label for='lastname'>Lastname</label>
      <input type='text' id='lastname' v-model='form.lastName'>
      <p v-if='!valid.lastName'>Last name must not be empty</p>
    </div>

    <div class='form-control' :class='{invalid: !valid.description}'>
      <label for='description'>Description</label>
      <textarea rows='5' id='description' v-model='form.description'></textarea>
      <p v-if='!valid.description'>Description must not be empty</p>
    </div>

    <div class='form-control' :class='{invalid: !valid.rate}'>
      <label for='rate'>Hourly Rate</label>
      <input type='number' id='rate' v-model.number='form.rate'>
      <p v-if='!valid.rate'>Rate must be at least 1</p>
    </div>

    <div class='form-control' :class='{invalid: !valid.description}'>
      <h3>Areas of Expertise</h3>
      <div>
        <div>
          <input type='checkbox' id='frontend' value='frontend' v-model='form.areas'>
          <label for='frontend'>Frontend</label>
        </div>
        <div>
          <input type='checkbox' id='backend' value='backend' v-model='form.areas'>
          <label for='backend'>Backend</label>
        </div>
        <div>
          <input type='checkbox' id='career' value='career' v-model='form.areas'>
          <label for='career'>Career</label>
        </div>
      </div>
      <p v-if='!valid.areas'>Please select at least one expertise</p>
    </div>
    <p v-if='isValid'>Please fix the above errors</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  name: 'CoachForm',
  emits: [
    'save-data',
  ],
  date() {
    return {
      form: {
        firstName: '',
        lastName: '',
        description: '',
        rate: 0,
        areas: []
      },
      valid: {
        firstName: true,
        lastName: true,
        description: true,
        rate: true,
        areas: true,
      },
    };
  },
  computed: {
    isValid() {
      return !Object.values(this.valid).includes(false);
    },
  },
  methods: {
    validateForm() {
      this.form.firstName = true;
      if (this.form.firstName === '') {
        this.valid.firstName = false;
      }

      this.form.lastName = true;
      if (this.form.lastName === '') {
        this.valid.lastName = false;
      }

      this.form.description = true;
      if (this.form.description === '') {
        this.valid.description = false;
      }

      this.form.rate = true;
      if (!this.form.rate || this.form.rate < 0) {
        this.valid.description = false;
      }

      this.form.areas = true;
      if (this.form.areas.length === 0) {
        this.valid.description = false;
      }
    },
    submit() {
      this.validateForm();

      if (!this.isValid)
        return;

      this.$emit('save-data', this.form);
    }
  }
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>