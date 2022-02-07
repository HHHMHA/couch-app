<template>
  <form @submit.prevent='submit'>
    <div class='form-control' :class='{invalid: !valid.email}'>
      <label for='email'>Your E-mail</label>
      <input type='email' v-model='form.email.trim' id='email'>
      <p v-if='!valid.email'>Enter a valid email</p>
    </div>
    <div class='form-control' :class='{invalid: !valid.message}'>
      <label for='message'>Message</label>
      <textarea v-model='form.message.trim' id='message' rows='5'></textarea>
      <p v-if='!valid.message'>message must not be empty</p>
    </div>
    <div class='actions'>
      <base-button>Send Message</base-button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'CoachContact',
  data() {
    return {
      form: {
        email: '',
        message: '',
      },
      valid: {
        email: true,
        message: true,
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
      this.form.email = true;
      if (this.form.email === '' || !this.form.email.includes('@')) {
        this.valid.email = false;
      }

      this.form.message = true;
      if (this.form.message === '') {
        this.valid.message = false;
      }
    },
    submit() {
      this.validateForm();

      if (!this.isValid)
        return;
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
