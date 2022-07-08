<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newBasketParams: { assets: [{ name: "", weight: "", status: "active" }] },
      options: [],
    };
  },
  created: function () {
    this.searchAssets();
  },
  methods: {
    createBasket: function () {
      axios.post("/baskets.json", this.newBasketParams).then((response) => {
        console.log("created baskets", response);
      });
    },
    searchAssets: function () {
      axios.get("/assets.json").then((response) => {
        this.options = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <div>
      <form v-on:submit.prevent="submit()">
        <h1>Create Basket</h1>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          <label>Basket Name:</label>
          <input type="name" v-model="newBasketParams.name" placeholder="Inflation-hedged basket" />
        </div>
        <div v-for="asset in newBasketParams.assets" v-bind:key="asset.name">
          <label>Asset:</label>
          <div>
            <label>Asset Name:</label>
            <select v-model="asset.id">
              <option v-for="option in options" v-bind:key="option.id">
                {{ option.name }}
              </option>
            </select>
          </div>
          <div>
            <label>Asset Weight:</label>
            <input type="text" v-model="asset.weight" placeholder="25" />
          </div>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<style></style>
