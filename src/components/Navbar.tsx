import * as React from 'react';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';
import logo from '../../public/Logo.png';

const StyledAppBar = styled(AppBar)`
  background-colour: ${(p) => p.theme.palette.primary.main };
`
const LogoDiv = styled.div`
  padding-left: ${(p) => p.theme.spacing(2)}
`
export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <LogoDiv>
          <Image 
            src={logo}
            alt="Logo"
            width={100}
            height={100}
          />
        </LogoDiv>
      </StyledAppBar>
    </Box>
  );
}