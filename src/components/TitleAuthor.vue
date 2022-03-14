<template>
  <div>
    <h1 class="title">
      {{ author.toUpperCase() }} TIENE
      {{ countBooks != 0 ? countBooks : "" }} LIBROS
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