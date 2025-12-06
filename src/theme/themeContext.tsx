/* eslint-disable react-refresh/only-export-components */
import { createContext, useMemo, useState, type PropsWithChildren } from "react";
import { getAppTheme } from "./appTheme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

type ColorModeContextType = {
  toggleColorMode: () => void;
};

export const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {},
});

export const ThemeModeProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
