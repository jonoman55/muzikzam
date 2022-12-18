// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=f2f2f2&secondary.color=424242
import { useMemo } from "react";
import { PaletteMode } from "@mui/material";
import { createTheme, PaletteColor, Theme, ThemeOptions } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

import type { CustomPalette } from "../types";

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      palette: {
        ytBlack: string;
        ytGray: string;
        gray: string;
        lightGray: string;
        darkGray: string;
        red: string;
        lightRed: string;
        darkRed: string;
        yellow: string;
        lightYellow: string;
        darkYellow: string;
        green: string;
        lightGreen: string;
        darkGreen: string;
        orange: string;
        lightOrange: string;
        darkOrange: string;
        blue: string;
        lightBlue: string;
        darkBlue: string;
        purple: string;
        turquoise: string;
        pink: string;
      }
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom?: {
      palette?: {
        ytBlack?: string;
        ytGray?: string;
        gray?: string;
        lightGray?: string;
        darkGray?: string;
        red?: string;
        lightRed?: string;
        darkRed?: string;
        yellow?: string;
        lightYellow?: string;
        darkYellow?: string;
        green?: string;
        lightGreen?: string;
        darkGreen?: string;
        orange?: string;
        lightOrange?: string;
        darkOrange?: string;
        blue?: string;
        lightBlue?: string;
        darkBlue?: string;
        purple: string;
        turquoise: string;
        pink: string;
      }
    };
  }
};

const scrollBodyLight = {
  scrollbarColor: '#959595 #2b2b2b',
  '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
    backgroundColor: '#2b2b2b',
  },
  '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
    borderRadius: 8,
    backgroundColor: '#959595',
    minHeight: 24,
    border: '3px solid #2b2b2b',
  },
  '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
    backgroundColor: '#6b6b6b',
  },
  '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
    backgroundColor: '#6b6b6b',
  },
  '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#6b6b6b',
  },
  '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
    backgroundColor: '#2b2b2b',
  },
};

const scrollBodyDark = {
  scrollbarColor: '#6b6b6b #2b2b2b',
  '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
    backgroundColor: '#2b2b2b',
  },
  '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
    borderRadius: 8,
    backgroundColor: '#6b6b6b',
    minHeight: 24,
    border: '3px solid #2b2b2b',
  },
  '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
    backgroundColor: '#959595',
  },
  '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
    backgroundColor: '#959595',
  },
  '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#959595',
  },
  '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
    backgroundColor: '#2b2b2b',
  },
};

/**
 * Light Theme Color Palette
 */
const light: PaletteColor = {
  main: '#f2f2f2',
  light: '#ffffff',
  dark: '#bfbfbf',
  contrastText: '#000000',
};

/**
 * Dark Theme Color Palette
 */
const dark: PaletteColor = {
  main: '#424242',
  light: '#6d6d6d',
  dark: '#1b1b1b',
  contrastText: '#ffffff',
};

/**
 * Custom Color Palette
 */
const custom: CustomPalette = {
  palette: {
    ytBlack: '#1E1E1E',
    ytGray: '#aaaaaa',
    gray: '#9e9e9e',
    lightGray: '#e3e3e3',
    darkGray: '#3d3d3d',
    red: '#FC1503',
    lightRed: '#f44336',
    darkRed: '#f50202',
    yellow: '#fff700',
    lightYellow: '#ffeb3b',
    darkYellow: '#ffe23b',
    green: '#08d115',
    lightGreen: '#0cf223',
    darkGreen: '#00af00',
    orange: '#efbb00',
    lightOrange: '#fdc60f',
    darkOrange: '#ffa500',
    blue: '#147af0',
    lightBlue: '#2196f3',
    darkBlue: '#003d83',
    purple: '#7f7fda',
    turquoise: '#27ebd1',
    pink: '#dc5ffc',
  }
};

/**
 * Typography Font Family Options
 */
const typography: TypographyOptions = {
  fontFamily: [
    'Roboto',
    'sans-serif',
  ].join(','),
};

// /**
//  * MUI Light Theme
//  */
// export const lightTheme: ThemeOptions = {
//   palette: {
//     mode: 'light',
//     primary: light,
//     secondary: dark,
//   },
//   custom: custom,
//   typography: typography,
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: {
//         body: scrollBodyLight,
//       },
//     },
//   },
// };

// /**
//  * MUI Dark Theme
//  */
// export const darkTheme: ThemeOptions = {
//   palette: {
//     mode: 'dark',
//     primary: dark,
//     secondary: light,
//   },
//   custom: custom,
//   typography: typography,
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: {
//         body: scrollBodyDark,
//       },
//     },
//   },
// };

/**
 * Create MUI Theme Palette
 * @param mode PaletteMode
 * @returns ThemeOptions
 */
export const createPaletteMode = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    primary: mode === 'light' ? light : dark,
    secondary: mode === 'light' ? dark : light,
  },
  custom,
  typography,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: mode === 'light'
          ? scrollBodyLight
          : scrollBodyDark,
      },
    },
  },
});

/**
 * MUI Theme Mode Hook
 * @param mode PaletteMode
 * @returns Theme
 */
export const useThemeMode = (mode: PaletteMode): Theme => {
  return useMemo(
    () => createTheme(createPaletteMode(mode)),
    [mode]
  );
};

