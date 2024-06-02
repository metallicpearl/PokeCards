import classes from "./Error.module.scss";
import pikaError from "./../../assets/png-clipart-gengar-haunter-pokemon-drawing-stencil-graffiti-monochrome-head-thumbnail.png";
import explosion from "./../../assets/Cartoon-Explosion-PNG-Images-HD2.png";

export const Error = () => {
  return (
    <div className={classes.PageContent}>
      <div className={classes.Image}>
        <img src={pikaError}></img>
      </div>
      <div className={classes.ExplosionImage}>
        <img src={explosion}></img>
      </div>
    </div>
  );
};
