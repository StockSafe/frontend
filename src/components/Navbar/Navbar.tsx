/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable no-empty-pattern */
import { Home } from "@mui/icons-material";
import { AppBar, Box, Button, Switch, Toolbar, Typography, useTheme } from "@mui/material";
import ModeToggleButton from "../ModeToggleButton/ModeToggleButton";

type NavbarProps = {};
const Navbar = ({}: NavbarProps) => {
  const theme = useTheme();
  return (
    <AppBar position="static" sx={{ bgcolor: theme.palette.background.paper }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          fontSize={"1.5rem"}
          sx={{
            flexGrow: 1,
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          <Box component={"span"} color={theme.palette.primary.main}>
            Stock
          </Box>
          <Box component={"span"} color={theme.palette.secondary.main}>
            Safe
          </Box>
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Button
          startIcon={<Home />}
          sx={{
            marginRight: 2,
            color: theme.palette.text.primary,
          }}
        >
          דף הבית
        </Button>
        <ModeToggleButton />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
