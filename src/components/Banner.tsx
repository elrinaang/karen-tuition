import * as React from 'react';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Image from 'next/image';
import BannerPicture from '../../public/BannerPicture.png';

const MainDiv = styled(Grid)`
    padding-top: ${(p) => p.theme.spacing(12)};
    padding-left: ${(p) => p.theme.spacing(12)};
    padding-bottom: ${(p) => p.theme.spacing(12)};
    background-color: ${p => p.theme.palette.primary.main}; 
    height: 50vh
` 

const StyledBannerText = styled(Grid)`
    margin-top: ${(p) => p.theme.spacing(4)};
`

const StyledButtonDiv = styled.div`
    padding-top: ${(p) => p.theme.spacing(3)};

`
const StyledButton = styled(Button)`
    &:first-child {
        margin-right: 20px;
    }
`

export default function Banner() {
    return (
        <MainDiv container>
            <StyledBannerText item xs={12} md={6} alignContent="center" alignItems="center" justifyContent="center" justifyItems="center">
                <Typography variant='banner'>Learning can be fun!</Typography>
                <Typography variant='h6'>Teacher Karen believes that while learning is important, play is equally important too!</Typography>
                <StyledButtonDiv>
                    <StyledButton variant='contained' disableElevation color='inherit'>Learn More</StyledButton>
                    <StyledButton variant='outlined' disableElevation color='inherit'>Learn More</StyledButton>
                </StyledButtonDiv>
            </StyledBannerText>
            <Grid item xs={12} md={6}>
            <div style={{width: '40vw', height: '40vh', position:'relative'}}>
                <Image
                    src={BannerPicture} 
                    alt=""
                    fill
                />
            </div>
            </Grid>
        </MainDiv>
    );
}