import useGenre from "../hooks/useGenre";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImage from "../services/image-url";

function GenreList() {
  const { data } = useGenre();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImage(genre.image_background)}
              alt={genre.name}
              borderRadius={8}
              boxSize="32px"
            />
            <Text fontSize="lg"> {genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
