<template>
  <div class="container"></div>
</template>

<script>
/*
Songs Model
{
  author: "Bon Jovi"
  genre: "Rock"
  poster: "https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg"
  title: "New Jersey"
  year: "1988"
}
*/

import axios from "axios";

export default {
  name: "MainSpotify",
  data() {
    return {
      songs: [],
    };
  },
  props: {
    url: String,
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios.get(this.url).then((response) => {
        console.log(response);
        if (response.status === 10) {
          this.songs = response.data;
          console.log(this.songs[0]);
        }
      });
    },
  },
};
</script>

<style></style>
