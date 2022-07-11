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
  <!-- <div v-for="basket in baskets" v-bind:key="basket.id">
        <div v-if="basket.asset_baskets.length > 0">
          {{ basket }}
        </div>
      </div> -->
  <div v-for="basket in baskets" v-bind:key="basket.id">
    <div class="col-lg-3 col-md-6">
      <div class="card border-0 p-4 rounded shadow position-relative bg-white">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <img src="images/coin/bitcoin.png" class="avatar avatar-coin rounded-pill p-1 bg-success" alt="" />
          <span class="text-muted fw-medium">BTC</span>
        </div>
        <div v-if="basket.asset_baskets.length > 0">
          <h6>{{ basket.name }}</h6>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-2">
          <small class="text-success">+15.55%</small>
          <small class="text-success">+$ 155</small>
          <small>$ 106.5</small>
        </div>

        <div class="crypto-chart">
          <div>
            <div id="chart-1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--end slide-->
  <!-- Start -->
  <section class="section">
    <div class="text-center mt-4">
      <a href="market-price.html" class="text-primary">
        View Marketplace
        <i class="uil uil-arrow-right"></i>
      </a>
    </div>

    <div class="container mt-100 mt-60">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="feature feature-primary feature-clean text-center rounded px-4">
            <div class="icons text-center">
              <i class="uil uil-shield-check d-block mx-auto rounded h3 mb-0"></i>
            </div>
            <div class="content mt-4">
              <a href="javascript:void(0)" class="text-dark h5 title">Secure storage</a>
              <p class="text-muted mt-3 mb-0">
                We store the vast majority of the digital assets in secure offline storage.
              </p>
              <div class="mt-2">
                <a href="javascript:void(0)" class="link">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div class="feature feature-primary feature-clean text-center rounded px-4">
            <div class="icons text-center">
              <i class="uil uil-newspaper d-block mx-auto rounded h3 mb-0"></i>
            </div>
            <div class="content mt-4">
              <a href="javascript:void(0)" class="text-dark h5 title">Protected by insurance</a>
              <p class="text-muted mt-3 mb-0">
                Cryptocurrency stored on our servers is covered by our insurance policy.
              </p>
              <div class="mt-2">
                <a href="javascript:void(0)" class="link">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
          <div class="feature feature-primary feature-clean text-center rounded px-4">
            <div class="icons text-center">
              <i class="uil uil-browser d-block mx-auto rounded h3 mb-0"></i>
            </div>
            <div class="content mt-4">
              <a href="javascript:void(0)" class="text-dark h5 title">Industry best practices</a>
              <p class="text-muted mt-3 mb-0">Upcrypto supports a variety of the most popular digital currencies.</p>
              <div class="mt-2">
                <a href="javascript:void(0)" class="link">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- End -->
</template>

<style></style>
