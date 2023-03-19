let app = Vue.createApp({
  data() {
    return {
      isSidebar: false,
      inventory: [],
      cart: {},
    };
  },
  methods: {
    addToCart(name, index) {
      if (!this.cart[name]) this.cart[name] = 0;
      this.cart[name] += this.inventory[index].quantity;
    },
    toggleSidebar() {
      this.isSidebar = !this.isSidebar;
    },
    removeItem(key) {
      delete this.cart[key];
    },
    totalQuantity() {
      return Object.values(this.cart).reduce((total, current) => {
        return total + current;
      }, 0);
    },
  },
  async mounted() {
    const res = await fetch("./food.json");
    const data = await res.json();
    this.inventory = data;
  },
});
// Sidebar Component to use in every page
app.component("sidebar", {
  props: ["toggle", "cart", "inventory", "remove"],
  methods: {
    cartTotal() {
      return Object.entries(this.cart)
        .reduce((total, current, index) => {
          return total + this.getPrice(current[0]) * current[1];
        }, 0)
        .toFixed(2);
    },
    getPrice(name) {
      const product = this.inventory.find((p) => {
        return p.name === name;
      });
      return product.price.USD;
    },
  },
  template: `
      <aside class="cart-container">
        <div class="cart">
          <h1 class="cart-title spread">
            <span>
              Cart
              <i class="icofont-cart-alt icofont-1x"></i>
            </span>
            <button @click="toggle" class="cart-close">&times;</button>
          </h1>

          <div class="cart-body">
            <table class="cart-table">
              <thead>
                <tr>
                  <th><span class="sr-only">Product Image</span></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th><span class="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(value, key) in cart" >
                  <td><i class="icofont-carrot icofont-3x"></i></td>
                  <td>{{key}}</td>
                  <td>\${{getPrice(key)}}</td>
                  <td class="center">{{value}}</td>
                  <td>\${{(getPrice(key) * value).toFixed(2)}}</td>
                  <td class="center">
                    <button @click="remove(key)" class="btn btn-light cart-remove">
                      &times;
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <p class="center" v-if="!Object.values(cart).length"><em>No items in cart</em></p>
            <div class="spread">
              <span><strong>Total:</strong> \${{ cartTotal() }}</span>
              <button class="btn btn-light">Checkout</button>
            </div>
          </div>
        </div>
      </aside>
        `,
});
app.mount("#app");
