<template>
  <section class="masthead" role="img" aria-label="Image Description">
    <h1>
      The Nuxt Food App
    </h1>
    <button class="d-btn d-btn-primary">
      When a hero comes along
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
}

h1 {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 11vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 40px;
}

</style>