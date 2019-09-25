<template>
  <div class="posts">
    <h1>List of {{posts.length}} posts</h1>
    <b-button type="button" class="createButton" @click="createPost()">Create Post</b-button>
    <b-list-group>
      <post-item v-for="post in posts" :key="post._id" :post="post" @delete-post="deletePost"></post-item>
    </b-list-group>
  </div>
</template>

<script>
import { Api } from '@/Api'
import PostItem from '@/components/PostItem'

export default {
  name: 'Posts',
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
    },
    deletePost(id) {
      Api.delete(`/posts/${id}`)
        .then(response => {
          console.log(response.data.message)
          var index = this.posts.findIndex(post => post._id === id)
          this.posts.splice(index, 1)
        })
        .catch(error => {
          console.log(error)
        })
    },
    createPost() {
      var randomPost = {
        title: this.getRandomColor(),
        text: this.getRandomInt(10)
      }
      Api.post('/posts', randomPost)
        .then(response => {
          this.posts.push(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },

    getRandomInt(max) {
      return Math.floor(Math.random() * max)
    },
    getRandomColor() {
      var colors = ['orange', 'green', 'red', 'blue']
      var index = this.getRandomInt(colors.length)
      return colors[index]
    }
  },

  components: {
    PostItem
  }
}
</script>
