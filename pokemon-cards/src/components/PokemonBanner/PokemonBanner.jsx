import { Persona } from "@streets-heaver/shui2";
import classes from "./PokemonBanner.module.scss";
import { useGetPokemonData } from "../../api/hooks/useGetPokemonData";
import { capitalizeFirstLetter } from "../../functions/DataFunctions";

export const PokemonBanner = ({ height, weight, name }) => {
  const y = useGetPokemonData();
  return (
    <div className={classes.PokemonPage}>
      <div className={classes.PokemonBanner}>
        <Persona
          className={classes.PokemonPersona}
          icon={{
            type: "avatar",
            props: {
              initials: `${capitalizeFirstLetter(name).slice(0, 1)}`,
              size: 38,
            },
          }}
          primaryText={`Name: ${capitalizeFirstLetter(name)}`}
          secondaryText={`Height: ${height}`}
          tertiaryText={`Weight: ${weight}`}
        ></Persona>
      </div>
    </div>
  );
};
