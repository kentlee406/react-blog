import Layout from "../Layout";
import Home from "../view/Home";
import Blog from "../view/Blog";
const route = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <Blog /> },
    ],
  },
];
export default route;
