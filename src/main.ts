import { createApp, h, provide } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { DefaultApolloClient } from "@vue/apollo-composable";

const defaultClient = new ApolloClient({
  uri: "http://graphql.test/graphql",
  cache: new InMemoryCache()
});

// const query = gql`
//   query {
//     burgers {
//       name
//       price
//       id
//     }
//   }
// `;
// defaultClient
//   .query({
//     query
//   })
//   .then((res) => console.log(res));

const app = createApp({
  setup() {
    provide(DefaultApolloClient, defaultClient);
  },
  render() {
    return h(App);
  }
})
  .use(router)
  .use(store)
  .mount("#app");
