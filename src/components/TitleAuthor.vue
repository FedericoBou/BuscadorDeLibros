<template>
  <div class="bg ">
    <h1 class="title text-center">
      {{ author.toUpperCase() }} Has
      {{ countBooks != 0 ? countBooks : "" }} Books
    </h1>
  </div>
</template>


<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "TitleAuthor",
  computed: {
    ...mapState(["author"]),
    ...mapGetters(["countBooks"]),
  },
};
</script>
<style scoped>

</style>