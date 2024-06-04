import classes from "./App.module.scss";
import { NotFound } from "./pages/404/404";
import {
  CustomCardMain,
  CustomCardStandard,
  CustomCardStandardStats,
} from "./components/CustomCard/CustomCard";
import { PersonaCard } from "./components/PersonaCard/PersonaCard";
import { AllPokemon } from "./components/AllPokemon/AllPokemon";
import {
  useGetPokemonData,
  useGetPokemonDataFiltered,
  useGetPokemonPages,
} from "./api/hooks/useGetPokemonData";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "@streets-heaver/shui2";

function initialLoad(pokemonId) {
  const navigate = useNavigate();
  if (pokemonId == undefined) {
    navigate("/pokemon/1");
  }
}

export const App = () => {
  const { pokemonId } = useParams();
  initialLoad(pokemonId);
  const data = useGetPokemonDataFiltered(pokemonId)[0];
  const isLoading = useGetPokemonDataFiltered(pokemonId)[1];
  const allData = useGetPokemonData();
  const allPages = useGetPokemonPages();
  const pokeInt = Number(pokemonId);
  if (isLoading == true) {
    return (
      <div className={classes.LoadingContainer}>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (pokeInt && pokeInt <= 1025) {
    if (typeof data !== "undefined" && typeof allData !== "undefined") {
      const height = data?.height;
      const weight = data?.weight;
      const name = data?.name;
      const artwork = data?.artwork;
      const artwork2 = data?.artwork2;
      const totalScore =
        Number.parseInt(data?.stat1value) +
        Number.parseInt(data?.stat2value) +
        Number.parseInt(data?.stat3value) +
        Number.parseInt(data?.stat4value) +
        Number.parseInt(data?.stat5value) +
        Number.parseInt(data?.stat6value);

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
          <div className={classes.PersonaContainer}>
            <PersonaCard height={height} weight={weight} name={name} />
            <div>
              <CustomCardMain
                description={"description"}
                children={[
                  <div key={"customLey"}>
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
                  </div>,
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
              <div style={{ padding: "10px 0 1px 25px" }}>
                © PVSH Corporation Ltd.
              </div>
            </div>
          </div>
          <div className={classes.ImagesStatsContainer}>
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
          </div>
          <div>
            <div className={classes.AllPokemonAndDetails}>
              <div>
                <AllPokemon
                  fetchNextPage={allPages.fetchNextPage}
                  data={allPages?.data?.pages}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  } else if (pokemonId != "notfound") {
    return (
      <div>
        <NotFound />;
      </div>
    );
  } else {
    return (
      <div>
        <Error />
      </div>
    );
  }
};
