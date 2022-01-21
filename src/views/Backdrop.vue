<template>
  <div class="backdrop" @click="closeModal"></div>
</template>
<script>
export default {
  name: "Backdrop",
  props: ["closeModal"],
};
</script>

<style>
.backdrop {
  position: fixed;
  z-index: 111;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #ccc;
  opacity: 90%;
}
</style>