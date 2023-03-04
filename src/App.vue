<template>
  <div id="app">
    <h1>Note Taking App</h1>
    <input type="text" v-model="detail" placeholder="add here details" />
    <button v-on:click="createNote">Create Note</button>
    <div v-for="item in notes" :key="item.id">
      <p>{{ item.detail }}</p>
    </div>
  </div>
</template>

<script>
import { API } from "aws-amplify";
import { createNote } from "./graphql/mutations";
import { getNotes } from "./graphql/queries";

export default {
  name: "App",
  async created() {
    this.getNotes();
  },
  data() {
    return {
      name: "",
      detail: "",
      notes: [],
    };
  },
  methods: {
    async createNote() {
      const { detail } = this;
      if (!detail) return;
      const note = { detail };
      this.notes = [...this.notes, note];
      await API.graphql({
        query: createNote,
        variables: { input: note },
      });
      this.detail = "";
    },
    async getNotes() {
      const notes = await API.graphql({
        query: getNotes,
      });
      this.notes = notes.data.getNotes.items;
    },
  },
};
</script>
