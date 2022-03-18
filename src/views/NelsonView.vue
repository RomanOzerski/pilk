<template>
    <div class="max-w-lg text-sm font-medium px-2">
        <div class="text-xl mt-4 text-red-500 font-bold">Welcome V,</div>
        <div class="p-2 flex justify-start">The quicker you solve the cipher, the quicker you'll receive your reward.</div>
        <div class="px-8 py-2">
            <vue-scratchable v-slot="{ init }" :brushOptions="brush" :hideOptions="hide" getPercentageCleared @percentageUpdate="updatePoints">
              <h1 class="text-gray-500">Name this real location to access /gel</h1>
                <div class="wrapper">
                    <img :src="require('../assets/bar.jpg')" @load="init()">
                </div>
            </vue-scratchable>
            <div class="w-2">Rot13</div>  
        </div>
      <div>

      <div class="font-bold text-white mt-4">Bonus Question - <span class="text-green-400">$10</span></div>
          <div class="text-sm">You have 5 sheckles left, what do you do?</div>
          <div class="px-5 p-2">
            <dd class="font-semibold text-gray-900 bg-white">Buy yourself a Leaf-Lovers</dd>
          </div>

          <dd class="text-lg font-bold">OR</dd>

          <div class="px-5 p-2">
            <dd class="font-semibold text-gray-900 bg-white">Tip the bartender 5 times</dd>
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