<template>
  <div class="game">
    <span>{{points}}</span>
    <canvas id="myCanvas" v-on:mousedown="mouseDown"></canvas>
  </div>
</template>

<script>
import Game from '../classes/game';

const paper = require('paper');
paper.install(window);

export default {
  name: "Canvas",
  data() {
    return {
      tool: null,
      game: null
    }
  },
  computed: {
    points: function() {
      if (!this.game) return;
      return this.game.points;
    }
  },
  methods: {
    mouseDown() {
      this.tool.onMouseDown = () => {
        if (!this.game.complete) {
          const shape = this.game.shape;
          if (shape.speed > 0) {
            shape.speed -= 1;
          }
          if (shape.speed === 0) {
            this.game.checkRotation();
            this.game.completeRound();
          }
        }
        else {
          console.log('Complete');
        }
      }
    }
  },
  mounted() {
    paper.setup('myCanvas');
    this.tool = new Tool();
    this.game = new Game(3);

    view.onFrame = () => {
      if (!this.game.complete) {
        const shape = this.game.shape;
        shape.rotate(shape.speed);
      }
    }
  }
}
</script>

<style scoped>
canvas {
  z-index: 1;
  position: fixed;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
}
</style>