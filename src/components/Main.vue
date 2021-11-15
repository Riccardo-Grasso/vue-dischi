<template>
  <div class="main">
    <div class="container">
      <AlbumsContainer></AlbumsContainer>
    </div>
  </div>
</template>

<script>
import "@/components/AlbumsContainer.vue";

export default {
  name: "Main",
};
</script>

<style lang="sass" scoped>
@import "@/styles/main"
</style>