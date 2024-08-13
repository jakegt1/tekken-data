<script setup lang="ts">
import { Sidestep, data, type TekkenCharacter } from '@/lib/data';
import { onMounted, ref, type Ref, computed, type ComputedRef, type VNodeRef } from 'vue';

const filter: Ref<string> = ref("");
const characters: ComputedRef<TekkenCharacter[]> = computed(() => {
  return data.characters.filter((character) => character.name.toLowerCase().startsWith(filter.value.toLowerCase()));
});

const input: VNodeRef = ref(null);

function clearFilter() {
  filter.value = "";
}

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

onMounted(() => {
  input.value.focus();
});

</script>

<template>
  <div class="container">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input class="input" ref="input" type="text" placeholder="Filter character.." v-model="filter">
      </div>
      <div class="control">
        <button class="button is-danger" @click="clearFilter">
          Clear
        </button>
      </div>
    </div>
    <div class="is-flex is-justify-content-center is-flex-wrap-wrap">
      <div class="media mx-1 my-5 py-2 is-align-self-center" v-for="character in characters">
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
  </div>
</template>

<style lang="scss">
</style>
