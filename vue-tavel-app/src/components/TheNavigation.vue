<template>
  <div id="nav">
      <router-link to="/">Home</router-link>
    <router-link
      v-for="item in destinations"
      :key="item.id"
      :to="{ name: 'destination.show', params: { id: item.id } }"
    >
      {{ item.name }}
    </router-link>
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

<style lang="css">
#nav .active {
  color: red;
  border-bottom: 2px solid red;
}
</style>
