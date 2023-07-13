#  Crypted Vue Route

This template should help get you started developing with Vue 3 in Vite.

## Dependencies

- [Vue](https://vuejs.org) : This library is directly depended on Vue3

## Installation

> npm
```bash
npm i crypted-vue-route
```

> yarn
```bash
yarn add crypted-vue-route
```

> It is important to set up your project with Vue Router because this library externalizes the routing functionality, providing flexibility to customize and add your own version of routes

## Basic Usage
```js
<script setup>
    import {useCryptedRoute} from "crypted-vue-route";
    const {setRouteData, getRouteData, route, router, state: filterState} = useCryptedRoute();
    const onSubmit = async () => {
    await setRouteData(filterState.value);
};
</script>

<template>

    <main>
        <input type="search" v-model="filterState.username"/>
        {{ filterState.username }}
        <button @click.prevent="onSubmit">CLick!</button>

</main>
</template>
``` 
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
