<template>
  <div>
    <table class="center">
      <tr>
        <th>Age</th>
        <th>Name</th>
        <th>Delete</th>
      </tr>
      <tr class="center" v-for="item in this.notes" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.detail }}</td>
        <td><i v-on:click="deleteNote(item.id)" class="fa-solid fa-xmark"></i></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { API } from "aws-amplify";
import { deleteNote } from "../graphql/mutations";


export default {
  name: "NoteList",
  props: {
    notes: [Array, Object],
  },
  data() {
    return {
    };
  },
  methods: {
    async deleteNote(id) {
      //const vari = { id };
      //console.log(vari.id)
      await API.graphql({
        query: deleteNote,
        variables: {id},
      });
      this.$parent.getNotes();
    },
    // async getNotes() {
    //   const notes = await API.graphql({
    //     query: getNotes,
    //   });
    //   this.notes = notes.data.getNotes.items;
    // },
  },
};
</script>
<style scoped>
table {
  border-collapse: collapse;
  width: 50%;
  margin: auto;
}

td,
th,
i {
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
