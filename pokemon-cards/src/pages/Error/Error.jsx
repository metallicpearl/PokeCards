import classes from "./Error.module.scss";
import explosion from "./../../assets/Cartoon-Explosion-PNG-Images-HD2.png";

export const Error = () => {
  return (
    <div>
      <div className={classes.ExplosionImage}>
        <img src={explosion}></img>
      </div>
    </div>
  );
};
