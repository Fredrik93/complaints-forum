<template>
  <b-list-group-item :style="{ title: room.name }">
    <h3>{{ room.name}}</h3>
    <b-button type="button" class="close" @click="$emit('delete-room', room._id)">&times;</b-button>
  </b-list-group-item>
</template>

<script>
export default {
  name: 'room-item',
  props: ['room']
}
</script>

<style >
img {
  width: 40px;
}
.useravatar {
  float: left;
}
</style>
