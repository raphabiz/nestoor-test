<!-- raphabiz -->

<template>
  <div id="comments">
    <b-container fluid>
      <Post></Post>
      <h3 style="text-align: left; font-weight: bold; color: darkblue">
        Comments
      </h3>
      <b-col v-for="comment in comments" :key="comment.id">
        <b-card style="margin-bottom: 30px">
          <b-card-title style="margin-bottom: 10px"
            >{{ comment.name }}
          </b-card-title>
          <b-card-sub-title>{{ comment.email }}</b-card-sub-title>
          <b-card-text>{{ comment.body }}</b-card-text>
        </b-card>
      </b-col>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import Post from "./Post";

export default {
  data() {
    return {
      comments: [],
    };
  },
  components: {
    Post,
  },
  created: function () {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts/" +
          this.$route.params.idPost +
          "/comments"
      )
      .then((response) => {
        this.comments = response.data;
      });
  },
};
</script>