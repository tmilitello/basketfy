<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "View Basket",
      basket: {},
      updateBasketParams: {},
      options: [],
    };
  },
  created: function () {
    this.searchAssets();
    axios.get("/baskets/" + this.$route.params.id + ".json").then((response) => {
      console.log("showing basket");
      this.basket = response.data;
      this.updateBasketParams = this.basket;
    });
  },
  methods: {
    editBasket: function (basket) {
      axios.patch("/baskets/" + basket.id + ".json", this.updateBasketParams).then((response) => {
        console.log("Editing Basket", response);
        this.basket = response.data;
        // this.$router.push("/posts");
      });
    },
    addAsset: function () {
      this.updateBasketParams.asset_baskets.push({ name: "", weight: "" });
    },
    searchAssets: function () {
      axios.get("/assets.json").then((response) => {
        this.options = response.data;
      });
    },
    deactivateBasket: function () {
      axios.delete("/baskets/" + this.$route.params.id + ".json").then((response) => {
        console.log("Deactivating Basket", response);
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <P>{{ basket }}</P>
    <div>
      <h1>Update Basket</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Basket Name:</label>
        <input type="name" v-model="updateBasketParams.name" placeholder="Inflation-hedged basket" />
      </div>
      <div v-for="asset in updateBasketParams.asset_baskets" v-bind:key="asset.id">
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

      <input type="submit" value="Update Basket" v-on:click="editBasket()" />
      <button v-on:click="deactivateBasket">Deactivate Basket</button>
    </div>
  </div>
</template>

<style></style>
