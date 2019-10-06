<template>
  <div class="col-md">
    <div id="post">
      <h1>list of {{users.length}} users</h1>

      <h1>Create new post</h1>
      <b-container>
        <form class="postform" action="/posts">
          <b-form-input v-model="title" placeholder="Enter a title" id="titleId"></b-form-input>
          <b-form-select v-model="selectedRoomId" :options="options" id="roomSelectId">
            <template>
              <option :value="null" disabled>
                -- please select a room to post in --
              </option>
            </template>
          </b-form-select>

          <b-textarea v-model="text" placeholder="Write your text" id="textId"></b-textarea>

          <input
            type="submit"
            id="postbtn"
            class="form-group btn-success btn-lg"
            @click.stop.prevent="createPost()"
          />
        </form>
      </b-container>
    </div>
  </div>
</template>

<script>
import { Api } from "@/Api";
import UserItem from "@/components/UserItem";

export default {
  props: "users",
  name: "Posts",
  data() {
    return {
      title: '',
      text: '',
      selectedRoomId: null,
      options: [],
      posts: [],
      users: []
    };
  },
  mounted() {
    this.getUsers();
    this.getRooms();
  },
  methods: {
    getUsers() {
      Api.get("users")
        .then(response => {
          this.users = response.data.users;
        })
        .catch(error => {
          this.users = [];
          console.log(error);
        });        
    },
    getRooms() {
      Api.get("rooms")      
        .then(response => {
          response.data.rooms.forEach(room => {
            this.options.push({
              value: room._id,
              text: room.name
            });
          });
        })
        .catch(error => console.log(error));
    },
    getUser(id) {
      Api.get(`/users/${id}`)
        .then(response => {
          console.log(response.data.message);
          var index = this.users.findIndex(user => user._id === id);          
          this.users = response.data.users;
        })
        .catch(error => {
          console.log(error);
        });
    },
    deletePost(id) {
      Api.delete(`/posts/${id}`)
        .then(response => {
          console.log(response.data.message);
          var index = this.posts.findIndex(post => post._id === id);
          this.posts.splice(index, 1);
        })
        .catch(error => {
          console.log(error);
        });
    },
    //we have to use model binding instead
    //we have made it in a way that we can't rebind it
    createPost() {
      var newPost = {
        title: this.title,
        text: this.text,
        roomId: this.selectedRoomId
      };      
      Api.post(`/rooms/${this.selectedRoomId}`, newPost)
      .then(() => {
        this.$router.push("/");
      });
    }
  },
  components: {
    UserItem
  }
};
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
#usernameId {
  width: 30em;
  margin: auto;
}
#roomSelectId {
  width: 30em;
  margin: auto;
  margin-top: 10px;
}
</style>
