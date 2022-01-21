<template>
  <div>
    <div class="photogrid">
      <LoadingCard v-if="isImageLoading" />
      <LoadingCard v-if="isImageLoading" />
      <LoadingCard v-if="isImageLoading" />
      <LoadingCard v-if="isImageLoading" />
      <LoadingCard v-if="isImageLoading" />

      <div v-for="image in images" :key="image.id" v-else>
        <PhotoItem v-bind:image="image" :set-image="setImage" />
      </div>
    </div>
  </div>
</template>
<script>
import PhotoItem from "../views/PhotoItem.vue";
import LoadingCard from "./LoadingCard.vue";
export default {
  name: "PhotoGrid",
  components: {
    PhotoItem,
    LoadingCard,
  },
  props: ["images", "setImage", "isImageLoading"],
};
</script>

<style scoped>
.photogrid {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  margin: 0 auto;
  margin-top: -30px;
  width: 80%;
}

@media (min-width: 768px) {
  .photogrid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>