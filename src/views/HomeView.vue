<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import {onMounted} from "vue";
import useHashRoute from "@/Hooks/useHashRoute";

const hashRoute = useHashRoute();

onMounted(() => {
  hashRoute.set({
    x: [1, 2, 3, 4, 5, 5, 5, 5, 5, 55,],
    y: [1, 2, 3, 4, 5, 5, 5, 5, 5, 55,],
    z: [1, 2, 3, 4, 5, 5, 5, 5, 5, 55,]
  });
  console.log(hashRoute.get());
})
</script>

<template>

  <main>
    <TheWelcome/>
  </main>
</template>
