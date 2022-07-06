<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "View Baskets",
      baskets: [],
    };
  },
  created: function () {
    this.indexBaskets();
  },
  methods: {
    indexBaskets: function () {
      axios.get("/baskets.json").then((response) => {
        console.log("indexing baskets");
        this.baskets = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
      <!-- <button v-on:click="indexBaskets">Show Baskets</button> -->
      <div v-for="basket in baskets" v-bind:key="basket.id">
        <!-- v-if="basket.asset_baskets" not null -->
        {{ basket }}
      </div>
    </div>
  </div>
</template>

<style></style>
