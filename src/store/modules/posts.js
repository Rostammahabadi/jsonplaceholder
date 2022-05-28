import jsonAPI from "@/api/jsonAPI";

const state = {
  posts: [],
}
const actions = {
  fetchPosts({commit}){
    jsonAPI.cachedGet('https://jsonplaceholder.typicode.com/posts')
      .then((response) => (commit("setPosts", response)));
  }
}

const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  },
  setPost(state, post){
   let foundPostIndex = state.posts.findIndex((p) => p.id === post.id);
    state.posts.splice(foundPostIndex,1,post);
  },
}

const getters = {
  getPosts(state){
    return state.posts
  },
  getPost: (state) => (id) => {
    return state.posts.find((post) => post.id === id)
}
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};