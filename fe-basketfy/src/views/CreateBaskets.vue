<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Create a Basket",
      baskets: [],
    };
  },
  created: function () {
    this.indexBaskets;
  },
  methods: {
    indexBaskets: function () {
      axios.get("/baskets.json").then(console.log("indexing baskets"));
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
      <button v-on:click="indexBaskets">Show Baskets</button>
    </div>
  </div>
</template>

<style></style>
