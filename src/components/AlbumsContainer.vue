<template>
  <div class="row row-cols-5 g-4">
    <div class="col" v-for="album in albumList" :key="album.id">
      <AlbumCard
        :poster="album.poster"
        :title="album.title"
        :author="album.author"
        :genre="album.genre"
        :year="album.year"
      ></AlbumCard>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AlbumCard from "@/components/AlbumCard.vue";

export default {
  name: "AlbumsContainer",
  components: { AlbumCard },
  data() {
    return {
      albumList: [],
    };
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((resp) => {
        console.log(resp.data.response);
        this.albumList = resp.data.response;
      });
  },
};
</script>