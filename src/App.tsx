import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";
import Home from "./Home";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
