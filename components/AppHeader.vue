<template>
  <section class="masthead" role="img" aria-label="Image Description">
    <h1>
      基于Vue Nuxt.js
    </h1>
    <button class="d-btn d-btn-primary">
      查看更多
    </button>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" >
.masthead {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 80vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-size: cover !important;
  background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 33%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(https://gurulex.com/wp-content/uploads/2021/10/a-photo-of-ingriedients-for-cooking.jpg)
      no-repeat center center scroll;

        h1{
          color: aliceblue;
        }
}



</style>