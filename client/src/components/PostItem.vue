<template>
  <b-list-group-item :style="{ title: post.title }">
    <img alt="Avatar" src="../assets/duckie.jpeg" />
    {{ post.title}} wrote : {{ post.text }}
    <b-button type="button" class="close" @click="$emit('delete-camel', post._id)">&times;</b-button>
  </b-list-group-item>
</template>

<script>
export default {
  name: 'post-item',
  props: ['post']
}
</script>

<style >
img {
  width: 40px;
}
</style>
