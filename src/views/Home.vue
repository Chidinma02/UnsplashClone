<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container-holder">
      <div class="searchBar">
        <form @submit.prevent="fetchPhotos">
          <input
            type="text"
            v-model="keyword"
            class="searchBox"
            placeholder="Search for photo"
          />
        </form>
      </div>
    </div>
    <PhotoGrid
      :images="images"
      class="grid"
      :set-image="setCurrentImage"
      :is-image-loading="isImageLoading"
    />
    <Backdrop v-if="showModal" :close-modal="closeModal" />
    <PictureModal v-if="showModal" :current-image="currentImage" />
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";

import Backdrop from "./Backdrop.vue";
import PhotoGrid from "./PhotoGrid.vue";
import PictureModal from "./PictureModal.vue";
export default {
  name: "Home",

  components: {
    PhotoGrid,
    Backdrop,
    PictureModal,
  },

  data() {
    return {
      images: [],
      currentPage: 1,
      keyword: "",
      // this variable controls whether the modal is shown or not
      showModal: false,
      // this object hold detail of the currently selected image and
      // its properties are set to the details of the clicked picture
      currentImage: {},

      // controls the state where the image is loading or not
      isImageLoading: false,
    };
  },

  mounted() {
    // this function fetches images from the unsplash api as the page loads
    this.$nextTick(this.fetchPhotos());
  },

  methods: {
    // this function fetches images from the unsplash api
    async fetchPhotos() {
      let url = this.keyword.length > 0 ? this.keyword : "africa";
      this.isImageLoading = true;

      try {
        const request = await axios.get(
          `https://api.unsplash.com/search/photos?query=${url}`,
          {
            headers: {
              Authorization:
                "Client-ID UiU6aTDIExSGdnSs5mqyyPE1pUYz0oy74AHU-DSWLXA",
              "Accept-Version": "v1",
            },
          }
        );

        // sets the images data to 8 of the photos from the result
        this.images = request.data.results.splice(0, 7);

        // sets the image loading state to false once we have the data

        setTimeout(() => (this.isImageLoading = false), 3000);
      } catch (error) {
        console.log(error.message);

        this.isImageLoading = false;
      }
    },

    // this function sets the properties of the current image to the image that
    // was clicked and set the showModal property to true
    setCurrentImage(image) {
      this.showModal = true;
      this.currentImage = image;
    },

    // this function closes the modal by setting the property of the showModal to false
    // and resetting the current image to an empty object when the backdrop is clicked
    closeModal() {
      this.showModal = false;
      this.currentImage = {};
    },
  },
};
</script>

<style scoped="css">
.con {
  height: 30vh;
  display: flex;
  align-items: center;
}
.container-holder {
  background-color: #dce2e9;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.searchBar {
  width: 80%;
  margin: 0 auto;
}

.searchBox {
  width: 100%;
  padding: 10px 5px;
  border-radius: 5px;
  outline: none;
  border: none;
}

.searchBox:focus {
  border: 2px solid #84d2ff;
}
.nav-search {
  background-color: #dce2e9 !important;
}
.c {
  background-color: #ccc;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
}

@media screen and (min-width: 990px) {
  .c {
    grid-template-columns: repeat(3, 1fr);
  }
}

.c img {
  display: block;
  width: 100%;
  height: 60vh;
}

.image_grid {
  position: relative;
}

.detail {
  color: #fff;
  position: absolute;
  bottom: 10px;
  left: 30px;
  text-align: left;
}

.name {
  font-weight: 700;
}
</style>
