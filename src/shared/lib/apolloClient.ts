"use client";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("access_token") || "";
  }
  return "";
};

const authLink = setContext((_, { headers }) => {
  const token = getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(
    new HttpLink({
      uri: "https://api.escuelajs.co/graphql",
    })
  ),
  cache: new InMemoryCache(),
});

export default client;
