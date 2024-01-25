<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/students">Students</RouterLink>
        <RouterLink to="/teachers">Teachers</RouterLink>
      </nav>
    </div>
    <div>
      UserName
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: rgb(241, 241, 241);
  padding: 15px;
}

.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
}
</style>
