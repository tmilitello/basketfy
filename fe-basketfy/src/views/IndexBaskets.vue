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
    <div>
      <div v-for="basket in baskets" v-bind:key="basket.id">
        <div v-if="basket.asset_baskets.length > 0">
          {{ basket }}
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
