<template>
  <div class="home">
    <h1>All Destinations</h1>

    <div class="destinations">
      <router-link v-for="item in destinations" :key="item.id" :to="{name: 'destination.show', params: {id: item.id}}">
        <h2>
          {{ item.name }}
        </h2>
        <img :src="`/images/${item.image}`" :alt="item.name" />
      </router-link>
    </div>
  </div>
</template>

<script>
import sourceData from "../data.json";

export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>

<style></style>
