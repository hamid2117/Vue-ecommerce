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
    <a @click="toggleSidebar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>cart ({{ totalQuantity() }})</span>
    </a>
  </header>
  <Sidebar
    v-show="isSidebar"
    :remove="removeItem"
    :cart="cart"
    :inventory="inventory"
    :toggle="toggleSidebar"
  />
  <router-view :inventory="inventory" :addToCart="addToCart" />
</template>
<!--<style scoped>  // if we scoped then css will only use in this file -->

<script>
import food from '@/food.json'
import Sidebar from '@/components/Sidebar.vue'
export default {
  components: { Sidebar },
  // eslint-disable-next-line
  data() {
    return {
      isSidebar: false,
      inventory: [],
      cart: {}
    }
  },
  methods: {
    // eslint-disable-next-line
    addToCart(name, index) {
      if (!this.cart[name]) this.cart[name] = 0
      this.cart[name] += this.inventory[index].quantity
    },
    // eslint-disable-next-line
    toggleSidebar() {
      this.isSidebar = !this.isSidebar
    },
    // eslint-disable-next-line
    removeItem(key) {
      delete this.cart[key]
    },
    // eslint-disable-next-line
    totalQuantity() {
      return Object.values(this.cart).reduce((total, current) => {
        return total + current
      }, 0)
    }
  },
  // eslint-disable-next-line
  async mounted() {
    this.inventory = food
  }
}
</script>
