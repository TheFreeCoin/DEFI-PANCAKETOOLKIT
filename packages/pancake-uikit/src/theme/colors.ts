import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#ffdf56", // was #1FC7D4
  primaryBright: "#56D4F8",
  primaryDark: "#123850",
  secondary: "#FFC93B",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#012F96",
  backgroundDisabled: "#A2DED7",
  backgroundAlt: "#0e53ef",
  cardBorder: "#180A83",
  contrast: "#191326",
  dropdown: "#2b5ba0",
  dropdownDeep: "#3a69d4",
  invertedContrast: "#264eee",
  input: "#0845cf",
  inputSecondary: "#2d798e",
  tertiary: "#4091e1",
  text: "#ffffff",
  textDisabled: "#136bc5",
  textSubtle: "#FFDA3B",
  disabled: "#A2DED7",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #3f219a 0%, #1b49b1 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #1b49b1 0%, #3f219a 100%)",
    cardHeader: "linear-gradient(111.68deg, #255fe1 0%, #3666d2 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #18439c 0%, #2032e0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#9A6AFF",
  background: "#08060B",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#372F47",
  inputSecondary: "#262130",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#F4EEFF",
  textDisabled: "#666171",
  textSubtle: "#B8ADD2",
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #31509e 0%, #2a76d8 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
