<script setup>
import useCryptedRoute from "@/hooks/useCryptedRoute";

const {setRouteData, state: filterState} = useCryptedRoute();

const onSubmit = async () => {
  await setRouteData(filterState.value);
};

</script>

<template>

  <main>
    <textarea v-model="filterState.username" cols="80" rows="10"/>
    <button @click.prevent="onSubmit">Click!</button>
  </main>
</template>
