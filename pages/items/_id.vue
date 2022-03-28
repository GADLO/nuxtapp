<template>
  <main class="container">
    <section
      class="image"
      :style="`background: url(/${currentItem.img}) no-repeat center center`"
    ></section>

    <section class="details">
      <AppToast v-if="cartSubmitted">
        订单下达
        <br />前往
        <nuxt-link to="/cart">购物车</nuxt-link>
      </AppToast>
      <h1>{{ currentItem.item }}</h1>

      <h3>售价: ¥{{ currentItem.price.toFixed(2) }}</h3>

      <div class="quantity">
        <input type="number" min="1" v-model="count" class="inpt" />
        <button class="d-btn d-btn-primary" @click="addToCart">
          添加到购物车 - ¥{{ combinedPrice }}
        </button>
      </div>

      <fieldset v-if="currentItem.options">
        <legend>
          <h3>可选</h3>
        </legend>
        <div v-for="option in currentItem.options" :key="option">
          <input
            type="radio"
            name="option"
            :id="option"
            :value="option"
            v-model="itemOptions"
          />
          <label :for="option">{{ option }}</label>
        </div>
      </fieldset>

      <fieldset v-if="currentItem.addOns">
        <legend>
          <h3>搭配</h3>
        </legend>
        <div v-for="addon in currentItem.addOns" :key="addon">
          <input
            type="checkbox"
            name="addon"
            :id="addon"
            :value="addon"
            v-model="itemAddons"
          />
          <label :for="addon">{{ addon }}</label>
        </div>
      </fieldset>
    </section>

    <section class="options">
      <h3>介绍</h3>
      <p>{{ currentItem.description }}</p>
    </section>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import Input from '../../components/Input.vue'
import AppToast from '@/components/AppToast.vue'

export default {
  components: {
    Input,
    AppToast
  },
  data() {
    return {
      id: this.$route.params.id,
      count: 1,
      itemOptions: '',
      itemAddons: [],
      itemSizeAndCost: [],
      cartSubmitted: false
    }
  },
  computed: {
    ...mapState(['fooddata']),
    currentItem() {
      let result
      for (let i = 0; i < this.fooddata.length; i++) {
        for (let j = 0; j < this.fooddata.length; j++) {
          if (this.fooddata[i].menu[j].id === this.id) {
            result = this.fooddata[i].menu[j]

            break
          }
        }
      }

      return result
    },
    combinedPrice() {
      let total = this.count * this.currentItem.price
      return total.toFixed(2)
    }
  },
  methods: {
    addToCart() {
      let formOutput = {
        item: this.currentItem.item,
        count: this.count,
        options: this.itemOptions,
        addOns: this.itemAddons,
        combinedPrice: this.combinedPrice
      }
      this.cartSubmitted = true
      this.$store.commit('addToCart', formOutput)
    }
  }
}
</script>
