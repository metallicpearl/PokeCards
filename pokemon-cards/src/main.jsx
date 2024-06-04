import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { NotFound } from "./pages/404/404.jsx";
import { Error } from "./pages/Error/Error.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header, Layout } from "./Layout.jsx";

const queryClient = new QueryClient();
const basePath = "/pokemon";
const pokeRoute = createBrowserRouter([
  {
    path: "/NotFound",
    element: (
      <div>
        <Header />
        <NotFound />
      </div>
    ),
  },
  {
    path: "/Error",
    element: (
      <div>
        <Header />
        <Error />
      </div>
    ),
  },
  {
    path: "",
    element: (
      <div>
        <Header />
        <App />
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <Header />
        <NotFound />
      </div>
    ),
  },
  {
    path: `${basePath}*`,
    element: <NotFound />,
  },

  {
    path: `/pokemon/`,
    element: <Layout />,
    children: [
      {
        path: `:pokemonId?`,
        element: <App />,
        errorElement: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={pokeRoute} basePath={"/pokemon/1"} />
    </QueryClientProvider>
  </React.StrictMode>
);
