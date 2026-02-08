import { Link } from "react-router-dom";
import data from "../data";

function Blogs() {
  return (
    <div>
      <ul>
        {data.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Blogs;
