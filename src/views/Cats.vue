<template>
  <div class="cats">
    <div class="container">
      <div
          v-for="(cat,index) in $store.state.imageCats"
          :key="index"
      >
        <div>
          <img :src="cat.url" alt="">
          <img src="https://cdn-icons-png.flaticon.com/128/1000/1000621.png" alt="" class="likes"
               @click="getElementToFavorites(cat)"
               v-if="favorites"
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: 'CatsItem',
  data() {
    return {
      favorites:true
    }
  },

  methods: {

    getCats() {
      axios.defaults.headers.common['x-api-key'] = "ed0b8e9a-4f6c-4907-840d-2e478373aabc"
      axios.get('https://api.thecatapi.com/v1/images/search', {
        params: {
          limit: 15,
          page: this.$store.state.pages
        }
      })
          .then(response => {
            this.$store.state.imageCats = response.data;
            console.log(response)
          })
          .catch(e => {
            console.log(e);
          })
    },

    scroll() {
      setTimeout(() => {
        window.onscroll = () => {
          if (this.$store.state.wait) {
            return
          }
          this.$store.state.wait = true;
          let bottomWindow = window.innerHeight === document.documentElement.offsetHeight;
          if (bottomWindow) {
            axios.defaults.headers.common['x-api-key'] = "ed0b8e9a-4f6c-4907-840d-2e478373aabc"
            axios.get('https://api.thecatapi.com/v1/images/search', {
              params: {
                limit: 15,
                page: this.$store.state.pages
              }
            }).then(response => {
              this.$store.state.imageCats.push(...response.data);
            }).catch(e => {
              console.log(e);
            }).finally(() => {
              this.$store.state.wait = false;
              this.$store.state.pages++
            })
          }
        }
      }, 500)
    },

    getElementToFavorites(item){
      if( this.$store.state.favorites.includes(item)){
        return
      }
      this.$store.state.favorites.push(item)
      this.favorites=true
    },
  },

  mounted() {
    this.scroll()
  },

  created() {
    this.getCats()
  },
}
</script>

<style lang="scss">
html, body {
  height: 100%;
  margin: 0;
}

.cats {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  .container {
    display: flex;
    flex-wrap: wrap;
    max-width: 1440px;

    img {
      width: 235px;
      height: 235px;
      margin: 24px;
    }

    div {
      div {
        position: relative;

        .likes {
          position: absolute;
          bottom: 16px;
          right: 16px;
          height: 20px !important;
          width: 20px !important;
        }
      }
    }
  }

  .loading {
    width: 100px;
    height: 45px;
  }

  .content {
    flex-wrap: wrap;
  }
}
</style>
