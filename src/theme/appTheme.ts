import type { Theme } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

export const getAppTheme = (mode: "light" | "dark"): Theme =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#215F9D",
      },
      secondary: {
        main: "#00A87F",
      },
      error: {
        main: "#E91E63",
      },
      background: {
        default: mode === "light" ? "#F5F7FA" : "#121212", // רקע כללי
        paper: mode === "light" ? "#FFFFFF" : "#1D1D1D", // רקע לכרטיסים/רכיבים
      },
      // ... הגדרות טקסט וטיפוגרפיה נוספות
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
    },
    components: {
      // לדוגמה, התאמה של סגנון הטבלה לכל האפליקציה
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontSize: "0.85rem",
          },
        },
      },
    },
  });
