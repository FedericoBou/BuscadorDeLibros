<template>
  <div id="app">
    <Navbar />
    <main class="my-3">
      <div class="container"> 
        <router-view />       
      </div>
    </main>
     <Footer/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "@/components/Footer";

export default {
  components: {
    Navbar,
    Footer
  },
};
</script>