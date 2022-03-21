<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flex ">
    <div class="container  d-flex flex-row  ">
      <router-link class="navbar-brand" to="/">Book Finder</router-link>

        <ul class="navbar-nav ml-auto d-flex justify-content-end">
          <li class="nav-item active" v-if="!user">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item" v-if="!user">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-if="user">
            <a class="nav-link" href="" @click.prevent="logout">Logout</a>
          </li>
        </ul>
      
    </div>
  </nav> -->

  <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand class="m-3"><router-link class="navbar-brand" to="/">Book Finder</router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="nav-item m-2" v-if="!user"><router-link class="nav-link" to="/register">Register</router-link></b-nav-item>
        <b-nav-item class="nav-item m-2" v-if="!user"><router-link class="nav-link" to="/login">Login</router-link></b-nav-item>
        <b-nav-item class="nav-item m-2" v-if="user"><a class="nav-link" href="" @click.prevent="logout">Logout</a></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>



<script>
export default {
  data() {
    return {
      user: "",
    };
  },
  mounted() {
    if (localStorage.activeUser) {
      let activeUser = localStorage.activeUser;
      this.user = JSON.parse(activeUser);
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("activeUser");
      this.$router.push("/login");
      window.location.reload();
    },
  },
};
</script>

<style></style>