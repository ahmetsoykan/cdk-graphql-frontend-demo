<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This project is basic UI for exposing data from our graphql backend,<br>
      which is defined at
      <a href="https://github.com/ahmetsoykan/cdk-graphql-backend-demo" target="_blank" rel="noopener">here</a>.
    </p>
    <div class="border-lighter flex items-center">
      <input v-model="text" size=40 placeholder="details" />
      <input 
        class="submit" 
        type="submit" 
        value="Add This Too"
      >
    </div>
    <br>
    <h3>We're storing your notes here:</h3>
    <br>
    <NoteList/>
  </div>
</template>

<script>
import NoteList from './NoteList.vue'

export default {
  name: 'RootPage',
  props: {
    msg: String
  },
  components: {
    NoteList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
    padding: 4px 8px;
    margin: 4px;
}
.submit {
    font-size: 15px;
    color: #fff;
    background: #222;
    padding: 6px 12px;
    border: none;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 5px;
  }
</style>
