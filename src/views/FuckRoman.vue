<template>
    <div>
        <div>
            <vue-scratchable v-slot="{ init }" :brushOptions="brush" :hideOptions="hide" getPercentageCleared @percentageUpdate="updatePoints">
                <div class="wrapper">
                    <img :src="require('../assets/bird.jpg')" @load="init()">
                </div>
            </vue-scratchable>
        </div>
    </div>
</template>

<script>
import VueScratchable from 'vue-scratchable';
import paperPattern from '../assets/paper.jpg';

export default {
  components: {
    VueScratchable,
  },
  data() {
    return {
      percentage: 0,
      hide: {
        type: 'pattern',
        src: paperPattern,
        repeat: 'repeat',
      },
      brush: {
        size: 60,
        shape: 'round',
      },
    };
  },
  methods: {
    updatePoints(percentage) {
      this.percentage = percentage;
    },
  },
};
</script>

<style>
body {
  background-color: #333;
  margin: 0;
}

#app {
  font-family: 'Open Sans', sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
}

.vue-scratchable-wrapper {
  background-color: white;
}

h3 {
  color: #2c3e50;
  text-align: center;
}

a {
  color: #2196f3;
}
</style>