<template>
    <main class="restau">
        <div class="res-head">
            <h1>餐馆</h1>
            <AppSelect @change="selectedRes = $event"/>
        </div>

        <AppResInfo :datasource="filterRes"/>
    </main>
</template>

<script>
import AppResInfo from '../components/AppResInfo.vue'
import AppSelect from '../components/AppSelect.vue'
import { mapState } from 'vuex'

export default {
    components:{
        AppResInfo,
        AppSelect
    },
    data() {
        return {
            selectedRes:""
        }
    },
    computed:{
    ...mapState(["fooddata"]),
    filterRes() {
        if(this.selectedRes){
            return this.fooddata.filter((el) => {
                let name = el.name
                return name.includes(this.selectedRes)
            })
        }else{
            return this.fooddata
        }
    }
  }
    
}
</script>