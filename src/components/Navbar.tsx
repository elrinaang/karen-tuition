import * as React from 'react';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import logo from '../../public/Logo.png';

const StyledAppBar = styled(AppBar)`
  background-colour: ${(p) => p.theme.palette.primary.main };
`
export default function NavBar() {
  return (
    <Box>
      <StyledAppBar position="fixed" elevation={0} >
      <Toolbar>
        <div style={{flexGrow: '1'}}>
        <div style={{width: '25vw', height: '6vh', position:'relative'}}>
        <Image 
          src={logo}
          alt="Logo"
          fill
        />
      </div>
        </div>
      
      <Button color='inherit' variant='contained' disableElevation>Contact Us</Button>
      </Toolbar>
      </StyledAppBar>
    </Box>
  );
}