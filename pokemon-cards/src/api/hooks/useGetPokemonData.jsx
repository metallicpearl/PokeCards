import axios from "axios";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

export const useGetPokemonPages = () => {
  const pokeData = useInfiniteQuery({
    queryKey: ["pokemonPages"],
    queryFn: async ({ pageParam = "https://pokeapi.co/api/v2/pokemon/" }) => {
      const pokeData = await axios.get(pageParam);
      const mappedData = await Promise.all(
        pokeData?.data?.results?.map(async (x) => {
          const imageUrl = await axios.get(x?.url);
          return {
            ...x,
            imageUrl: imageUrl?.data?.sprites?.front_default,
            hoverImageUrl: imageUrl?.data?.sprites?.front_shiny,
            id: imageUrl?.data?.id,
          };
        })
      );
      return { ...pokeData?.data, results: mappedData };
    },
    getNextPageParam: (nextPage) => nextPage?.next,
    refetchOnWindowFocus: false,
  });
  return pokeData;
};

export const useGetPokemonData = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["pokemonData"],
    queryFn: async () => {
      const pokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
      const mappedData = await Promise.all(
        pokeData?.data?.results?.map(async (x) => {
          const imageUrl = await axios.get(x?.url);
          return {
            ...x,
            imageUrl: imageUrl?.data?.sprites?.front_default,
            hoverImageUrl: imageUrl?.data?.sprites?.front_shiny,
            id: imageUrl?.data?.id,
          };
        })
      );
      return mappedData;
    },
    retry: 2,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  if (error) {
    console.error(error?.message);
  }
  return data;
};

export const useGetPokemonDataFiltered = (filter) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["pokemonFilteredData"],
    queryFn: async () => {
      const filteredPokeData = await Promise.resolve(
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${filter}`)
      );
      return {
        name: filteredPokeData?.data?.name,
        imageUrl: filteredPokeData?.data?.sprites?.front_default,
        abilities: filteredPokeData?.data?.abilities,
        moves: filteredPokeData?.data?.moves,
        height: filteredPokeData?.data?.height,
        weight: filteredPokeData?.data?.weight,
        species: filteredPokeData?.data?.species?.name,
        type: filteredPokeData?.data?.types[0]?.type?.name,
        stat1value: `${filteredPokeData?.data?.stats[0]?.base_stat}`,
        stat1name: `${filteredPokeData?.data?.stats[0]?.stat?.name}`,
        stat2value: `${filteredPokeData?.data?.stats[1]?.base_stat}`,
        stat2name: `${filteredPokeData?.data?.stats[1]?.stat?.name}`,
        stat3value: `${filteredPokeData?.data?.stats[2]?.base_stat}`,
        stat3name: `${filteredPokeData?.data?.stats[2]?.stat?.name}`,
        stat4value: `${filteredPokeData?.data?.stats[3]?.base_stat}`,
        stat4name: `${filteredPokeData?.data?.stats[3]?.stat?.name}`,
        stat5value: `${filteredPokeData?.data?.stats[4]?.base_stat}`,
        stat5name: `${filteredPokeData?.data?.stats[4]?.stat?.name}`,
        stat6value: `${filteredPokeData?.data?.stats[5]?.base_stat}`,
        stat6name: `${filteredPokeData?.data?.stats[5]?.stat?.name}`,
        officialImage:
          filteredPokeData?.data?.sprites?.other?.home?.front_default,
        id: filteredPokeData?.data?.id,
        artwork:
          // prettier-ignore
          filteredPokeData?.data?.sprites?.other?.["official-artwork"]?.front_default,
        artwork2:
          // prettier-ignore
          filteredPokeData?.data?.sprites?.other?.["official-artwork"]?.front_shiny,
      };
    },
    retry: 2,
    refetchOnWindowFocus: false,
  });

  if (error) {
    console.error(error?.message);
  }
  return [data, isLoading];
};
