<template>
  <div class="about">
    <About />
  </div>
</template>

<script>
import About from '@/components/About.vue'

export default {
  name: 'about',
  components: {
    About
  }
}
</script>

<style>
  .about {
    max-width: 1070px;
    margin: 5rem auto;
  }
</style>
