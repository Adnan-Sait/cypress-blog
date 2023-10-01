import App from "../App";

/**
 * @type {import("react-router-dom").RouteObject[]} routes
 */
const routes = [
  {
    path: "/*",
    element: <App />,
  },
];

export default routes;
