import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            color="inherit"
            variant="h6"
            component={NavLink}
            sx={{ flexGrow: 1, textDecoration: "none" }}
          >
            Blog
          </Typography>
          <Button color="inherit" to="/" component={NavLink}>
            Home
          </Button>
          <Button color="inherit" to="/new-post" component={NavLink}>
            New post
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
