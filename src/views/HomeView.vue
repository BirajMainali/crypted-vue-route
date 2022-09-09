<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import {onMounted, ref, watch} from "vue";
import useHashRoute from "@/Hooks/useHashRoute";

const {set, get, state: filterState} = useHashRoute();

const onSubmit = () => {
  set(filterState.value);
};

</script>

<template>

  <main>
    <input type="search" v-model="filterState.username"/>
    {{filterState.username}}

    <button @click.prevent="onSubmit">CLick!</button>

  </main>
</template>
