<template>
  <!-- Loader -->
  <!-- <div id="preloader">
    <div id="status">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>
  </div> -->
  <!-- Loader -->
  <!-- Navbar Start -->
  <header id="topnav" class="defaultscroll sticky custom-background">
    <div class="container">
      <!-- Logo Start-->
      <a class="logo" href="index.html">
        <span class="logo-light-mode">
          <p>Basketfy</p>
        </span>
        <img src="images/logo-light.png" class="logo-dark-mode" alt="" />
      </a>
      <!-- Logo end-->

      <!--Login button Start-->
      <ul class="buy-button list-inline mb-0">
        <li class="list-inline-item search-icon mb-0">
          <a
            href="javascript:void(0)"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <div class="btn btn-icon btn-pills btn-primary"><i class="uil uil-user"></i></div>
          </a>
        </li>
      </ul>
      <!--Login button End-->
      <div class="menu-extras">
        <div class="menu-item">
          <!-- Mobile menu toggle-->
          <a class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
          <!-- End mobile menu toggle-->
        </div>
      </div>

      <div id="navigation">
        <!-- Navigation Menu-->
        <ul class="navigation-menu nav-right nav-light">
          <li><a href="/" class="sub-menu-item">Home</a></li>
          <li class="has-submenu parent-menu-item">
            <a href="/baskets">Baskets</a>
            <span class="menu-arrow"></span>
            <ul class="submenu">
              <li><a href="/baskets" class="sub-menu-item">View Baskets</a></li>
              <li><a href="/baskets/create" class="sub-menu-item">Create Basket</a></li>
            </ul>
          </li>

          <li class="has-submenu parent-menu-item">
            <a href="/assets">Assets</a>
            <span class="menu-arrow"></span>
            <ul class="submenu">
              <li><a href="/assets" class="sub-menu-item">View All</a></li>
              <li><a href="/assets/search?asset_tag=stock" class="sub-menu-item">Stocks</a></li>
              <li><a href="/assets/search?asset_tag=bonds" class="sub-menu-item">Fixed Income</a></li>
              <li><a href="/assets/search?asset_tag=crypto" class="sub-menu-item">Crypto</a></li>
            </ul>
          </li>
          <li class="has-submenu parent-menu-item">
            <a href="/users">My Profile</a>
            <span class="menu-arrow"></span>
            <ul class="submenu">
              <li><a href="/users" class="sub-menu-item">My Baskets</a></li>
              <li><a href="/signup" class="sub-menu-item">Sign Up</a></li>
              <li><a href="/login" class="sub-menu-item">Login</a></li>
              <li><a href="/logout" class="sub-menu-item">Logout</a></li>
            </ul>
          </li>

          <li class="has-submenu parent-parent-menu-item">
            <a href="javascript:void(0)">Pages</a>
            <span class="menu-arrow"></span>
            <ul class="submenu">
              <li><a href="aboutus.html" class="sub-menu-item">About Us</a></li>
              <li><a href="features.html" class="sub-menu-item">Features</a></li>
              <li><a href="team.html" class="sub-menu-item">Team</a></li>
              <li><a href="roadmap.html" class="sub-menu-item">Roadmap</a></li>
              <li><a href="mission.html" class="sub-menu-item">Mission</a></li>
              <li><a href="career.html" class="sub-menu-item">Career</a></li>
              <li><a href="faqs.html" class="sub-menu-item">FAQs</a></li>
              <li><a href="whitepaper.html" class="sub-menu-item">Whitepaper</a></li>
              <li class="has-submenu parent-menu-item">
                <a href="javascript:void(0)">Blog</a>
                <span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li><a href="blog.html" class="sub-menu-item">Blog</a></li>
                  <li><a href="blog-detail.html" class="sub-menu-item">Blog Detail</a></li>
                </ul>
              </li>
              <li class="has-submenu parent-menu-item">
                <a href="javascript:void(0)">Auth pages</a>
                <span class="submenu-arrow"></span>
                <ul class="submenu">
                  <li><a href="login.html" class="sub-menu-item">Login</a></li>
                  <li><a href="signup.html" class="sub-menu-item">Signup</a></li>
                  <li><a href="reset-password.html" class="sub-menu-item">Reset Password</a></li>
                </ul>
              </li>
              <li><a href="comingsoon.html" class="sub-menu-item">Coming soon</a></li>
            </ul>
          </li>
          <li><a href="index-nft.html" target="_blank" class="sub-menu-item">NFT Marketplace</a></li>
        </ul>
        <!--end navigation menu-->
      </div>
      <!--end navigation-->
    </div>
    <!--end container-->
  </header>
  <!--end header-->
  <!-- Navbar End -->

  <router-view />

  <!-- Footer Start -->
  <footer class="bg-footer">
    <div class="container-fluid px-0">
      <div class="py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-8">
              <div class="section-title">
                <div class="d-flex"></div>
              </div>
            </div>

            <div class="col-md-4 mt-4 mt-sm-0">
              <div class="text-md-end ms-5 ms-sm-0"></div>
            </div>
            <!--end col-->
          </div>
          <!--end row-->
        </div>
        <!--end container-->
      </div>
      <!--end div-->
    </div>
    <!--end container-->

    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="footer-py-100 footer-border-top">
            <div class="row">
              <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                <a href="#" class="logo-footer">
                  <img src="images/logo-light.png" alt="" />
                </a>
                <p class="text-foot mt-4">All Rights Reserved by Basketfy.io 2022</p>
                <ul class="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                  <li class="list-inline-item">
                    <a
                      href="https://wrapbootstrap.com/theme/upcrypto-nft-cryptocurrency-template-WB0580331?ref=shreethemesstudio"
                      target="_blank"
                      class="rounded"
                    >
                      <i class="uil uil-shopping-cart align-middle" title="Buy Now"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://dribbble.com/shreethemes" target="_blank" class="rounded">
                      <i class="uil uil-dribbble align-middle" title="dribbble"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.behance.net/shreethemes" target="_blank" class="rounded">
                      <i class="uil uil-behance" title="Behance"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="http://linkedin.com/company/shreethemes" target="_blank" class="rounded">
                      <i class="uil uil-linkedin" title="Linkedin"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.facebook.com/shreethemes" target="_blank" class="rounded">
                      <i class="uil uil-facebook-f align-middle" title="facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.instagram.com/shreethemes/" target="_blank" class="rounded">
                      <i class="uil uil-instagram align-middle" title="instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://twitter.com/shreethemes" target="_blank" class="rounded">
                      <i class="uil uil-twitter align-middle" title="twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="mailto:support@shreethemes.in" class="rounded">
                      <i class="uil uil-envelope align-middle" title="email"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://forms.gle/QkTueCikDGqJnbky9" target="_blank" class="rounded">
                      <i class="uil uil-file align-middle" title="Hire Us"></i>
                    </a>
                  </li>
                </ul>
                <!--end icon-->
              </div>
              <!--end col-->

              <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 class="text-light footer-head">Company</h5>
                <ul class="list-unstyled footer-list mt-4">
                  <li>
                    <a href="#" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i>
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i>
                      Business Contacts
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i>
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i>
                      Basketfy Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i>
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i>
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i>
                      Announcements
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i>
                      News
                    </a>
                  </li>
                </ul>
              </div>
              <!--end col-->

              <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 class="text-light footer-head">Products</h5>
                <ul class="list-unstyled footer-list mt-4">
                  <li>
                    <a href="#" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i>
                      Exchange
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i>
                      Academy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i>
                      BCF
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i>
                      Card
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i>
                      Labs
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i>
                      Launchpad
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i>
                      Research
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i>
                      Trust Wallet
                    </a>
                  </li>
                </ul>
              </div>
              <!--end col-->

              <div class="col-lg-4 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 class="text-light footer-head">Trade Baskets</h5>

                <ul class="list-unstyled footer-list mt-4 mb-2">
                  <li class="list-inline-item mx-1"><a href="/signin" class="btn btn-soft-primary">Signin</a></li>
                  <li class="list-inline-item mx-1"><a href="/signup" class="btn btn-primary">Signup</a></li>
                </ul>
                <small class="text-foot d-block">
                  Institutional Investor?
                  <a href="#" class="text-foot fw-medium">Learn More</a>
                </small>
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->

    <div class="footer-py-30 footer-border-top">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-8">
            <div class="text-sm-start text-center"></div>
          </div>
          <!--end col-->

          <div class="col-sm-4 mt-4 mt-sm-0">
            <div class="text-sm-end text-center">
              <a
                href="#"
                onclick="topFunction()"
                id="back-to-top"
                class="btn btn-pills btn-icon btn-primary back-to-top"
              >
                <i data-feather="arrow-up" class="icons"></i>
              </a>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </div>
  </footer>
  <!--end footer-->
  <!-- Footer End -->
</template>

<style>
.custom-background {
  background-color: #553880;
}
</style>
