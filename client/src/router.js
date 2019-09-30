import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Camels from './views/Camels.vue'
import Users from './views/Users.vue'
import Posts from './views/Posts.vue'
import NewPost from './views/NewPost.vue'
import Rooms from './views/Rooms.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/camels',
      name: 'camels',
      component: Camels
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/NewPost',
      name: 'newPost',
      component: NewPost
    },
    {
      path: '/rooms',
      name: 'room',
      component: Rooms
    }
  ]
})
