<template>
    <div class="max-w-lg text-sm font-medium px-2">

        <div>
          <div class="font-bold text-white mt-4 text-lg">MAKE10 - <span class="text-green-400">$50</span></div>
          <base-timer></base-timer>  
          <div class="text-xl pt-2">{{Math.ceil(Math.random()*9)}} {{Math.ceil(Math.random()*9)}} {{Math.ceil(Math.random()*9)}} {{Math.ceil(Math.random()*9)}}</div>
        </div>
        <div class="px-8 py-2 text-gray-500 flex flex-wrap">
          <div class="text-white">Hint: use this precision whiteboard to write your working out</div>
            <vue-scratchable class="text-gray-500 justify-start" v-slot="{ init }" :brushOptions="brush" :hideOptions="hide" getPercentageCleared @percentageUpdate="updatePoints">
              <h1>Name this real location to access /gbathr</h1>
                <div class="wrapper">
                    <img :src="require('../assets/luna.jpg')" @load="init()">
                </div>
                <div class="w-2">Rot13</div>  
            </vue-scratchable>
        </div>
        <div class="text-xl mt-4 text-red-500 font-bold p-2">gel</div>
    </div>
</template>

<script>
import VueScratchable from 'vue-scratchable';
import paperPattern from '../assets/paper.jpg';
import BaseTimer from './BaseTimer.vue';

export default {
  components: {
    VueScratchable,
    BaseTimer,
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
        size: 2,
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
}
.vue-scratchable-wrapper {
  background-color: white;
}
</style>