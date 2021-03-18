import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const breakpoints = createBreakpoints({
  sm: "37.5em", // phoneScreen
  md: "48em",
  lg: "87.5em", // tabletScreen
});

const theme = extendTheme({ config, breakpoints });

export default theme;
