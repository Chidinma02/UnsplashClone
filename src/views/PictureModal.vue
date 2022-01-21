<template>
  <div class="photoModal">
    <img :src="currentImage.urls.small" class="image" />
    <div class="details">
      <p class="name">
        {{ currentImage.user.first_name }} {{ currentImage.user.last_name }}
      </p>
      <p>{{ currentImage.user.location }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "PictureModal",
  props: ["currentImage"],
};
</script>

<style scoped>
.photoModal {
  /*
    css variables that hold the value of the border radius for the modal
   */

  --border-radius: 15px;

  /* 
    This styling allows the modal to be exactly at the center of the screen
    vertically and horizontally
  */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /*
    This z-index allows the photo modal to be stacked on top of the overlay whose
    z-index is delibrately made lower than that of the modal
   */

  z-index: 1111;
  width: 80%;

  /* animates the modal in  */
  animation: animateImageIn 300ms ease-in-out;
}
@media (min-width: 768px) {
  .photoModal {
    width: 60%;
  }
}

.image {
  width: 100%;
  display: block;
  height: 50vh;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
}

.details {
  background-color: #fff;
  color: 000;
  text-align: left;
  padding: 2em;
  border-bottom-right-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
}

.name {
  font-size: 1.5rem;
  font-weight: 700;
}

@keyframes animateImageIn {
  0% {
    top: 40%;
  }

  50% {
    top: 45%;
  }

  100% {
    top: 50%;
  }
}
</style>