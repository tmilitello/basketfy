<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "My Profile",
      user: {},
    };
  },
  created: function () {
    this.indexBaskets();
  },

  methods: {
    indexBaskets: function () {
      axios.get("/users.json").then((response) => {
        console.log("showing user");
        this.user = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
      <p>{{ user }}</p>
    </div>
  </div>
</template>

<style></style>
