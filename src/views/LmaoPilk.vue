<template>
    <div class="max-w-sm text-sm font-medium px-2">
        <div class="text-xl mt-4 text-red-500 font-bold p-2">gel gbathr ohg ubyr</div>
        <div class="p-2"><a href="https://rot13.com/" class="text-blue-600 underline bg-white">Rot13</a></div>
        <div>
          <div class="text-sm italic">God has abandoned us, consume his nectar</div>
        </div>
        <div class="px-8 py-2">
            <vue-scratchable v-slot="{ init }" :brushOptions="brush" :hideOptions="hide" getPercentageCleared @percentageUpdate="updatePoints">
                <div class="wrapper">
                    <img :src="require('../assets/pilk.png')" @load="init()">
                </div>
            </vue-scratchable>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full">
            
          </div>
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
        size: 50,
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