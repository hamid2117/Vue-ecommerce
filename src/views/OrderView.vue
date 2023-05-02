<template>
  <main class="wrapper">
    <h1>Past Orders</h1>

    <table class="product-table">
      <thead>
        <tr>
          <td><span class="sr-only">Product Image</span></td>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Total</td>
          <td><span class="sr-only">Actions</span></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) in cart" :key="key">
          <td><i class="icofont-carrot icofont-4x"></i></td>
          <td>{{ key }}</td>
          <td>${{ getPrice(key) }}</td>
          <td class="center">{{ value }}</td>
          <td>${{ (getPrice(key) * value).toFixed(2) }}</td>
          <td>
            <button @click="addPastItem(key, value)" class="btn btn-dark">
              Add
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
export default {
  props: ['cart', 'inventory', 'addPastItem'],

  methods: {
    // eslint-disable-next-line
    getPrice(name) {
      const product = this.inventory.find((p) => {
        return p.name === name
      })
      return product.price.USD
    }
  }
}
</script>
