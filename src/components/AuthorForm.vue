<template>
  <div>
    <div id="bgAuthor" class="field d-flex justify-content-center">
      <label class="label" for="author">
        <h3 class="AutName text-center font-weight-bold m-3">Name of author</h3>
        <div class="controlInput d-flex justify-content-center m-3">
          <b-form-input class="input mt-2" type="text" v-model="author" placeholder="NAME OF AUTHOR"/>    
        </div>
      </label>
    </div>
    <div class="field d-flex justify-content-center m-3">
      <div class="controlButtom">
        <button class="button is-link" @click="showBooks">Search</button>
      </div>
    </div>
    <Notification id="notifi" v-show="showNOtification" class="mt-2 pt-1">
      <p slot="body" class="text-center font-weight-bold">NO AUTHOR FOUND</p>
    </Notification>
  </div>
</template>
<script>

import Notification from "@/components/Notification.vue";

export default {
  components:{
    Notification,
  },
  name: "AuthorForm",
  data() {
      return {
        name: '',
        showNOtification: false,
      }
    },

  computed: {
    author: {
      get() {
        return this.$store.state.author;
      },
      set(value) {
        this.$store.commit("LOAD_AUTHOR", value);
      },
       nameState() {
        return this.name.length > 2 ? true : false
      }
    },
  },

  watch:{
    showNOtification(){
      if(this.showNOtification){
        setTimeout(() => {
          this.showNOtification = false
        },3000)
      }
    }
  },
  methods: {
    showBooks: function () {
      if (this.$store.state.author) {
        return this.$store.dispatch("GET_BOOKS");
      }else{
      this.showNOtification = true
      // alert('Introduzca un autor, por favor.');
      }
    },
  },
};
</script>


<style scoped>
.button {
	box-shadow:inset 38px 1px 0px -43px #caefab;
	background:linear-gradient(to bottom, #77d42a 5%, #5cb811 100%);
	background-color:#77d42a;
	border-radius:10px;
	border:1px solid #268a16;
	display:inline-block;
	cursor:pointer;
	color:#306108;
	font-family:Arial;
	font-size:16px;
	font-weight:bold;
	padding:9px 35px;
	text-decoration:none;
	text-shadow:0px -1px 8px #aade7c;
}
.button:hover {
	background:linear-gradient(to bottom, #5cb811 5%, #77d42a 100%);
	background-color:#5cb811;
}
.button:active {
	position:relative;
	top:1px;
}
.AutName{
 font-weight: bold;

}

#notifi{
  position: relative;
  
}

</style>