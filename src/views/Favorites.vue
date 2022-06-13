<template>
  <div class="favorites">
    <div class="container">
      <div
          v-for="(cat,index) in $store.state.favorites"
          :key="index"
      >
        <div>
          <img :src="cat.url" alt="">
          <img src="https://cdn-icons-png.flaticon.com/128/1000/1000621.png" alt="" class="likes"
               @click="deleteFavoritesItem"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'favoritesItem',
  methods:{
    deleteFavoritesItem(){
      this.$store.state.favorites.pop()
    }
  }

}
</script>


<style lang="scss">
.favorites {
  display: flex;
  justify-content: center;
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
}
</style>