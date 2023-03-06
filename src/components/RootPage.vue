<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This project is basic UI for exposing data from our graphql backend,<br>
      which is defined at
      <a href="https://github.com/ahmetsoykan/cdk-graphql-backend-demo" target="_blank" rel="noopener">here</a>.
    </p>
    <div class="border-lighter flex items-center">
      <input v-model="detail" size=40 placeholder="details" />
      <input v-on:click="createNote" class="submit" type="submit" value="Add This Too"></div>
    <br>
    <h3>We're storing your notes here:</h3>
    <br>
    <NoteList :notes="this.notes"/>
  </div>
</template>

<script>
import { API } from "aws-amplify";
import NoteList from './NoteList.vue';
import { createNote } from "../graphql/mutations";
import { getNotes } from "../graphql/queries";

export default {
  name: 'RootPage',
  async created() {
    this.getNotes();
  },
  props: {
    msg: String
  },
  components: {
    NoteList
  },
  data() {
    return {
      detail: "",
      notes: [String, Object],
    };
  },
  methods: {
    async createNote() {
      const { detail } = this;
      if (!detail) return;
      const note = { detail };
      await API.graphql({
        query: createNote,
        variables: { input: note },
      });
      this.detail = "";
      this.getNotes();
    },
    async getNotes() {
      const notes = await API.graphql({
        query: getNotes,
      });
      this.notes = notes.data.getNotes.items;
    },
  },
}
</script>

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
