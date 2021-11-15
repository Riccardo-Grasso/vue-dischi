<template>
  <main class="main">
    <div class="container">
      <AlbumsContainer></AlbumsContainer>
    </div>
  </main>
</template>

<script>
import AlbumsContainer from "@/components/AlbumsContainer.vue";

export default {
  name: "Main",
  components: { AlbumsContainer },
};
</script>

<style lang="sass" scoped>
@import "@/styles/main"
</style>