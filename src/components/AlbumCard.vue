<template>
  <div class="card">
    <img :src="poster" class="card-img-top" alt="image" />
    <div class="card-body">
      <h3 class="card-title text-center">{{ title.toUpperCase() }}</h3>
      <div class="card-text text-center">{{ author }}</div>
      <div class="card-text text-center">{{ year }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumCard",
  props: {
    poster: String,
    title: String,
    author: String,
    genre: String,
    year: String,
  },
};
</script>

<style lang="sass">
@import "@/styles/albumcard.scss"
</style>