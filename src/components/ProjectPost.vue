<template>
<div>
  <div>
    <router-link v-if="post?.title" to="/">Home</router-link>
  </div>
  <div>
    <div v-if="!editable">{{post?.title}}</div>
    <textarea v-else ref="title"  :value="post.title" style="width: 800px"/>
  </div>
  <div>
    <div v-if="!editable">{{post?.body}}</div>
    <textarea v-else :value="post.body" ref="body" style="width: 800px; height: 200px"/>
  </div>
  <div>
    <button v-if="!editable && post?.title" style="margin-left: 10px" @click="handleEditable">Edit</button>
    <button v-if="editable && post?.title" style="margin-left: 10px" @click="handleSave">Save</button>
    <button v-if="editable && post?.title" style="margin-left: 10px" @click="handleCancel">Cancel</button>
  </div>
</div>
</template>

<script>

import {mapGetters} from "vuex";
import postsMixin from "@/mixins/postsMixin";
export default {
  name: "ProjectPost",
  mixins: [postsMixin],
  data: function () {
    return {
      editable: false,
    }
  },
  computed: {
    ...mapGetters({getCurrentPost: "posts/getPost"}),
    post(){
    return this.getCurrentPost(Number.parseInt(this.$route.params.postId))
    }
  },
  created() {
    this.getPost(this.$route.params.postId)
  },
  methods: {
    handleEditable(){
      this.editable = !this.editable;
    },
    handleSave(){
      this.post.title = this.$refs.title.value;
      this.post.body = this.$refs.body.value
      this.$store.commit("posts/setPost", this.post)
      this.handleEditable();
    },
    handleCancel(){
      this.$refs.body.value = this.post.body;
      this.$refs.title.value = this.post.title;
      this.handleEditable()
    }
  }
}
</script>

<style scoped>

</style>