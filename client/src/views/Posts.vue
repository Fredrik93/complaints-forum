<template>
  <div class="posts">
    <h1>List of Posts!</h1>
    <b-button type="button" class="createButton" @click="createCamel()">Create Camel</b-button>
    <b-list-group>
      <post-item v-for="post in posts" :key="post._id" :post="post"></post-item>
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
        .then(() => {})
    }
  },
  components: {
    PostItem
  }
}
</script>
