<script setup lang="ts">
import { Sidestep, data } from '@/lib/data';
function colourToSidestep(sidestep: Sidestep) {
  switch(sidestep) {
    case Sidestep.SSL:
      return "has-text-link";
    case Sidestep.SSR:
      return "has-text-danger";
    case Sidestep.DONT:
      return "has-text-warning";
  }
}

</script>

<template>
  <div class="container is-flex is-justify-content-center is-flex-wrap-wrap">
    <div class="media mx-1 my-5 py-2 is-align-self-center" v-for="character in data.characters">
      <figure class="media-left">
        <p class="image is-64x64">
          <img :src="character.img"/>
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p class="title is-5">{{ character.name }}</p>
          <span :class="colourToSidestep(character.sidestep)">{{character.sidestep}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>
