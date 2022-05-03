<template>
  <div class="middle">
    <div class="txt">
      <h1>WELCOME TO SILKY</h1>
      <hr><br>
      <router-link
        to="/register"
        class="button">
        Register
      </router-link>
      <router-link
        to="/login"
        class="button">
        LOGIN
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
</style>