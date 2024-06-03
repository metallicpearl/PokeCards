import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { NotFound } from "./pages/404/404.jsx";
import { Error } from "./pages/Error/Error.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./Layout.jsx";

const queryClient = new QueryClient();

const pokeRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/pokemon/:pokemonId",
        element: <App />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/Error",
    element: <Error />,
  },
  {
    path: "/Pokemon",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={pokeRoute} />
    </QueryClientProvider>
  </React.StrictMode>
);
