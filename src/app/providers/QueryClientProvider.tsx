import {
  QueryClient,
  QueryClientProvider as OriginalQueryClientProvider,
} from "@tanstack/react-query";
import React from "react";

const client = new QueryClient();

interface QueryClientProviderProps {
  children: React.ReactNode;
}

export function QueryClientProvider({ children }: QueryClientProviderProps) {
  return (
    <OriginalQueryClientProvider client={client}>
      {children}
    </OriginalQueryClientProvider>
  );
}
