"use client"
import client from "@/shared/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";

interface ApolloProviderProps {
  children: ReactNode;
}

export default function Provider({ children }: ApolloProviderProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
