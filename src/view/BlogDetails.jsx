import { useParams, Link } from "react-router-dom";
import data from "../data";
function BlogDetails() {
  // 從 URL 取得 id (注意：從 useParams 拿到的通常是字串)
  const { id } = useParams();

  // 模擬從資料庫或 state 中尋找該筆資料
  // 實際開發中，這裡可能會發送 API 請求
  const post = data.find((item) => item.id === parseInt(id));

  return (
    <div style={{ padding: "20px" }}>
      <p>
        <Link to="/blogs">回到列表</Link> |<b>{post.title}</b>|{post.content}
      </p>
    </div>
  );
}
export default BlogDetails;
