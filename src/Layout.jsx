import { NavLink, Outlet } from "react-router";
function Layout() {
  return (
    <div>
      <nav>
        導覽
        <NavLink to="">首頁</NavLink>_<NavLink to="/blogs">部落格列表</NavLink>
      </nav>
      <Outlet />
      <footer>表尾</footer>
    </div>
  );
}
export default Layout;
