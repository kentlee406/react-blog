import Layout from "../Layout";
import Home from "../view/Home";
import Blogs from "../view/Blogs";
import BlogDetails from "../view/BlogDetails";
import NotFound from "../view/NotFound";
const route = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "blogs", element: <Blogs /> },
      { path: "blog/:id", element: <BlogDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
export default route;
