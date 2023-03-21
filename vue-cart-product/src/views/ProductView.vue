<template>
  <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
      <div v-for="(product, i) in inventory" :key="product.id" class="card">
        <div class="card-title">{{ product.name }}</div>
        <div class="card-body">
          <i class="icofont-10x icofont-carrot"></i>
          <form>
            <div class="row">
              <div class="cell">
                <label>Type:</label>
              </div>
              <div class="cell">
                <em>{{ product.type }}</em>
              </div>
            </div>
            <div class="row">
              <div class="cell">
                <label>Price:</label>
              </div>
              <div class="cell">${{ product.price.USD }}</div>
            </div>
            <div class="row">
              <div class="cell">
                <label>Quantity:</label>
              </div>
              <div class="cell">
                <input type="number" v-model.number="product.quantity" />
              </div>
            </div>
          </form>
        </div>
        <div class="card-footer">
          <button @click="addToCart(product.name, i)" class="btn btn-light">
            add to cart
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: ['inventory', 'addToCart']
}
</script>
