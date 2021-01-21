import { NavLink } from "react-router-dom";

export const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/" activeStyle={{ color: "green" }} exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/test" activeStyle={{ color: "green" }} exact>
          Test
        </NavLink>
      </li>
    </ul>
  </nav>
);
