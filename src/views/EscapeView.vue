<template>
    <div class="max-w-sm text-sm font-medium px-2">
        <div class="text-xl mt-4 text-red-500 font-bold p-2">gel gbathr</div> 
        <div class="py-2">
            <vue-scratchable v-slot="{ init }" :brushOptions="brush" :hideOptions="hide" getPercentageCleared @percentageUpdate="updatePoints">
              <h1 class="text-gray-500">Name this <span class="text-xs">Rot13</span> location to access /ohg</h1>
                <div class="wrapper">
                    <img :src="require('../assets/ghost.jpg')" @load="init()">
                </div>
            </vue-scratchable>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full">
            
          </div>
        </div>
        <div>

          <div class="font-bold text-white mt-4">Action - <span class="text-green-400">$10</span></div>
          <div class="text-sm">Text Fiona "demi lovato flicked my vagina and called me fat"</div>
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
        size: 30,
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