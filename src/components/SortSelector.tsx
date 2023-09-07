import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function SortSelector() {
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order By: Relavance
        </MenuButton>
        <MenuList>
          <MenuItem>Relavence</MenuItem>
          <MenuItem>Date</MenuItem>
          <MenuItem>Name</MenuItem>
          <MenuItem>Release Date</MenuItem>
          <MenuItem>Popularity</MenuItem>
          <MenuItem>Average rating</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default SortSelector;
