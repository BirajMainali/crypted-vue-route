<script setup>
import useCryptedRoute from "@/hooks/useCryptedRoute";

const {setRouteData, state: filterState} = useCryptedRoute();

const onSubmit = async () => {
  await setRouteData(filterState.value);
};

</script>

<template>

  <main>
    <input type="search" v-model="filterState.username"/>
    {{ filterState.username }}
    <button @click.prevent="onSubmit">Click!</button>

  </main>
</template>
