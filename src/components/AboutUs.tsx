import * as React from 'react';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

const MainDiv = styled.div`
    padding: ${(p) => p.theme.spacing(3)};
    height: 50vh
` 

const StyledHeader = styled(Typography)`
font-weight: bold;
font-size: x-large;
`

export default function AboutUs() {
    return (
        <MainDiv>
            <StyledHeader>Who is Teacher Karen?</StyledHeader>
        </MainDiv>
    );
}