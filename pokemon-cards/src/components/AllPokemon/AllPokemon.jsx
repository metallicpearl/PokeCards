import { Card } from "@streets-heaver/shui2";
import classes from "./AllPokemon.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AllPokemon({ data }) {
  const navigate = useNavigate();

  function ClickPokemon(id) {
    navigate(`/${id}`);
    window.location.reload();
  }

  return (
    <div className={classes.PokemonPage}>
      <div>
        <div className={classes.AllPokemonImageContainer}>
          <Card>
            <div className={classes.AllPokemonTitle}>
              Select your Pokemon...
            </div>
            {data?.map((x) => {
              let [image, updateImage] = useState(x?.imageUrl);
              return (
                <img
                  src={image}
                  onMouseOver={() => {
                    updateImage(x?.hoverImageUrl);
                  }}
                  onMouseLeave={() => {
                    updateImage(x?.imageUrl);
                  }}
                  onClick={() => {
                    ClickPokemon(`${x?.id}`);
                  }}
                ></img>
              );
            })}
          </Card>
        </div>
      </div>
      <div className={classes.PokemonBanner}></div>
    </div>
  );
}
