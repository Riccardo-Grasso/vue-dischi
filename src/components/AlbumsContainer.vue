<template>
  <div>
    <div class="row row-cols-5 gy-4 gx-5 pt-5">
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
    <Loader v-if="loading === true"></Loader>
  </div>
</template>

<script>
import axios from "axios";
import AlbumCard from "@/components/AlbumCard.vue";
import Loader from "@/components/Loader.vue";

export default {
  name: "AlbumsContainer",
  components: { AlbumCard, Loader },
  data() {
    return {
      albumList: [],
      loading: true,
    };
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((resp) => {
        console.log(resp.data.response);
        this.albumList = resp.data.response;
        setTimeout(() => {
          this.loading = false;
        }, 800);
      });
  },
};
</script>

<style lang="sass">
@import "@/styles/albumcontainer"
</style>