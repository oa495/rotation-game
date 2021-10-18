<template>
  <main class="home">
    <button v-on:click="startGame()" v-if="!gameStarted">Start Game </button>
    <Canvas v-if="gameStarted" @ended="endGame" />
  </main>
</template>
<script>
import Canvas from '@/components/Canvas.vue'

export default {
  name: 'Home',
  components: {
    Canvas
  },
  data() {
    return {
      gameStarted: false
    };
  },
   methods: {
    startGame() {
      this.gameStarted = true;
    },

    endGame() {
      this.gameStarted = false;
    }
  }
}
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
