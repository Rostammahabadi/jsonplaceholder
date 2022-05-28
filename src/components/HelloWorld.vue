<template>
  <div class="hello" v-for="post in posts" :key="post.id">
    <RouterLink :to="`/posts/${post.id}`">{{post.title}}</RouterLink>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      objects: [],
    }
  },
  computed: {
    ...mapGetters("posts", {
      posts: "getPosts"
    })
  },
  created() {
    this.$store.dispatch("posts/fetchPosts")
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
