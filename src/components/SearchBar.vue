<template>
  <div>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Filtra..."
        aria-label="Recipient's username"
        aria-describedby="searchButton"
        v-model="textFilter"
        @keydown.enter="activeFilter()"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="searchButton"
        @click="activeFilter()"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      textFilter: "",
    };
  },
  methods: {
    activeFilter() {
      console.log(this.textFilter);
    },
  },
};
</script>