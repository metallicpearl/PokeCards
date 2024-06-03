import { Outlet } from "react-router-dom";
import classes from "./Layout.module.scss";
import pokeLogo from "./assets/PokemonLogo.png";

export const Header = () => {
  return (
    <div>
      <div className={classes.PokemonTitle}>
        <img src={pokeLogo} />
      </div>
    </div>
  );
};

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
