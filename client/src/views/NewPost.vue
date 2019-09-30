<template>
  <div class>
    <div id="post">
      <h1>Create new post</h1>

      <b-container>
        <form class="postform" action="/posts">
          <b-form-input name="title" placeholder="Enter a title" id="titleId"></b-form-input>
          <b-textarea name="text" placeholder="Write your text" id="textId"></b-textarea>

          <input
            type="submit"
            id="postbtn"
            class="form-group btn-success btn-lg"
            @click="createPost()"
          />
        </form>
      </b-container>
    </div>
  </div>
</template>

<script>
import { Api } from '@/Api'

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
      var title = document.getElementById('titleId').value
      var text = document.getElementById('textId').value
      var randomPost = {
        title: title,
        text: text
      }
      Api.post('/posts', randomPost)
        .then(response => {
          this.posts.push(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style >
h1 {
  margin-bottom: 2em;
}
#post {
  margin-top: 10em;
}
#postbtn {
  margin-top: 2em;
}
.postform {
  display: block;
}
#textId {
  margin: auto;
  margin-top: 10px;
  /* width: 30em;
  height: 10em; */
}
#titleId {
  width: 30em;
  margin: auto;
}
</style>
