import { NavLink } from "react-router-dom";
import "../css/TopNavigation.css";

function TopNavigation() {
  return (
    <div className="mainNavigation">
      <ul className="navItems">
        <li>
          <NavLink className="hover" activeclassname="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="hover" activeclassname="active" to="/campus-jobs">
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink className="hover" activeclassname="active" to="/courses">
            Courses
          </NavLink>
        </li>
      </ul>
      <div className="navItemsBorder"></div>
    </div>
  );
}

export default TopNavigation;
