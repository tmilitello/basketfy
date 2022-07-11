<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newBasketParams: { assets: [{ asset_id: "", weight: "", status: "active" }] },
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
        this.$router.push("/baskets/" + response.data.id + ".json");
      });
    },
    searchAssets: function () {
      axios.get("/assets.json").then((response) => {
        this.options = response.data;
      });
    },
    addAsset: function () {
      this.newBasketParams.assets.push({ name: "", weight: "" });
    },
  },
};
</script>

<template>
  <div class="home">
    <div>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Basket Name:</label>
        <input type="name" v-model="newBasketParams.name" placeholder="Inflation-hedged basket" />
      </div>
      <div v-for="asset in newBasketParams.assets" v-bind:key="asset.id">
        <label>Asset:</label>
        <div>
          <label>Asset Name:</label>
          <select v-model="asset.asset_id">
            <option v-for="option in options" v-bind:key="option.id" v-bind:value="option.id">
              {{ option.name }}
            </option>
          </select>
        </div>
        <div>
          <label>Asset Weight (%):</label>
          <input type="text" v-model="asset.weight" placeholder="25" />
        </div>
      </div>
      <button v-on:click="addAsset">Add Another Asset</button>

      <input type="submit" value="Create" v-on:click="createBasket()" />
    </div>
  </div>
</template>

<style></style>
