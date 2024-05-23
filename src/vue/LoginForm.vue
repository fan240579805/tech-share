<template>
  <form @submit.prevent="handleSubmit">
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" />
    <br />
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" />
    <br />
    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log("Email:", this.email, "Password:", this.password);
    },
  },
};
</script>
