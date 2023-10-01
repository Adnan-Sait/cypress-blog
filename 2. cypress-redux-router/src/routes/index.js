import App from "../components/App/App";

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
