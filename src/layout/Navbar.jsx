import { useAuth } from "../auth/AuthContext";
import { NavLink } from "react-router";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();
  const navClass = ({ isActive }) => "link" + (isActive ? " active" : "");

  return (
    <header>
      <p>Fitness Trackr</p>

      <nav>
        <NavLink to="/ActivitiesPage" className={navClass}>
          Activities
        </NavLink>
        <NavLink to="/" className={navClass}>
          Routines
        </NavLink>
        {token ? (
          <a onClick={() => logout()} className={navClass}>
            Log out
          </a>
        ) : (
          <>
            <NavLink to="/register" className={navClass}>
              Register
            </NavLink>
            <NavLink to="/login" className={navClass}>
              Login
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
