import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{flexGrow: 1, mb: 5}}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            color="inherit"
            variant="h3"
            component={NavLink}
            sx={{flexGrow: 1, textDecoration: 'none', padding: 4}}
            to="/"
          >
            My Blog
          </Typography>
          <Button color="inherit" to="/" component={NavLink}>
            Home
          </Button>
          <Button color="inherit" to="/posts/new-post" component={NavLink}>
            New post
          </Button>
          <Button color="inherit" to="/about" component={NavLink}>
            About
          </Button>
          <Button color="inherit" to="/contacts" component={NavLink}>
            Contacts
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
