<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

<template>
  <div class="login">
    <section
      class="bg-home d-flex align-items-center position-relative"
      style="background: url('images/bg/user.jpg') center"
    >
      <div class="bg-overlay bg-gradient-primary opacity-8"></div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="form-signin p-4 bg-light rounded shadow-md">
              <a href="index.html">
                <img src="images/icon-gradient.png" class="avatar avatar-md-md mb-4 d-block mx-auto" alt="" />
              </a>
              <h5 class="mb-3">Please sign in</h5>
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>

              <div class="form-floating mb-2">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  v-model="newSessionParams.email"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  v-model="newSessionParams.password"
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div class="d-flex justify-content-between">
                <div class="mb-3">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label text-muted" for="flexCheckDefault">Remember me</label>
                  </div>
                </div>
                <small class="forgot-pass text-muted mb-0">
                  <a href="reset-password.html" class="text-muted fw-medium">Forgot password ?</a>
                </small>
              </div>

              <button class="btn btn-primary w-100" type="submit" v-on:click="submit()">Sign in</button>

              <div class="col-12 text-center mt-3">
                <small>
                  <small class="text-muted me-2">Don't have an account ?</small>
                  <a href="signup.html" class="text-dark fw-medium">Sign Up</a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newSessionParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newSessionParams.password" />
      </div>
      <input type="submit" value="Submit" />
    </form> -->
    <!-- <section class="bg-half-170 d-table w-100" style="background: url('images/bg/market.png') top">
      <div class="bg-overlay bg-black opacity-9"></div>
      <div class="container">
        <div class="row justify-content-center mt-5">
          <div class="col-12">
            <div class="section-title text-center">
              <span class="text-white-50">In the past 24 hours</span>
              <h4 class="text-white title-dark mt-2 mb-4">
                The average basket is up
                <span class="text-success">15.78%</span>
              </h4>

              <div class="subcribe-form mt-4 pt-2">
                <form class="m-0 mx-auto" v-on:submit.prevent="submit()">
                  <div class="">
                    <ul>
                      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                    </ul>
                    <div class="form-icon position-relative">
                      <i data-feather="search" class="fea icon-sm icons text-white title-dark align-middle"></i>
                      <input
                        type="text"
                        id="course"
                        name="name"
                        class="rounded bg-white opacity-7 ps-5"
                        v-model="newSessionParams.email"
                        placeholder="email address"
                      />
                    </div>
                    <div class="form-icon position-relative login-password">
                      <i data-feather="search" class="fea icon-sm icons text-white title-dark align-middle"></i>
                      <input
                        type="password"
                        id="course"
                        name="name"
                        class="rounded bg-white opacity-7 ps-5"
                        v-model="newSessionParams.password"
                        placeholder="password"
                      />
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary position-relative login-password" value="Submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<style>
.login-password {
  padding-top: 10px;
}
</style>
