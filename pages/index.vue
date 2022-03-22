<template>
  <div>
    <AppMenu />
    <app-header />
    <app-res-info />
    <app-footer />
  </div>
</template>

<script>
import AppMenu from '../components/AppMenu.vue'
import AppHeader from '../components/AppHeader.vue'
import AppResInfo from '../components/AppResInfo.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'IndexPage',
  components:{
    AppMenu,
    AppHeader,
    AppResInfo,
    AppFooter
  }
}
</script>
