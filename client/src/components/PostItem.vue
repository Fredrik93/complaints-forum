<template>
  <b-list-group-item :style="{ title: post.title }">
    {{ post.title}} has text : {{ post.text }}
    <b-button type="button" class="close" @click="$emit('delete-post', post._id)">&times;</b-button>
  </b-list-group-item>
</template>

<script>
export default {
  name: 'post-item',
  props: ['post']
}
</script>
