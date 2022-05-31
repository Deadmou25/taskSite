<template>
  <div id="app">
    <nav>
      <router-link to="/cats">Все котики</router-link> |
      <router-link to="/favorites">Любимые котики</router-link>
    </nav>
    <router-view/>
  </div>
</template>


<script>

</script>


<style lang="scss">
*{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;

}

nav {
  padding: 30px;
  height: 32px;
  background: #2196F3;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.24);
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {

    }
  }
}
</style>

