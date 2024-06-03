import classes from "./Error.module.scss";
import pokeLogo from "./../../assets/PokemonLogo.png";
import explosion from "./../../assets/Cartoon-Explosion-PNG-Images-HD2.png";

export const Error = () => {
  return (
    <div className={classes.PageContent}>
      <div className={classes.Image}>
        <img src={pokeLogo}></img>
      </div>
      <div className={classes.ExplosionImage}>
        <img src={explosion}></img>
      </div>
    </div>
  );
};
