import classes from "./404.module.scss";
import pikaNotFound from "./../../assets/stat-pikachu.png";
import explosion from "./../../assets/Cartoon-Explosion-PNG-Images-HD.png";

export const NotFound = () => {
  return (
    <div className={classes.PageContent}>
      <div className={classes.Image}>
        <img src={pikaNotFound}></img>
      </div>
      <div className={classes.ExplosionImage}>
        <img src={explosion}></img>
      </div>
    </div>
  );
};
