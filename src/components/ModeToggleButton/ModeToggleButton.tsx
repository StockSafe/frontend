import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import { ColorModeContext } from "../../theme/themeContext";

const ModeToggleButton = () => {
  const theme = useTheme();

  const colorMode = useContext(ColorModeContext);

  return (
    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit" aria-label="Toggle light/dark mode">
      {theme.palette.mode === "dark" ? <Brightness7Icon sx={{ color: theme.palette.text.primary }} /> : <Brightness4Icon sx={{ color: theme.palette.text.primary }} />}
    </IconButton>
  );
};

export default ModeToggleButton;
