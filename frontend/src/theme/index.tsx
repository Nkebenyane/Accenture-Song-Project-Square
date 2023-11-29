import { theme as chakraTheme } from "@chakra-ui/react";
import images from "./images";

const theme = {
  ...chakraTheme,
  fonts: {
    body: "Avenir",
    mono: "Avenir",
    heading: "Avenir",
  },
  colors: {
    ...chakraTheme.colors,
    background: {
      100: "#f0f0f0",
      200: "#F8F8F8",
      300: "#e6e5e5",
    },
    brand: {
      50: "#F3E2F8",
      100: "#E2B5F1",
      200: "#D184E9",
      300: "#B54DDB",
      400: "#A03BD8",
      500: "#8B29D6",
      600: "#7815D0",
      700: "#6306C0",
      800: "#5414A8",
      900: "#70259B",
    },
  },
  boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.28)",
  gridGutter: 1,
};

export { theme, images };
