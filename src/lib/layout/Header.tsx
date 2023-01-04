import { Box, Flex } from "@chakra-ui/react";
import LocaleSelector from "./LocaleSelector";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
    >
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
      <Box>
        <LocaleSelector/>
      </Box>
    </Flex>
  );
};

export default Header;
