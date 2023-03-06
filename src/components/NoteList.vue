<template>
    <div>
      <table class="center">
        <tr>
          <th>Age</th>
          <th>Name</th>
          <th>Delete</th>
        </tr>
        <tr class="center" v-for="item in items" :key="item.id">
          <td>{{ item.age }}</td>
          <td>{{ item.first_name }}</td>
          <td><i class="fa-solid fa-xmark"></i></td>
        </tr>
      </table>
    </div>
</template>


  <script>
    export default {
      name: 'NoteList',
      data() {
        return {
          items: [
            { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
            { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
            { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
            { age: 38, first_name: 'Jami', last_name: 'Carney' }
          ]
        }
      }
    }
  </script>
<style scoped>
table {
  border-collapse: collapse;
  width: 50%;
  margin: auto;
}

td, th, i {
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>