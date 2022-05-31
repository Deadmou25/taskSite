<template>
  <div class="cats">
    <div class="container" >
      <div
          v-for="cat in $store.state.imageCats"
          :key="cat.id"
      >
        <div>
          <img :src="cat.url" alt=""><button class="favorites"></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";


export default {
  name: 'Cats',
  data() {
    return {

    }
  },

  methods: {
    getCats() {
      axios.defaults.headers.common['x-api-key'] = "ed0b8e9a-4f6c-4907-840d-2e478373aabc"
      axios.get('https://api.thecatapi.com/v1/images/search', {
        params: {
          limit: 15,
          page:2
        }
      })
          .then(response => {
            this.$store.state.imageCats = response.data;
          })
          .catch(e => {
            console.log(e);
          })

    },

  },

  computed: {},

  created() {
    this.getCats();
  },
}
</script>

<style lang="scss">
html,body{
  height: 100%;
  margin:0;
}

.container {
  display: flex;
  flex-wrap: wrap;
  img{
    width: 225px;
    height: 225px;
    margin: 24px;
  }
   div{
     div{
       position: relative;
       .favorites{
        position: absolute;
         bottom: 30px;
         right: 100px;
       }
       img{

       }
     }
   }
}

.container  {

}

</style>
