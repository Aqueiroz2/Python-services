import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      <ListItem button component={RouterLink} to="/" onClick={handleDrawerToggle}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={RouterLink} to="/services" onClick={handleDrawerToggle}>
        <ListItemText primary="Serviços" />
      </ListItem>
      <ListItem button component={RouterLink} to="/about" onClick={handleDrawerToggle}>
        <ListItemText primary="Sobre Python" />
      </ListItem>
      <ListItem button component={RouterLink} to="/plans" onClick={handleDrawerToggle}>
        <ListItemText primary="Planos" />
      </ListItem>
      <ListItem button component={RouterLink} to="/login" onClick={handleDrawerToggle}>
        <ListItemText primary="Login" />
      </ListItem>
    </List>
  );

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <CodeIcon sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            mr: 1, 
            color: 'var(--primary-color)',
            fontSize: '2rem'
          }} />
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'var(--text-primary)',
              textDecoration: 'none',
            }}
          >
            PYTHON<span className="gradient-text">SERVICES</span>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            <Button
              component={RouterLink}
              to="/"
              sx={{ color: 'var(--text-primary)', mx: 1 }}
            >
              Home
            </Button>
            <Button
              component={RouterLink}
              to="/services"
              sx={{ color: 'var(--text-primary)', mx: 1 }}
            >
              Serviços
            </Button>
            <Button
              component={RouterLink}
              to="/about"
              sx={{ color: 'var(--text-primary)', mx: 1 }}
            >
              Sobre Python
            </Button>
            <Button
              component={RouterLink}
              to="/plans"
              sx={{ color: 'var(--text-primary)', mx: 1 }}
            >
              Planos
            </Button>
            <Button
              component={RouterLink}
              to="/login"
              variant="contained"
              sx={{
                ml: 2,
                background: 'var(--primary-color)',
                '&:hover': {
                  background: 'var(--primary-dark)',
                }
              }}
            >
              Login
            </Button>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default Navbar; 