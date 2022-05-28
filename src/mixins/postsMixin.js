export default {
methods: {
  getPost: function(id){
    if (!id) return Promise.reject();
   if(this.$store.getters["posts/getPost"](Number.parseInt(id)) === null || this.$store.getters["posts/getPost"](Number.parseInt(id)) === undefined){
     this.$store.dispatch("posts/fetchPosts")
   }
  }
}
}