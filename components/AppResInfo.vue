<template>
  <section class="resinfo">
    <div v-for="store in datasource" :key="store.id" class="item">
      <h2>{{ store.name }}</h2>
      <div class="row">
        <p class="d-btn d-btn-success col-2">
          配送时间 {{ store.deliveryTime }}
        </p>
        <p class="d-btn d-btn-warning col-2">评分 {{ store.rating }}</p>
        <p v-if="store.freeDelivery" class="d-btn d-btn-primary col-2">
          <span>免费配送</span>
        </p>
      </div>

      <div class="menu">
        <div
          v-for="menuitem in store.menu"
          :key="menuitem.id"
          class="menuitem"
          :style="`background:url(${menuitem.img}) no-repeat center center`"
        >
          <div class="iteminfo">
            <div class="item col-4">
              <h4>{{ menuitem.item }}</h4>
              <p>{{ menuitem.price }}</p>
            </div>
            <div class="col-6">
              <nuxt-link :to="`/items/${menuitem.id}`">
                <button class="d-btn d-btn-primary col-3">查看</button>
              </nuxt-link>
              <nuxt-link :to="`/items/${menuitem.id}`"
                ><button class="d-btn d-btn-primary col-3">
                  详情
                </button></nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    datasource: {
      type: [Array, Object]
    }
  }
}
</script>
