import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
function CriticScore({ score }: Props) {
  const color = score > 75 ? "green" : score > 50 ? "yellow" : "red";

  return (
    <Badge fontSize={14} paddingX={2} borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  ); // here 1 using charka default badge in which 1 = 10px
}

export default CriticScore;
