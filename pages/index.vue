<template>
  <div>
    <AppMenu />
    <app-header />
    <Restau />
    <app-footer />
  </div>
</template>

<script>
import AppMenu from '../components/AppMenu.vue'
import AppHeader from '../components/AppHeader.vue'
import Restau from '../components/Restau.vue'
import AppFooter from '../components/AppFooter.vue'


export default {
  name: 'IndexPage',
  components:{
    AppMenu,
    AppHeader,
    Restau,
    AppFooter
  },
  
}
</script>
