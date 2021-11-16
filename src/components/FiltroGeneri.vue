<template>
  <div>
    <select
      v-model="genre"
      id="select-bar"
      @change="$emit('badgeClick', genre)"
    >
      <option value="" selected>Tutti i generi</option>
      <option :value="category" v-for="(category, i) in categoryList" :key="i">
        {{ category }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "FiltroGeneri",
  data() {
    return {
      genre: "",
    };
  },
  props: {
    categoryList: Array,
  },
};
</script>

<style lang="sass">
@import "@/styles/filtrogeneri"
</style>