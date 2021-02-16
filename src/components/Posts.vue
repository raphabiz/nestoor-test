<!-- raphabiz -->

<template>
  <div id="posts">
    <b-container fluid>
      <h3 style="text-align: left; font-weight: bold; color: coral">Posts</h3>
      <b-col v-for="post in posts" :key="post.id">
        <b-card style="margin-bottom: 30px">
          <router-link :to="{ name: 'Comments', params: { idPost: post.id } }">
            <b-card-title style="margin-bottom: 0px"
              >{{ post.title }}
            </b-card-title>
          </router-link>
          <b-card-text>{{ post.body }}</b-card-text>
        </b-card>
      </b-col>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
    };
  },
  computed: {
    idByPost() {
      return this.$store.state.idPostVueX;
    },
  },
  created: function () {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.posts = response.data;
    });
  },
};
</script>
