<template>
<div>
    <button class="d-btn d-btn-primary" :class='btnType'>primary</button>
</div>   
</template>

<script>
export default {
    props:{
        btnType:''
    }
}
</script>