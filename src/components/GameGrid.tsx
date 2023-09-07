import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = Array.from({ length: 30 }, (_, index) => index);
  if (error)
    return (
      <Center h="80vh">
        <Box color="grey.500">
          <Text fontSize={100} marginX={10}>
            404
          </Text>
          <Text fontSize={30}>Unable to get games.</Text>
        </Box>
      </Center>
    );
  return (
    <>
      <SimpleGrid
        spacing={5}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton, index) => (
            <GameCardContainer key={index}>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}

        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
