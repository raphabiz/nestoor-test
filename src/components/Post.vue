<!-- raphabiz -->

<template>
  <div id="post">
    <b-container fluid>
      <h3 style="text-align: left; font-weight: bold; color: coral">Post</h3>
      <b-col>
        <b-card style="margin-bottom: 30px; margin-top: 0px">
          <router-link to="/">
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
      post: [],
    };
  },
  created: function () {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts/" +
          this.$route.params.idPost
      )
      .then((response) => {
        this.post = response.data;
      });
  },
};
</script>
