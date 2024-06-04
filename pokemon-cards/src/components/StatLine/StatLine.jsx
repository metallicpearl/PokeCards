import classes from "./StatLine.module.scss";
import { Progress } from "@streets-heaver/shui2";

export const StatLine = (statsCollection) => {
  const results = statsCollection?.statsCollection;
  return (
    <div>
      {results?.map((x) => {
        return (
          <div className={classes.Line} key={x?.name}>
            {x?.name}
            <Progress
              value={x?.value}
              max={255}
              size={"large"}
              type={"static"}
              status={"warning"}
            />
          </div>
        );
      })}
    </div>
  );
};
