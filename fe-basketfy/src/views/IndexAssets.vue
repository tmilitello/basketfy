<script>
import axios from "axios";

export default {
  data: function () {
    return {
      assets: [],
    };
  },
  created: function () {
    this.searchAssets();
  },
  methods: {
    searchAssets: function () {
      axios.get("/assets.json").then((response) => {
        this.assets = response.data;
      });
    },
  },
};
</script>

<template>
  <!-- Start -->
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title mb-4">
            <h4>All Assets</h4>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->

      <div class="row justify-content-center">
        <div class="col-12">
          <div class="table-responsive bg-white shadow rounded">
            <table class="table mb-0 table-center">
              <thead>
                <tr>
                  <th scope="col" class="fw-normal text-center text-muted py-4" style="min-width: 250px">Name</th>
                  <th scope="col" class="fw-normal text-center text-muted py-4" style="width: 200px; min-width: 150px">
                    Price
                  </th>
                  <th scope="col" class="fw-normal text-center text-muted py-4" style="width: 200px; min-width: 150px">
                    1 Week
                  </th>
                  <th scope="col" class="fw-normal text-center text-muted py-4" style="width: 250px; min-width: 150px">
                    Popularity
                  </th>
                  <th
                    scope="col"
                    class="fw-normal text-end text-muted py-4 text-center"
                    style="width: 150px; min-width: 150px"
                  >
                    Tags
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="asset in assets" v-bind:key="asset.id">
                  <th class="py-3">
                    <a href="#!" class="align-items-center">
                      <!-- <img src="images/coin/bitcoin.png" class="me-3" height="32" alt="" /> -->
                      <p class="mb-0 text-dark fw-normal h6 text-center">
                        {{ asset.name }}
                        <!-- <span class="text-muted">BTC</span> -->
                      </p>
                    </a>
                  </th>
                  <td class="text-center">
                    <div class="progress-box px-3">
                      <small class="title text-muted mb-0">${{ asset.price }}</small>
                    </div>
                    <!--end process box-->
                  </td>
                  <td class="text-center">
                    <span class="badge rounded-md bg-soft-success">1.5%</span>
                  </td>
                  <td class="text-center">
                    <ul class="list-unstyled text-warning mb-0">
                      <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                      <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                      <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                      <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                      <li class="list-inline-item mb-0"><i class="mdi mdi-star-half"></i></li>
                      <li class="list-inline-item mb-0 text-muted small">4.5</li>
                    </ul>
                  </td>

                  <td class="text-center" v-for="tag in asset.tags" v-bind:key="tag.id">
                    <span class="badge rounded-md bg-soft-success">{{ tag.name }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--end col-->

        <!-- PAGINATION START -->
        <div class="col-12 mt-4 pt-2">
          <div class="d-md-flex align-items-center text-center justify-content-between">
            <span class="text-muted me-3">Showing 1 - 15 out of 452</span>
            <ul class="pagination justify-content-center mb-0 mt-3 mt-sm-0">
              <li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Previous">Prev</a></li>
              <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
              <li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Next">Next</a></li>
            </ul>
          </div>
        </div>
        <!--end col-->
        <!-- PAGINATION END -->
      </div>
      <!--end row-->
    </div>
    <!--end container-->

    <div class="container mt-100 mt-60">
      <div class="row">
        <div class="col-12">
          <div class="section-title mb-4">
            <h4>Top Movers</h4>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->

      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div class="card border-0 p-4 rounded shadow position-relative">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <!-- <img src="images/coin/bitcoin.png" class="avatar avatar-coin rounded-pill p-1 bg-success" alt="" /> -->
              <!-- <span class="text-muted fw-medium">BTC</span> -->
            </div>

            <!-- <h6>Bitcoin</h6> -->

            <div class="d-flex justify-content-between align-items-center mt-2">
              <small class="text-success">+15.55%</small>
              <small class="text-success">+$ 155</small>
              <small>$ 41245</small>
            </div>

            <div class="crypto-chart">
              <div>
                <div id="chart-1"></div>
              </div>
            </div>
          </div>
        </div>
        <!--end slide-->

        <div class="col-lg-3 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <div class="card border-0 p-4 rounded shadow position-relative">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <img src="images/coin/ethereum.png" class="avatar avatar-coin rounded-pill p-1 bg-danger" alt="" />
              <span class="text-muted fw-medium">ETS</span>
            </div>

            <h6>Ethereum</h6>

            <div class="d-flex justify-content-between align-items-center mt-2">
              <small class="text-danger">-25.01%</small>
              <small class="text-danger">-$ 524</small>
              <small>$ 1458</small>
            </div>

            <div class="crypto-chart">
              <div>
                <div id="chart-2"></div>
              </div>
            </div>
          </div>
        </div>
        <!--end slide-->

        <div class="col-lg-3 col-md-6 mt-4 pt-2 mt-lg-0 pt-lg-0">
          <div class="card border-0 p-4 rounded shadow position-relative">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <img src="images/coin/monero.png" class="avatar avatar-coin rounded-pill p-1 bg-success" alt="" />
              <span class="text-muted fw-medium">XMR</span>
            </div>

            <h6>Monero</h6>

            <div class="d-flex justify-content-between align-items-center mt-2">
              <small class="text-success">+3.08%</small>
              <small class="text-success">+$ 58</small>
              <small>$ 448</small>
            </div>

            <div class="crypto-chart">
              <div>
                <div id="chart-3"></div>
              </div>
            </div>
          </div>
        </div>
        <!--end slide-->

        <div class="col-lg-3 col-md-6 mt-4 pt-2 mt-lg-0 pt-lg-0">
          <div class="card border-0 p-4 rounded shadow position-relative">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <img src="images/coin/litecoin.png" class="avatar avatar-coin rounded-pill p-1 bg-danger" alt="" />
              <span class="text-muted fw-medium">LTC</span>
            </div>

            <h6>Litecoin</h6>

            <div class="d-flex justify-content-between align-items-center mt-2">
              <small class="text-danger">-5.05%</small>
              <small class="text-danger">-$ 48</small>
              <small>$ 478</small>
            </div>

            <div class="crypto-chart">
              <div>
                <div id="chart-4"></div>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-12 mt-4 pt-2">
          <div class="text-center">
            <a href="market-price.html" class="text-primary">
              View marketplace
              <i class="uil uil-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <!--end row-->
    </div>
    <!--end container-->

    <!-- Start testi -->
    <div class="container mt-100 mt-60">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="section-title mb-4 pb-2 text-center">
            <h2 class="title mb-4">Used by thousands of traders like you</h2>
            <p class="text-muted para-desc mx-auto mb-0">
              With Upcrypto Trade, you can be sure your trading skills are matched with excellent service.
            </p>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->

      <div class="row">
        <div class="col-12 mt-4 pt-2">
          <div class="tiny-three-item">
            <div class="tiny-slide">
              <div class="card border-0 customer-testi p-4 shadow rounded-md m-2 overflow-hidden">
                <p class="text-muted fst-italic">
                  " It seems that only fragments of the original text remain in the used today. Which is said to have
                  originated in the 16th century. "
                </p>
                <div class="d-flex align-items-center mt-3">
                  <img src="images/client/01.jpg" class="img-fluid avatar avatar-small rounded-circle shadow" alt="" />
                  <div class="flex-1 ms-3">
                    <h6 class="text-primary mb-0">Thomas Israel</h6>
                    <small class="text-muted">C.E.O</small>
                  </div>
                </div>
                <div class="quote">
                  <i class="mdi mdi-format-quote-close"></i>
                </div>
              </div>
              <!--end customer testi-->
            </div>

            <div class="tiny-slide">
              <div class="card border-0 customer-testi p-4 shadow rounded-md m-2 overflow-hidden">
                <p class="text-muted fst-italic">
                  " The advantage of its Latin origin and the relative to itself or distract the viewer's attention from
                  the layout. "
                </p>
                <div class="d-flex align-items-center mt-3">
                  <img src="images/client/02.jpg" class="img-fluid avatar avatar-small rounded-circle shadow" alt="" />
                  <div class="flex-1 ms-3">
                    <h6 class="text-primary mb-0">Carl Oliver</h6>
                    <small class="text-muted">P.A</small>
                  </div>
                </div>
                <div class="quote">
                  <i class="mdi mdi-format-quote-close"></i>
                </div>
              </div>
              <!--end customer testi-->
            </div>

            <div class="tiny-slide">
              <div class="card border-0 customer-testi p-4 shadow rounded-md m-2 overflow-hidden">
                <p class="text-muted fst-italic">
                  " There is now an abundance of readable dummy texts. These alternatives to the and tell short, funny
                  or nonsensical stories. "
                </p>
                <div class="d-flex align-items-center mt-3">
                  <img src="images/client/03.jpg" class="img-fluid avatar avatar-small rounded-circle shadow" alt="" />
                  <div class="flex-1 ms-3">
                    <h6 class="text-primary mb-0">Barbara McIntosh</h6>
                    <small class="text-muted">M.D</small>
                  </div>
                </div>
                <div class="quote">
                  <i class="mdi mdi-format-quote-close"></i>
                </div>
              </div>
              <!--end customer testi-->
            </div>

            <div class="tiny-slide">
              <div class="card border-0 customer-testi p-4 shadow rounded-md m-2 overflow-hidden">
                <p class="text-muted fst-italic">
                  " According to most sources. Allegedly, a Latin scholar established the of the unusual word
                  'consectetur' he could find "
                </p>
                <div class="d-flex align-items-center mt-3">
                  <img src="images/client/04.jpg" class="img-fluid avatar avatar-small rounded-circle shadow" alt="" />
                  <div class="flex-1 ms-3">
                    <h6 class="text-primary mb-0">Christa Smith</h6>
                    <small class="text-muted">Manager</small>
                  </div>
                </div>
                <div class="quote">
                  <i class="mdi mdi-format-quote-close"></i>
                </div>
              </div>
              <!--end customer testi-->
            </div>

            <div class="tiny-slide">
              <div class="card border-0 customer-testi p-4 shadow rounded-md m-2 overflow-hidden">
                <p class="text-muted fst-italic">
                  " It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. Which
                  is said to have originated in the 16th century. "
                </p>
                <div class="d-flex align-items-center mt-3">
                  <img src="images/client/05.jpg" class="img-fluid avatar avatar-small rounded-circle shadow" alt="" />
                  <div class="flex-1 ms-3">
                    <h6 class="text-primary mb-0">Dean Tolle</h6>
                    <small class="text-muted">Developer</small>
                  </div>
                </div>
                <div class="quote">
                  <i class="mdi mdi-format-quote-close"></i>
                </div>
              </div>
              <!--end customer testi-->
            </div>

            <div class="tiny-slide">
              <div class="card border-0 customer-testi p-4 shadow rounded-md m-2 overflow-hidden">
                <p class="text-muted fst-italic">
                  " It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One
                  deleted at various positions within the text. "
                </p>
                <div class="d-flex align-items-center mt-3">
                  <img src="images/client/06.jpg" class="img-fluid avatar avatar-small rounded-circle shadow" alt="" />
                  <div class="flex-1 ms-3">
                    <h6 class="text-primary mb-0">Jill Webb</h6>
                    <small class="text-muted">Designer</small>
                  </div>
                </div>
                <div class="quote">
                  <i class="mdi mdi-format-quote-close"></i>
                </div>
              </div>
              <!--end customer testi-->
            </div>
          </div>
          <!--end owl carousel-->
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
    <!-- End testi -->
  </section>
  <!--end section-->
  <!-- End -->
</template>

<style></style>
