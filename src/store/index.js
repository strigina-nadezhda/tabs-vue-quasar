import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import example from "./module-example";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      allTabs: example,
    },

    strict: process.env.DEBUGGING,
  });

  return Store;
});
