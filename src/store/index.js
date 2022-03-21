import Vue from 'vue'
import Vuex from 'vuex'
import validator from "validator";


Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    author:"",
    books: [],
  },
  mutations: {
    LOAD_AUTHOR: (state, payload) => (state.author = payload),
    LOAD_BOOKS: (state, payload) => (state.books = payload),
    

  },
  getters: {
    countBooks: (state) => state.books.length,
  },
  actions: {
    GET_BOOKS: (state) => {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${state.state.author}`
      )
        .then((res) => {
          return res.json();
          
        })
       
        .then((response) => {
          const books = response.items.map((book) => book.volumeInfo)
          state.commit("LOAD_BOOKS",books)
        });
        
    },
  },
});