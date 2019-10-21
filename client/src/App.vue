<template>
  <div class="col-md" id="app">
    <div id="nav">
      <router-link to="/">Posts</router-link>|
      <router-link to="/users">Users</router-link>|
      <router-link to="/rooms">Rooms</router-link>
      <router-link
        tag="button"
        to="/newPost"
        id="newbtn"
        class="btn btn-outline-primary"
      >New post</router-link>
      <router-link
        tag="button"
        to="/newRoom"
        id="newbtn"
        class="btn btn-outline-primary"
      >New room</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#newbtn {
  float: right;
  margin-right: 0.5em;


}@media only screen and (max-width: 768px) {
  [class*='col-'] {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
    /* this would make the buttons in nav bar disappear when smaller than 768 px: 
      #newRoombtn{display:none} 
       */
}

</style>
