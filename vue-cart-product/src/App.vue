<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/product" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <router-link to="/order" class="top-bar-link">
        <span>Past Orders</span>
      </router-link>
    </nav>
    <!--<a @click="toggleSidebar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>cart ({{ totalQuantity() }})</span>
    </a>-->
  </header>
  <router-view />
</template>
<!--<style scoped>  // if we scoped then css will only use in this file -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
