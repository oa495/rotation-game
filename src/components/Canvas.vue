<template>
  <div class="game">
    <section>
      <span>{{points}}</span>
      <div class="controls">
        <button v-on:click="restart()">Restart</button>
        <button v-on:click="endGame()">End</button>
      </div>
    </section>
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
  props: ['endGame'],
  computed: {
    points: function() {
      if (!this.game) return;
      return this.game.points;
    }
  },
  methods: {
    restart() {
      project.activeLayer.removeChildren();
      this.game = new Game(3);
    },
    endGame() {
      this.$emit('ended');
    },
    mouseDown() {
      this.tool.onMouseDown = () => {
        if (!this.game.completed) {
          const shape = this.game.shape;
          if (shape.speed > 0) {
            shape.speed -= 1;
          }
          if (shape.speed === 0) {
            this.game.checkRotation();
            this.game.completeRound();
          }
        }
      }
    }
  },
  mounted() {
    paper.setup('myCanvas');
    this.tool = new Tool();
    this.game = new Game(3);

    view.onFrame = () => {
      if (!this.game.completed) {
        const shape = this.game.shape;
        shape.rotate(shape.speed);
      } else {
        router.push('end');
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

.game section {
  z-index: 100;
  position: absolute;
  display: flex;
  width: 98%;
  justify-content: space-between;
  top: 0;
  padding: 1.2em 0.6em;
}
</style>