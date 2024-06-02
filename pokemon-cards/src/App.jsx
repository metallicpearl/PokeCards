import classes from "./App.module.scss";
import {
  CustomCardMain,
  CustomCardStandard,
  CustomCardStandardStats,
} from "./components/CustomCard/CustomCard";
import { PersonaCard } from "./components/MainCard/MainCard";
import { AllPokemon } from "./components/AllPokemon/AllPokemon";
import pokemonImage from "./assets/pokemon.jpg";
import {
  useGetPokemonData,
  useGetPokemonDataFiltered,
} from "./api/hooks/useGetPokemonData";
import { useParams } from "react-router-dom";
import { StatLine } from "./components/StatLine/StatLine";
import { Card, Ghost } from "@streets-heaver/shui2";
import { capitalizeFirstLetter } from "./functions/DataFunctions";
import { useState } from "react";

export const App = () => {
  const { pokemonId } = useParams();
  const data = useGetPokemonDataFiltered(pokemonId);
  const allData = useGetPokemonData();

  if (typeof data !== "undefined" && typeof allData !== "undefined") {
    const height = data?.height;
    const weight = data?.weight;
    const name = data?.name;
    const artwork = data?.artwork;
    const artwork2 = data?.artwork2;
    const totalScore =
      Number.parseInt(data?.stat1value) +
      Number.parseInt(data?.stat1value) +
      Number.parseInt(data?.stat1value) +
      Number.parseInt(data?.stat1value) +
      Number.parseInt(data?.stat1value) +
      Number.parseInt(data?.stat1value);
    const abilities = () => {
      const abilitiesArray = [];
      data?.abilities?.map((x) => {
        abilitiesArray.push(x?.ability?.name);
      });
      abilitiesArray.length = 2;
      return abilitiesArray;
    };
    const moves = () => {
      const movesArray = [];
      data?.moves?.map((x) => {
        movesArray.push(x?.move?.name);
      });
      movesArray.length = 2;
      return movesArray;
    };
    const species = data?.species;
    const type = data?.type;
    const statsCollection = [
      {
        name: data?.stat1name,
        value: data?.stat1value,
      },
      {
        name: data?.stat2name,
        value: data?.stat2value,
      },
      {
        name: data?.stat3name,
        value: data?.stat3value,
      },
      {
        name: data?.stat4name,
        value: data?.stat4value,
      },
      {
        name: data?.stat5name,
        value: data?.stat5value,
      },
      {
        name: data?.stat6name,
        value: data?.stat6value,
      },
    ];

    return (
      <div className={classes.AppContainer}>
        <div>
          <PersonaCard height={height} weight={weight} name={name} />
          <div>
            <CustomCardMain
              description={"description"}
              children={[
                <>
                  <div className={classes.SHUI2CardStyling}>
                    <div className={classes.SpeciesTypeDescriptor}>
                      Species:
                      <div
                        className={classes.SpeciesTypeValue}
                      >{`${species.toUpperCase()}`}</div>
                    </div>
                    <br />
                    <div className={classes.SpeciesTypeDescriptor}>
                      Type:
                      <div
                        className={classes.SpeciesTypeValue}
                      >{`${type.toUpperCase()}`}</div>
                    </div>
                  </div>
                </>,
              ]}
            />
          </div>
          <div>
            <CustomCardMain>
              <div>
                <CustomCardStandard
                  items={abilities()}
                  itemscolor={"warning"}
                  cardTitle={"Abilities"}
                />
              </div>
              <div>
                <CustomCardStandard
                  items={moves()}
                  itemscolor={"danger"}
                  cardTitle={"Moves"}
                />
              </div>
            </CustomCardMain>
          </div>
        </div>
        <div>
          <div className={classes.AllPokemonAndDetails}>
            <div>
              <AllPokemon data={allData} />
            </div>
            <>
              <Card>
                <div className={classes.ImagesAndStats}>
                  <div className={classes.ImagesContainer}>
                    <div>
                      <img
                        src={artwork2}
                        className={classes.ImageContainerFlip}
                      />
                    </div>
                    <div className={classes.StatsAndTotal}>
                      <CustomCardStandardStats
                        total={totalScore}
                        statsCollection={statsCollection}
                        cardTitle={"Stats"}
                      />
                    </div>
                    <div>
                      <img src={artwork} className={classes.ImageContainer} />
                    </div>
                  </div>
                </div>
              </Card>
            </>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
