import { NavLink, Outlet } from "react-router-dom";
import classes from "./Menu.module.scss";

const info = ["berries", "encounters"];
export const Menu = () => {
  return (
    <div className={classes.Menu}>
      {types.map((info) => (
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-primary-700" : "";
          }}
          key={info}
          to={`/${info}`}
        ></NavLink>
      ))}
      <Outlet />
    </div>
  );
};
