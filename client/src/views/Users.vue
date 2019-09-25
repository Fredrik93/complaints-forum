<template>
  <div class="users">
    <h1>List of {{ users.length }} users</h1>
    <b-button type="button" class="createButton" @click="createUser()">Create User</b-button>
    <b-list-group>
      <user-item v-for="user in users" :key="user._id" :user="user" @delete-user="deleteUser"></user-item>
    </b-list-group>
  </div>
</template>

<script>
import { Api } from '@/Api'
import UserItem from '@/components/UserItem'

export default {
  name: 'Users',
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    getUsers() {
      Api.get('users')
        .then(reponse => {
          this.users = reponse.data.users
        })
        .catch(error => {
          this.users = []
          console.log(error)
        })
        .then(() => {
          // This code is always executed (after success or error).
        })
    },
    deleteUser(id) {
      Api.delete(`/users/${id}`)
        .then(response => {
          console.log(response.data.message)
          var index = this.users.findIndex(user => user._id === id)
          this.users.splice(index, 1)
        })
        .catch(error => {
          console.log(error)
        })
    },
    createUser() {
      var randomUser = {
        username: this.getRandomName(),
        age: this.getRandomInt(10)
      }
      Api.post('/users', randomUser)
        .then(response => {
          this.users.push(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * max)
    },
    getRandomName() {
      var names = ['Mike', 'Fredrik', 'Moritz', 'Pete']
      var index = this.getRandomInt(names.length)
      return names[index]
    }
  },
  components: {
    UserItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
.createButton {
  margin-bottom: 1em;
}
.users {
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 2em;
}
</style>
