import React from "react";
import { CustomCardMain } from "../CustomCard/CustomCard";
import { PokemonBanner } from "../PokemonBanner/PokemonBanner";
import classes from "./../CustomCard/CustomCard.module.scss";
import "@streets-heaver/shui2/SHUI2Styles.css";

export const PersonaCard = ({ height, weight, name }) => {
  return (
    <CustomCardMain className={classes.CustomCardMainItems}>
      <div>
        <PokemonBanner height={height} weight={weight} name={name} />
      </div>
    </CustomCardMain>
  );
};
