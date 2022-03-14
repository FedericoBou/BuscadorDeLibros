<template>
  <div id="app">
    <div class="container">
      
      <title-author></title-author>

      <author-form></author-form>

      <book-list></book-list>
     
    </div>
  </div>
</template>

<script>
import BookList from "@/components/BookList";
import AuthorForm from "@/components/AuthorForm";
import TitleAuthor from "@/components/TitleAuthor";



export default {
  name: "App",
  components: {
    BookList,
    AuthorForm,
    TitleAuthor,
    
  },
 
};
</script>

<style>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1em;
}
</style>
