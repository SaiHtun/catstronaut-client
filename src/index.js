import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { InMemoryCache, ApolloProvider, ApolloClient } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://catstronaut-server101.herokuapp.com/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <GlobalStyles />
      <Pages />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
