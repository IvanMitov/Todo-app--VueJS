<template>
  <div class="todos">
    <Todos />
  </div>
</template>

<script>
import Todos from '@/components/Todos.vue'

export default {
  name: 'todos',
  components: {
    Todos
  }
}
</script>

<style lang="scss">
  .todos {
    margin: 5rem auto;
    max-width: 1070px;
    height: 100%;
  }
</style>
