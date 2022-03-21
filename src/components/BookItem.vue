<template>
  <div class="card">
    <div class="card-content m-5">
      <div class="media">
        <div class="media-left d-flex justify-content-center">
          <figure class="">
            <img
              v-if="!book.imageLinks"
              src="https://books.google.es/googlebooks/images/no_cover_thumb.gif"
              alt=""
              width="180%" height="auto"
              class="mb-5"
            />
            <img v-else :src="book.imageLinks.thumbnail" alt=""  width="100%"  height="145"  class="mb-5"/>
          </figure>
        </div>
        <div class="d-flex flex-column justify-content-center">
          <b-list-group flush>
          <b-list-group-item>
            <h5 class="text-center">Title:</h5>
            <p id="title" class="font-weight-bolder text-center"> {{ book.title }}</p></b-list-group-item>
            <h5 class="text-center mt-2">Author:</h5>
            <b-list-group-item><p id="author" class="text-center "> {{ book.authors[0] }}</p></b-list-group-item>
           </b-list-group>
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

<style scoped>
.card{
  backdrop-filter: blur(3px); 
  background-color: rgba(255, 255, 255, 1); 
  border-radius: 20px; box-shadow: 0px 35px 68px 0px rgba(29, 35, 44, 0.5), 
  inset 0px -8px 16px 0px rgba(50, 58, 68, 0.6), 
  inset 0px 11px 28px 0px rgb(255, 255, 255);
}

#title{
  font-family: Tahoma, Geneva, sans-serif;
font-size: 20px;
letter-spacing: 1px;
word-spacing: 2px;
color: #000000;
font-weight: normal;
text-decoration: none;
font-style: normal;
font-variant: normal;
text-transform: capitalize;
}
#author{
  font-family: Tahoma, Geneva, sans-serif;
font-size: 20px;
letter-spacing: 1px;
word-spacing: 2px;
color: #000000;
font-weight: normal;
text-decoration: none;
font-style: normal;
font-variant: normal;
text-transform: capitalize;
}
h5{
    font-family: Tahoma, Geneva, sans-serif;
font-size: 20px;
letter-spacing: 1.1px;
word-spacing: 2px;
color: #000000;
font-weight:200;
text-decoration: none;
font-style:italic;
font-variant: normal;
text-transform: uppercase;
}
</style>