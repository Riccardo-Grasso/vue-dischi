<template>
  <div class="card">
    <img src="poster" class="card-img-top" alt="image" />
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <div class="card-text">{{ author }}</div>
      <div class="card-text">{{ year }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumCard",
  props: ["poster", "title", "author", "year"],
};
</script>