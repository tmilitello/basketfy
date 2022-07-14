<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "View Basket",
      basket: {},
      updateBasketParams: {},
      options: [],
      isEdit: false,
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
      axios.patch("/baskets/" + basket.id + ".json", this.basket).then((response) => {
        console.log("Editing Basket", response);
        this.basket = response.data;
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
    displayModal: function () {
      console.log("displaying modal...");
    },
    toggleEdit: function () {
      console.log("clicking button");
      if (this.isEdit === false) {
        this.isEdit = true;
      } else {
        this.isEdit = false;
      }
    },
  },
};
</script>

<template>
  <div class="home">
    <!-- <h1>{{ message }}</h1>
    <P>{{ basket }}</P> -->
    <!-- <div>
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
    </div> -->

    <!--end container-->
    <section
      class="bg-home bg-primary d-flex align-items-center"
      style="background: url('images/bg/bg03.png') center center; height: auto"
      id="home"
    >
      <div class="bg-overlay bg-gradient-primary opacity-9"></div>
      <div class="container">
        <div class="row mt-5 justify-content-center">
          <div class="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
            <div class="title-heading">
              <h4 class="heading fw-medium text-white title-dark mb-3">
                {{ basket.name }}
                <br />
                <span class="col-0.5 btn btn-primary m-1" type="button" v-on:click="toggleEdit()">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    class="bi bi-pencil"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                    />
                  </svg>
                </span>
              </h4>

              <p class="username-color">Created by {{ basket.username }}</p>
              <p class="para-desc mx-auto text-white-50"></p>
            </div>
            <div class="mt-6 justify-content-center">
              <div class="subcribe-form mt-4 pt-2">
                <div class="row row-11" v-for="asset_basket in basket.asset_baskets" v-bind:key="asset_basket.id">
                  <div>
                    <span class="btn btn-primary m-1 asset-name">{{ asset_basket.asset.name }}</span>
                  </div>
                  <div>
                    <span v-if="!isEdit" class="btn btn-primary m-1 asset-weight">
                      {{ asset_basket.weight * 100 }} %
                    </span>
                  </div>
                  <div v-if="isEdit">
                    <input class="btn btn-primary m-1 asset-weight" v-model="asset_basket.weight" />
                  </div>
                </div>
                <span
                  class="col-2 btn btn-primary m-1 save-changes"
                  type="button"
                  v-if="isEdit"
                  v-on:click="toggleEdit(), editBasket()"
                >
                  Save Changes
                </span>
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-lg-8 col-md-10">
                <div class="home-dashboard">
                  <img src="images/hero03.png" alt="" class="img-fluid" />
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
    <div class="container mt-100 mt-60">
      <div class="row align-items-center">
        <div class="col-md-8">
          <div class="section-title">
            <h4 class="mb-0">Comments</h4>
          </div>
        </div>
        <!--end col-->

        <div class="col-md-4 text-end d-none d-md-block"></div>
      </div>
      <!--end row-->

      <div class="row">
        <div class="col-12 mt-4 pt-2">
          <div class="tiny-five-item">
            <div class="tiny-slide">
              <div class="nft-items nft-item-primary">
                <div class="nft-image position-relative overflow-hidden rounded-md shadow-md">
                  <img src="images/nft/500/1.jpg" class="img-fluid" alt="" />
                  <div class="pop-icon">
                    <a href="nft-item-detail.html" class="btn bg-white btn-pills btn-icon shadow">
                      <i class="uil uil-arrow-right text-dark"></i>
                    </a>
                  </div>
                </div>

                <div class="content pt-3">
                  <a href="nft-item-detail.html" class="title h6 mb-1 text-dark d-block">Basket Details</a>
                  <small class="gradient-text d-block">0.75ETH</small>

                  <ul class="pt-3 mt-2 border-top d-flex justify-content-between align-items-center list-unstyled">
                    <li class="d-flex author align-items-center">
                      <div class="position-relative">
                        <!-- <img src="images/client/01.jpg" class="avatar avatar-sm-sm rounded-pill shadow" alt="" /> -->
                        <div class="position-absolute top-0 start-0 translate-middle pt-2 ps-2">
                          <i class="mdi mdi-check-circle mdi-18px text-success"></i>
                        </div>
                      </div>
                      <a href="nft-creator-profile.html" class="ps-2 text-dark name">Jordan</a>
                    </li>

                    <li>
                      <span>
                        23
                        <a href="javascrpit:void(0)" class="like"><i class="mdi mdi-heart align-middle"></i></a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!--end tiny slide-->

            <div class="tiny-slide">
              <div class="nft-items nft-item-primary">
                <div class="nft-image position-relative overflow-hidden rounded-md shadow-md">
                  <img src="images/nft/500/2.jpg" class="img-fluid" alt="" />
                  <div class="pop-icon">
                    <a href="nft-item-detail.html" class="btn bg-white btn-pills btn-icon shadow">
                      <i class="uil uil-arrow-right text-dark"></i>
                    </a>
                  </div>
                </div>

                <div class="content pt-3">
                  <a href="nft-item-detail.html" class="title h6 mb-1 text-dark d-block">ETH never die</a>
                  <small class="gradient-text d-block">0.75ETH</small>

                  <ul class="pt-3 mt-2 border-top d-flex justify-content-between align-items-center list-unstyled">
                    <li class="d-flex author align-items-center">
                      <div class="position-relative">
                        <!-- <img src="images/client/02.jpg" class="avatar avatar-sm-sm rounded-pill shadow" alt="" /> -->
                        <div class="position-absolute top-0 start-0 translate-middle pt-2 ps-2">
                          <i class="mdi mdi-check-circle mdi-18px text-success"></i>
                        </div>
                      </div>
                      <a href="nft-creator-profile.html" class="ps-2 text-dark name">Sofia</a>
                    </li>

                    <li>
                      <span>
                        23
                        <a href="javascrpit:void(0)" class="like"><i class="mdi mdi-heart align-middle"></i></a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!--end tiny slide-->

            <div class="tiny-slide">
              <div class="nft-items nft-item-primary">
                <div class="nft-image position-relative overflow-hidden rounded-md shadow-md">
                  <img src="images/nft/500/3.jpg" class="img-fluid" alt="" />
                  <div class="pop-icon">
                    <a href="nft-item-detail.html" class="btn bg-white btn-pills btn-icon shadow">
                      <i class="uil uil-arrow-right text-dark"></i>
                    </a>
                  </div>
                </div>

                <div class="content pt-3">
                  <a href="nft-item-detail.html" class="title h6 mb-1 text-dark d-block">Future coming soon</a>
                  <small class="gradient-text d-block">0.75ETH</small>

                  <ul class="pt-3 mt-2 border-top d-flex justify-content-between align-items-center list-unstyled">
                    <li class="d-flex author align-items-center">
                      <div class="position-relative">
                        <!-- <img src="images/client/03.jpg" class="avatar avatar-sm-sm rounded-pill shadow" alt="" /> -->
                        <div class="position-absolute top-0 start-0 translate-middle pt-2 ps-2">
                          <i class="mdi mdi-check-circle mdi-18px text-success"></i>
                        </div>
                      </div>
                      <a href="nft-creator-profile.html" class="ps-2 text-dark name">Cristina</a>
                    </li>

                    <li>
                      <span>
                        23
                        <a href="javascrpit:void(0)" class="like"><i class="mdi mdi-heart align-middle"></i></a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!--end tiny slide-->

            <div class="tiny-slide">
              <div class="nft-items nft-item-primary">
                <div class="nft-image position-relative overflow-hidden rounded-md shadow-md">
                  <img src="images/nft/500/4.jpg" class="img-fluid" alt="" />
                  <div class="pop-icon">
                    <a href="nft-item-detail.html" class="btn bg-white btn-pills btn-icon shadow">
                      <i class="uil uil-arrow-right text-dark"></i>
                    </a>
                  </div>
                </div>

                <div class="content pt-3">
                  <a href="nft-item-detail.html" class="title h6 mb-1 text-dark d-block">Elon Musk silver coin</a>
                  <small class="gradient-text d-block">0.75ETH</small>

                  <ul class="pt-3 mt-2 border-top d-flex justify-content-between align-items-center list-unstyled">
                    <li class="d-flex author align-items-center">
                      <div class="position-relative">
                        <!-- <img src="images/client/04.jpg" class="avatar avatar-sm-sm rounded-pill shadow" alt="" /> -->
                        <div class="position-absolute top-0 start-0 translate-middle pt-2 ps-2">
                          <i class="mdi mdi-check-circle mdi-18px text-success"></i>
                        </div>
                      </div>
                      <a href="nft-creator-profile.html" class="ps-2 text-dark name">Jack</a>
                    </li>

                    <li>
                      <span>
                        23
                        <a href="javascrpit:void(0)" class="like"><i class="mdi mdi-heart align-middle"></i></a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!--end tiny slide-->

            <div class="tiny-slide">
              <div class="nft-items nft-item-primary">
                <div class="nft-image position-relative overflow-hidden rounded-md shadow-md">
                  <img src="images/nft/500/5.jpg" class="img-fluid" alt="" />
                  <div class="pop-icon">
                    <a href="nft-item-detail.html" class="btn bg-white btn-pills btn-icon shadow">
                      <i class="uil uil-arrow-right text-dark"></i>
                    </a>
                  </div>
                </div>

                <div class="content pt-3">
                  <a href="nft-item-detail.html" class="title h6 mb-1 text-dark d-block">Amazing digital art</a>
                  <small class="gradient-text d-block">0.75ETH</small>

                  <ul class="pt-3 mt-2 border-top d-flex justify-content-between align-items-center list-unstyled">
                    <li class="d-flex author align-items-center">
                      <div class="position-relative">
                        <!-- <img src="images/client/05.jpg" class="avatar avatar-sm-sm rounded-pill shadow" alt="" /> -->
                        <div class="position-absolute top-0 start-0 translate-middle pt-2 ps-2">
                          <i class="mdi mdi-check-circle mdi-18px text-success"></i>
                        </div>
                      </div>
                      <a href="nft-creator-profile.html" class="ps-2 text-dark name">Lilia</a>
                    </li>

                    <li>
                      <span>
                        23
                        <a href="javascrpit:void(0)" class="like"><i class="mdi mdi-heart align-middle"></i></a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!--end tiny slide-->

            <div class="tiny-slide">
              <div class="nft-items nft-item-primary">
                <div class="nft-image position-relative overflow-hidden rounded-md shadow-md">
                  <img src="images/nft/500/6.jpg" class="img-fluid" alt="" />
                  <div class="pop-icon">
                    <a href="nft-item-detail.html" class="btn bg-white btn-pills btn-icon shadow">
                      <i class="uil uil-arrow-right text-dark"></i>
                    </a>
                  </div>
                </div>

                <div class="content pt-3">
                  <a href="nft-item-detail.html" class="title h6 mb-1 text-dark d-block">Ribbon Hunter</a>
                  <small class="gradient-text d-block">0.75ETH</small>

                  <ul class="pt-3 mt-2 border-top d-flex justify-content-between align-items-center list-unstyled">
                    <li class="d-flex author align-items-center">
                      <div class="position-relative">
                        <!-- <img src="images/client/06.jpg" class="avatar avatar-sm-sm rounded-pill shadow" alt="" /> -->
                        <div class="position-absolute top-0 start-0 translate-middle pt-2 ps-2">
                          <i class="mdi mdi-check-circle mdi-18px text-success"></i>
                        </div>
                      </div>
                      <a href="nft-creator-profile.html" class="ps-2 text-dark name">Anderson</a>
                    </li>

                    <li>
                      <span>
                        23
                        <a href="javascrpit:void(0)" class="like"><i class="mdi mdi-heart align-middle"></i></a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!--end tiny slide-->
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->

    <!--end section-->
  </div>
</template>

<style>
.asset-weight {
  padding-bottom: 50px;
  padding-left: 20px;
}
.edit-weights {
  padding-top: 10px;
}
.weights-button {
  background-color: #aa65ee;
  color: blanchedalmond;
}
.username-color {
  color: rgb(203, 182, 207);
}
.save-changes {
  background-color: #aa65ee;
}
</style>
