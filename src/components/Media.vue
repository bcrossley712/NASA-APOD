<template>
  <img v-if="media.media_type == 'image'" :src="media.url" alt="" />
  <iframe v-else :src="media.url" frameborder="0"></iframe>
</template>

<script>
export default {
  props: {
    media: {
      type: Object,
    },
  },
  // setup(props) {
  //   return{

  //   }
  // },
};
</script>

<style>
</style>