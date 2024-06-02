import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import pokeLogo from "./assets/PokemonLogo.png";
import { NotFound } from "./pages/404/404.jsx";
import { Error } from "./pages/Error/Error.jsx";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import classes from "./Main.module.scss";

const queryClient = new QueryClient();

const pokeRoute = createBrowserRouter([
  {
    path: "/",
    element: <App description="normalpath" />,
    errorElement: <Error />,
  },
  {
    path: "/:pokemonId",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <Error />,
  },
  {
    path: "/Error",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div>
        <div className={classes.PokemonTitle}>
          <img src={pokeLogo} />
        </div>
        <RouterProvider router={pokeRoute} />
        <Outlet />
      </div>
    </QueryClientProvider>
  </React.StrictMode>
);
