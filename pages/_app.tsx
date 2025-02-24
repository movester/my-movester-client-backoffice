import React from "react";
import "../styles/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DragDropContext } from "react-beautiful-dnd";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
