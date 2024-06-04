import classes from "./404.module.scss";
import explosion from "./../../assets/Cartoon-Explosion-PNG-Images-HD.png";

export const NotFound = () => {
  return (
    <div>
      <div className={classes.ExplosionImage}>
        <img src={explosion}></img>
      </div>
    </div>
  );
};
