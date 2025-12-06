/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable no-empty-pattern */
import { Home } from "@mui/icons-material";
import { AppBar, Box, Button, Toolbar, Typography, useTheme } from "@mui/material";
import React from "react";

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
          color="inherit"
          startIcon={<Home />}
          sx={{
            marginRight: 2, // מרווח מהכפתור הבא
            // אם אתה רוצה להשתמש בכפתור קבוע, השתמש ב-Link של ה-Router
          }}
        >
          דף הבית
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
