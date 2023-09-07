import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string;
}
function SortSelector({ onSelectSortOrder, selectedSortOrder }: Props) {
  const sortOrders = [
    { value: "", label: "Relavance" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-added", label: "Added Date" },
    { value: "-rating", label: "Average Rating" },
  ];
  const sortOrder =
    sortOrders.find((order) => order.value === selectedSortOrder)?.label ||
    "Relavance";
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order By:{sortOrder}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              key={order.value}
              value={order.value}
              onClick={() => onSelectSortOrder(order.value)}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default SortSelector;
