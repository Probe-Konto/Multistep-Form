import { createBrowserRouter, redirect } from "react-router";
import App from "./App";
import NotFound from "./Components/NotFound";
import Info from "./Components/Info";
import Plan from "./Components/Plan";
import Addon from "./Components/Addon";
import Summary from "./Components/Summary";
import Thanks from "./Components/Thanks";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/Multistep-Form"),
  },
  {
    path: "/Multistep-Form",
    errorElement: <NotFound />,
    element: <App />,
    children: [
      { index: true, loader: () => redirect("info") },
      { path: "info", element: <Info /> },
      { path: "plan", element: <Plan /> },
      { path: "addon", element: <Addon /> },
      { path: "summary", element: <Summary /> },
      { path: "thanks", element: <Thanks /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
