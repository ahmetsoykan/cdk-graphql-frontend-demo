<template>
  <div id="app">
    <RootPage msg="the Notepad"/>
  </div>
</template>

<script>
import RootPage from './components/RootPage.vue'

export default {
  name: 'App',
  components: {
    RootPage,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
