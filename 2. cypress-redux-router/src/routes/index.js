import App from "../components/App/App";
import IndexPage from "../page/IndexPage";

/**
 * @type {import("react-router-dom").RouteObject[]} routes
 */
const routes = [
  {
    path: "*",
    element: <IndexPage />,
    children: [
      {
        path: "*",
        element: <App />,
      },
    ],
  },
];

export default routes;
