import {createStore} from "vuex";
import posts from "@/store/modules/posts";
const store = createStore({
  modules: {
    posts
  }
})

export default store;