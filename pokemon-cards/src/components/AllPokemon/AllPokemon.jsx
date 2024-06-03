import { Card } from "@streets-heaver/shui2";
import classes from "./AllPokemon.module.scss";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useGetPokemonPages = () => {
  const { data, error } = useInfiniteQuery({
    queryKey: ["pokemonPages"],
    queryFn: async ({ pageParam = "https://pokeapi.co/api/v2/pokemon/" }) => {
      const pokePages = await axios.get(pageParam);
      return pokePages;
    },
    getNextPageParam: (lastPage) => lastPage.data.next,
    initialPageParam: 0,
    retry: 2,
    refetchOnWindowFocus: false,
  });

  if (error) {
    console.error(error?.message);
  }
  return data;
};

export function AllPokemon({ fetchNextPage, data }) {
  const imageRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });
    observer.observe(imageRef.current);
  }, [imageRef]);
  const navigate = useNavigate();
  function ClickPokemon(id) {
    navigate(`../pokemon/${id}`);
    window.location.reload();
  }
  let [hoverId, updateHoverId] = useState(null);
  return (
    <div className={classes.PokemonPage}>
      <div>
        <div className={classes.AllPokemonImageContainer}>
          <Card className={classes.PokemonImageCard}>
            <div className={classes.AllPokemonTitle}>
              Select your Pokemon...
            </div>
            <div className={classes.PokemonScroller}>
              {data?.map((page) => {
                return page?.results?.map((x) => {
                  return (
                    <img
                      key={x?.id}
                      src={hoverId === x?.id ? x?.hoverImageUrl : x?.imageUrl}
                      onMouseOver={() => {
                        updateHoverId(x?.id);
                      }}
                      onMouseLeave={() => {
                        updateHoverId(null);
                      }}
                      onClick={() => {
                        ClickPokemon(`${x?.id}`);
                      }}
                    ></img>
                  );
                });
              })}
              <div style={{ height: 1 }} ref={imageRef} />
            </div>
          </Card>
        </div>
      </div>
      <div className={classes.PokemonBanner}></div>
    </div>
  );
}
