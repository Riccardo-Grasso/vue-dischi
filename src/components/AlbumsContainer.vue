<template>
  <div class="pt-5">
    <FiltroGeneri
      :categoryList="categoryList"
      @badgeClick="clickGeneri"
    ></FiltroGeneri>
    <div class="row row-cols-5 gy-4 gx-5 pt-5">
      <div class="col" v-for="album in filteredAlbumList" :key="album.id">
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
import FiltroGeneri from "@/components/FiltroGeneri.vue";

export default {
  name: "AlbumsContainer",
  components: { AlbumCard, Loader, FiltroGeneri },
  data() {
    return {
      albumList: [],
      categoryList: [],
      loading: true,
      categoryFilter: "",
    };
  },
  computed: {
    filteredAlbumList() {
      if (!this.categoryFilter) {
        return this.albumList;
      }

      return this.albumList.filter((album) => {
        return this.categoryFilter === album.genre;
      });
    },
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((resp) => {
        console.log(resp.data.response);
        this.albumList = resp.data.response;
        this.albumList.forEach((elemento) => {
          if (!this.categoryList.includes(elemento.genre)) {
            this.categoryList.push(elemento.genre);
          }
        });
        setTimeout(() => {
          this.loading = false;
        }, 800);
      });
  },
  methods: {
    clickGeneri(generiToFilter) {
      console.log(generiToFilter);
      this.categoryFilter = generiToFilter;
    },
  },
};
</script>

<style lang="sass">
@import "@/styles/albumcontainer"
</style>