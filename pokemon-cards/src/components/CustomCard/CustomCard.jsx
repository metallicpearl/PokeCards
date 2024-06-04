import { Badge, Card } from "@streets-heaver/shui2";
import classes from "./CustomCard.module.scss";
import { StatLine } from "../StatLine/StatLine";

function calculateOverallPercent(total) {
  const x = 100 / 1530;
  return Math.floor(x * total);
}

export const CustomCardStandard = ({ items, cardTitle, itemscolor }) => {
  return (
    <Card>
      <h1 className={classes.CustomCardStandard}>
        {cardTitle}
        <div className={classes.BadgeStyles}>
          {items?.map((x) => {
            return <Badge key={x} text={x} color={itemscolor}></Badge>;
          })}
        </div>
      </h1>
    </Card>
  );
};

export const CustomCardStandardStats = ({
  statsCollection,
  cardTitle,
  total,
}) => {
  return (
    <Card>
      <h1 className={classes.CustomCardStandard}>
        {cardTitle}
        <div className={classes.StatsContainer}>
          <StatLine statsCollection={statsCollection} />
        </div>
      </h1>
      <>
        <div className={classes.SHUI2CardStyling}>
          <div className={classes.PercentageDescriptor}>
            Overall Stat Percentage:
            <div className={classes.PercentageValue}>
              {`${calculateOverallPercent(total)}%`}
            </div>
          </div>
        </div>
      </>
    </Card>
  );
};

export const CustomCardMain = ({ content, children }) => {
  return (
    <Card className={classes.CustomCardMain}>
      <div className={classes.CustomCardTitle}>{content}</div>
      <div className={classes.CustomCardMain}>{children}</div>
    </Card>
  );
};
