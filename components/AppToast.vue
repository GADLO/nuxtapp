<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.toast{
    color: aliceblue;
    background-color: rgb(219, 95, 46);
    border-radius: 10px;
    text-align: center;
    width: 100px;
    position: absolute;
    padding: 20px;
    margin-left: 60%;
    transition: .2s ease-in; 

    a{
        text-decoration: none;
        
        &:link{
            color: rgb(0, 162, 255);
        }

        &:focus{
            color: rgb(255, 102, 0);
        }

        &:visited{
            color: rgb(0, 217, 255);
        }
    }

}
</style>