<template>
    <div class = "rooms">
        <b-jumbotron>
            <h1>Something to complain about?</h1>
        </b-jumbotron>
    </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'Rooms',
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      Api.get('posts')
        .then(response => {
          this.posts = response.data.posts
        })
        .catch(error => {
          this.posts = []
          console.log(error)
        })
        .then(() => {
          // This code is always executed (after success or error).
        })
    }
  }
}
</script>
