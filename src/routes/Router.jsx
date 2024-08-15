import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import { Landing } from "../pages";
import { Main } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "platform",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
    ],
  },
]);

export default router;
