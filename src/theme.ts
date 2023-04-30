import { createTheme } from "@mui/material";

export const HEADER_HEIGHT_MOBILE = 56;
export const HEADER_HEIGHT_DESKTOP = 64;

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F4CE14",
    },
    secondary: {
      main: "#495E57",
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          whiteSpace: "nowrap",
        },
      },
    },
  },
  shadows: [
    "none",
    "0px 0px 5px -3px rgba(0,0,0,0.3)",
    "0px 0px 8px -4px rgba(0,0,0,0.3)",
    "0px 0px 10px -5px rgba(0,0,0,0.3)",
    "0px 0px 12px -6px rgba(0,0,0,0.3)",
    "0px 0px 14px -7px rgba(0,0,0,0.3)",
    "0px 0px 16px -7px rgba(0,0,0,0.3)",
    "0px 0px 18px -7px rgba(0,0,0,0.3)",
    "0px 0px 20px -7px rgba(0,0,0,0.3)",
    "0px 0px 22px -7px rgba(0,0,0,0.3)",
    "0px 0px 24px -8px rgba(0,0,0,0.3)",
    "0px 0px 26px -8px rgba(0,0,0,0.3)",
    "0px 0px 28px -8px rgba(0,0,0,0.3)",
    "0px 0px 30px -8px rgba(0,0,0,0.3)",
    "0px 0px 32px -8px rgba(0,0,0,0.3)",
    "0px 0px 34px -9px rgba(0,0,0,0.3)",
    "0px 0px 36px -9px rgba(0,0,0,0.3)",
    "0px 0px 38px -9px rgba(0,0,0,0.3)",
    "0px 0px 40px -9px rgba(0,0,0,0.3)",
    "0px 0px 42px -9px rgba(0,0,0,0.3)",
    "0px 0px 44px -10px rgba(0,0,0,0.3)",
    "0px 0px 46px -10px rgba(0,0,0,0.3)",
    "0px 0px 48px -10px rgba(0,0,0,0.3)",
    "0px 0px 50px -10px rgba(0,0,0,0.3)",
    "0px 0px 52px -10px rgba(0,0,0,0.3)",
  ],
});
