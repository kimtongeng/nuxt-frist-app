<template>
  <div>
    this is home Page
    <button @click="sayHello">click me  </button>
  </div>
</template>

<script setup>
  const {sayHello} = useUtils();
  

  // Now you can use $say as a function

</script>

<style lang="scss" scoped>

</style>