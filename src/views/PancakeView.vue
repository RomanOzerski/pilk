<template>
    <div class="max-w-lg text-sm font-medium px-2">
        <div class="text-xl mt-4 text-red-500 font-bold p-2">gel gbathr ohg</div>
        <div class="p-2"><a href="https://rot13.com/" class="text-blue-600 underline bg-white">Rot13</a></div> 
        <div class="px-8 py-2">
            <vue-scratchable v-slot="{ init }" :brushOptions="brush" :hideOptions="hide" getPercentageCleared @percentageUpdate="updatePoints">
              <h1 class="text-gray-500">Name this real location to access /ubyr</h1>
                <div class="wrapper">
                    <img :src="require('../assets/pancake.png')" @load="init()">
                </div>
            </vue-scratchable>
        </div>
    <div>

        <div class="font-bold text-white mt-4">Riddle - <span class="text-green-400">$50</span></div>

        <div class="mt-2">
            <div class="flex flex-wrap"><div class="w-full">You read the menu the waiter hands you. You see 3 pancakes.</div></div>
            <div class="flex flex-wrap"><div class="w-full">It reads:</div></div>
            <div class="flex flex-wrap"><div class="w-full">&nbsp;</div></div>
            <div class="flex flex-wrap"><div class="w-full">"Only one form is real. The others are false."</div></div>
            <div class="flex flex-wrap"><div class="w-full">"The real form will always speak the truth."</div></div>
            <div class="flex flex-wrap"><div class="w-full">"The false onse will only speak lies."</div></div>
            <div class="flex flex-wrap"><div class="w-full">&nbsp;</div></div>
            <div class="flex flex-wrap"><div class="w-full">The pancakes suddenly develop what look to be a mouth.</div></div>
            <div class="flex flex-wrap"><div class="w-full">&nbsp;</div></div>
            <div class="flex flex-wrap"><div class="w-full text-blue-300">"Please!" says the blueberry pancake. "You have to get me out of this nightmare! I am real!"</div></div>
            <div class="flex flex-wrap"><div class="w-full text-yellow-700">"Stop lying!" says the chocolate chip pancake. Then turning to you and spitting syrup as it speaks. "Blueberry's a fake, you know. I'm the real one!"</div></div>
            <div class="flex flex-wrap"><div class="w-full text-red-300">"What a load of crap," says the starwberry pancake. "Chocolate is a fake! Everyone knows I'm the only real one around here."</div></div>
            <div class="flex flex-wrap"><div class="w-full">&nbsp;</div></div>
            <div class="flex flex-wrap"><div class="w-full">Then silence, you know only one of them can be real?</div></div>
        </div>
        </div>



      <div class="flex flex-wrap ">
        <div class="w-1/2 ">
            <div class="p-2">
                  <dd class="font-semibold text-blue-300 bg-white p-2">Blueberry Pancake</dd>
            </div>
        </div>

        <div class="w-1/2 ">
            <div class="p-2">
                  <dd class="font-semibold text-yellow-700 bg-white p-2">Chocolate Chip Pancake</dd>
            </div>
        </div>

        <div class="w-1/2">
            <div class="p-2">
                  <dd class="font-semibold text-red-300 bg-white p-2">Strawberry Pancake</dd>
            </div>
        </div>

        <div class="w-1/2 min">
            <div class="p-2">
                  <dd class="font-semibold text-gray-900 bg-white">I don't care! Pancakes are pancakes (eat them all)</dd>
            </div>
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