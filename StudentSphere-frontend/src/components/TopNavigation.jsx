import { NavLink } from "react-router-dom";
import "../css/TopNavigation.css";

function TopNavigation() {
  return (
    <div className="mainNavigation">
      <ul className="navItems">
        <li>
          <NavLink className="hover" activeClassName="active" to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="hover" activeClassName="active" to="/internships">
            Internship
          </NavLink>
        </li>
        <li>
          <NavLink className="hover" activeClassName="active" to="/campus-jobs">
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink className="hover" activeClassName="active" to="/courses">
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink className="hover" activeClassName="active" to="/trends">
            Trends
          </NavLink>
        </li>
        <li>
          <NavLink className="hover" activeClassName="active" to="/portfolios">
            Portfolios
          </NavLink>
        </li>
      </ul>
      <div className="navItemsBorder"></div>
    </div>
  );
}

export default TopNavigation;

