<template>
  <div class="loadingCard">
    <div class="cardInner"></div>
  </div>
</template>
<script>
export default {
  name: "LoadingCard",
};
</script>

<style scoped>
.loadingCard {
  display: block;
  width: 100%;
  height: 60vh;
  position: relative;
}

.cardInner {
  position: absolute;
  top: 0;
  width: 100%;
  bottom: 0;
  left: 0;
  animation: cardLoadingAnimation 1200ms ease-in-out infinite alternate;
  background-color: #ccc;
  border-radius: 10px;
}

@keyframes cardLoadingAnimation {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 50%;
  }

  100% {
    opacity: 100%;
  }
}
</style>