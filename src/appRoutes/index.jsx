import { createBrowserRouter } from "react-router";
import MockHostApp from "../App";
import { DiscourseApp } from "../discourse-community";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MockHostApp />,
  },
  {
    path: "/wow-community",
    element: <DiscourseApp />,
  },
]);
