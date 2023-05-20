import { createStore } from "vuex";

const store = createStore({
  state: () => ({
    editPost: null,
    sampleBlogCard: [
      {
        blogTitle: "fsajhafsjhafs",
        blogCoverPhoto: "stock-1",
        blogDate: "May 1, 2021",
      },
      {
        blogTitle: "fsajhafsjhafs",
        blogCoverPhoto: "stock-2",
        blogDate: "May 1, 2021",
      },
      {
        blogTitle: "fsajhafsjhafs",
        blogCoverPhoto: "stock-3",
        blogDate: "May 1, 2021",
      },
      {
        blogTitle: "fsajhafsjhafs",
        blogCoverPhoto: "stock-4",
        blogDate: "May 1, 2021",
      },
    ],
  }),
  getters: {},
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
  },
  actions: {},
  modules: {},
});

export default store;
