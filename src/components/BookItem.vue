<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img
              v-if="!book.imageLinks"
              src="https://books.google.es/googlebooks/images/no_cover_thumb.gif"
              alt="smiley face"
            />
            <img v-else :src="book.imageLinks.thumbnail" alt="Real Image" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ book.title }}</p>
          <p class="subtitle is-6">{{ book.authors[0] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookItem",
  props: ["book"]
};
</script>