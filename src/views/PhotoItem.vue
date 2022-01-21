<template>
  <div>
    <div class="image-detail" @click="setImage(image)">
      <img :src="image.urls.small" class="image" />
      <div class="tint"></div>
      <div class="details">
        <p>{{ image.user.first_name }} {{ image.user.last_name }}</p>
        <p>{{ image.user.location }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PhotoItem",
  methods: {
    clicked() {
      console.log("clicked");
    },
  },
  props: ["image", "setImage"],
};
</script>

<style scoped>
.image-detail {
  position: relative;
  cursor: pointer;
}

.image {
  display: block;
  width: 100%;
  height: 60vh;
  border-radius: 10px;
}

.tint {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: 111;
  background-color: #c19e94;
  opacity: 30%;
}

.details {
  color: #fff;
  position: absolute;
  bottom: 10px;
  left: 30px;
  text-align: left;
  z-index: 1111;
}

.name {
  font-weight: 700;
}
</style>
