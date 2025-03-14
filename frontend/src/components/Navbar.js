import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import BuildIcon from '@mui/icons-material/Build';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import TerminalIcon from '@mui/icons-material/Terminal';

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
    <List sx={{ bgcolor: '#141414', height: '100%' }}>
      <ListItem button component={RouterLink} to="/" onClick={handleDrawerToggle}>
        <ListItemText primary="Home" primaryTypographyProps={{ style: { color: 'white' } }} />
      </ListItem>
      <ListItem button component={RouterLink} to="/services" onClick={handleDrawerToggle}>
        <ListItemText primary="Serviços" primaryTypographyProps={{ style: { color: 'white' } }} />
      </ListItem>
      <ListItem button component={RouterLink} to="/about" onClick={handleDrawerToggle}>
        <ListItemText primary="Tecnologias" primaryTypographyProps={{ style: { color: 'white' } }} />
      </ListItem>
      <ListItem button component={RouterLink} to="/plans" onClick={handleDrawerToggle}>
        <ListItemText primary="Planos" primaryTypographyProps={{ style: { color: 'white' } }} />
      </ListItem>
      <ListItem button component={RouterLink} to="/login" onClick={handleDrawerToggle}>
        <ListItemText primary="Login" primaryTypographyProps={{ style: { color: 'white' } }} />
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
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              position: 'relative',
              width: '2rem',
              height: '2rem',
            }}
          >
            <TerminalIcon
              sx={{
                position: 'absolute',
                color: scrolled ? 'var(--primary-color)' : '#42E2BB',
                fontSize: '2rem',
                transform: 'rotate(0deg)',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'rotate(5deg)',
                },
              }}
            />
            <DeveloperModeIcon
              sx={{
                position: 'absolute',
                color: scrolled ? 'var(--primary-color)' : '#42E2BB',
                fontSize: '1.2rem',
                right: '-5px',
                bottom: '-5px',
                opacity: 0.8,
              }}
            />
          </Box>
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
              color: scrolled ? 'var(--text-primary)' : 'white',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
          >
            Compile<span className="gradient-text"></span>
          </Typography>

          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '1.8rem',
                height: '1.8rem',
                mr: 1,
              }}
            >
              <TerminalIcon
                sx={{
                  position: 'absolute',
                  color: scrolled ? 'var(--primary-color)' : '#42E2BB',
                  fontSize: '1.8rem',
                }}
              />
              <DeveloperModeIcon
                sx={{
                  position: 'absolute',
                  color: scrolled ? 'var(--primary-color)' : '#42E2BB',
                  fontSize: '1rem',
                  right: '-5px',
                  bottom: '-5px',
                  opacity: 0.8,
                }}
              />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component={RouterLink}
              to="/"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: scrolled ? 'var(--text-primary)' : 'white',
                textDecoration: 'none',
              }}
            >
              Compile
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            <Button
              component={RouterLink}
              to="/"
              sx={{ 
                color: scrolled ? 'var(--text-primary)' : 'white', 
                mx: 1,
                transition: 'color 0.3s ease'
              }}
            >
              Home
            </Button>
            <Button
              component={RouterLink}
              to="/services"
              sx={{ 
                color: scrolled ? 'var(--text-primary)' : 'white', 
                mx: 1,
                transition: 'color 0.3s ease'
              }}
            >
              Serviços
            </Button>
            <Button
              component={RouterLink}
              to="/about"
              sx={{ 
                color: scrolled ? 'var(--text-primary)' : 'white', 
                mx: 1,
                transition: 'color 0.3s ease'
              }}
            >
              Tecnologias
            </Button>
            <Button
              component={RouterLink}
              to="/plans"
              sx={{ 
                color: scrolled ? 'var(--text-primary)' : 'white', 
                mx: 1,
                transition: 'color 0.3s ease'
              }}
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
                color: 'black',
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
            sx={{ 
              color: scrolled ? 'var(--text-primary)' : 'white',
              display: { xs: 'flex', md: 'none' },
              ml: 'auto' 
            }}
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