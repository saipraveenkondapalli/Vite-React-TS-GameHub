import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";

import PlatformIconList from "./PlatformIconList";
import CriticScore from "../CriticScore";

import getCroppedImage from "../services/image-url";
import GameCardContainer from "./GameCardContainer";
import Emoji from "./Emoji";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <GameCardContainer>
      <Card>
        <Image src={getCroppedImage(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={2}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
          <Emoji rating={game.rating_top} />
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
