<script setup>
import useCryptedRoute from "@/Hooks/useCryptedRoute";

const {getRoute, setRoute, route, router, state: filterState} = useCryptedRoute();

const onSubmit = async () => {
  await setRoute(filterState.value);
};

</script>

<template>

  <main>
    <input type="search" v-model="filterState.username"/>
    {{ filterState.username }}

    <button @click.prevent="onSubmit">CLick!</button>

  </main>
</template>
