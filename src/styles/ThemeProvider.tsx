import * as React from 'react'; 
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { theme } from './theme'

export const ThemeProvider = ({children} : {children: React.ReactChild}) => { 

    return(
        <MuiThemeProvider theme={theme}>
            <EmotionThemeProvider theme={theme}>
                {React.Children.only(children)}
            </EmotionThemeProvider>
        </MuiThemeProvider>
    )
}