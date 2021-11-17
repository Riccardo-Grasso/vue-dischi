<template>
  <div class="card align-items-center">
    <img :src="poster" class="card-img-top" alt="image" />
    <div class="card-body">
      <h4 class="card-title text-center mb-3">{{ title.toUpperCase() }}</h4>
      <div class="card-text text-center fs-5">{{ author }}</div>
      <div class="card-text text-center fs-6">{{ year }}</div>
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