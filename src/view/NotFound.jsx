import { useEffect } from "react";
import { useNavigate } from "react-router";
function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  });
  return <main>找不到頁面</main>;
}
export default NotFound;
