<template>
  <main :style="[currentPattern ? { backgroundImage: 'url(' + currentPattern.image + ')' } : '']">
    <header>
      <div class="wrapper-content">
      </div>
    </header>
    <Nuxt />
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
      ...mapGetters({
        currentPattern: 'patterns/getCurrentPattern',
    }),
  },
}
</script>

<style>
.wrapper-content {
  max-width: 960px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
main {
  min-height: 100vh;
  background-color: #efefef;
  background-size: contain;
}
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
header {
  height: 50px;
  background: #111;
}
</style>
