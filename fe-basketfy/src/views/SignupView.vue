<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="signup">
    <!-- Start -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <div class="rounded shadow">
              <div class="p-4 border-bottom">
                <h5 class="mb-0">Sign up for Basketfy :</h5>
              </div>

              <div class="p-4">
                <form v-on:submit.prevent="submit()">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">First Name</label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-control"
                          v-model="newUserParams.first_name"
                        />
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Last Name</label>
                        <input
                          name="name"
                          id="name2"
                          type="text"
                          class="form-control"
                          v-model="newUserParams.last_name"
                        />
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Your Email</label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          class="form-control"
                          v-model="newUserParams.email"
                        />
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Username</label>
                        <input
                          name="number"
                          id="number"
                          type="text"
                          class="form-control"
                          placeholder="What others will see"
                          v-model="newUserParams.username"
                        />
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input
                          name="number"
                          id="number"
                          type="password"
                          class="form-control"
                          v-model="newUserParams.password"
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Age</label>
                        <input
                          name="number"
                          id="number"
                          type="text"
                          class="form-control"
                          placeholder="Optional - will help us compare investing styles"
                          v-model="newUserParams.age"
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Password Confirmation</label>
                        <input
                          name="number"
                          id="number"
                          type="password"
                          class="form-control"
                          v-model="newUserParams.password_confirmation"
                        />
                      </div>
                    </div>
                  </div>
                  <!--end row-->

                  <div class="row">
                    <div class="col-sm-12">
                      <input type="submit" id="submit" name="send" class="btn btn-primary" value="Save changes" />
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </form>
                <!--end form-->
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
  </div>
</template>
