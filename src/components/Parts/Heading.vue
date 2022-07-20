<script setup lang="ts"></script>

<template>
  <div class="mb-10">
    <h1>
      <slot />
    </h1>
    <hr>
  </div>
</template>

<style lang="scss" scoped>

  div {
    display:table;
  }

  h1 {
    font-size: 36px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.18em;
    font-weight: 400;
  }

  hr {
    width: 70%;
  }

</style>