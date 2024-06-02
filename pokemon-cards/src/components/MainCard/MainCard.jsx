import React from "react";
import { CustomCardStandard, CustomCardMain } from "./../CustomCard/CustomCard";
import { PokemonBanner } from "../PokemonBanner/PokemonBanner";
import classes from "./../CustomCard/CustomCard.module.scss";
import "@streets-heaver/shui2/SHUI2Styles.css";

export const PersonaCard = ({ height, weight, name }) => {
  return (
    <CustomCardMain className={classes.CustomCardMainItems}>
      <div>
        <PokemonBanner height={height} weight={weight} name={name} />
      </div>
      {/* <div>
        <CustomCardMain
          content={"ABILITIES"}
          className={classes.CustomCardMain}
          //children={[pokemonData, badgeData]}
        >
          <CustomCardStandard
            content={description}
            className={classes.CustomCardStandard}
            //children={pokemonData}
          ></CustomCardStandard>
        </CustomCardMain>

        <CustomCardMain
          content={"CHARACTERISTICS"}
          className={classes.CustomCardMain}
          //children={pokemonData}
        >
          <CustomCardStandard
            content={description}
            className={classes.CustomCardStandard}
          />
        </CustomCardMain>

        <CustomCardMain content={"HABITATS"} className={classes.CustomCardMain}>
          <CustomCardStandard
            content={description}
            className={classes.CustomCardStandard}
            //children={pokemonData}
          />
        </CustomCardMain>
      </div> */}
    </CustomCardMain>
  );
};
