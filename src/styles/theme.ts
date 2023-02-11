import { Raleway } from '@next/font/google';
import { Caveat } from '@next/font/google';
import { Poppins } from '@next/font/google';
import { Pacifico } from '@next/font/google';
import { Twinkle_Star } from '@next/font/google';
import { createTheme } from "@mui/material/styles";
import { TypographyVariantsOptions } from '@mui/material';

const raleway = Raleway({subsets:['latin']})

const caveat = Caveat({subsets:['latin']})

const poppins = Poppins({subsets:['latin'], weight:"400"})

const pacifico = Pacifico({subsets:['latin'], weight:"400"})

const twinkleStar = Twinkle_Star({subsets:['latin'], weight:"400"})

const palette = { 
    primary: { 
        main: '#83CACD'
    },
    secondary: { 
        main: '#8A8AE2'
    }
}

export const theme = createTheme({
    typography: {
        fontFamily: poppins.style.fontFamily,
        button: {
            fontFamily: raleway.style.fontFamily
          },
        banner: { 
            fontFamily: twinkleStar.style.fontFamily,
            fontWeight: 'bold',
            fontSize: 56
        },
        h6:{
            fontFamily: raleway.style.fontFamily
        }
    } as TypographyVariantsOptions,

    palette: { 
        primary: { 
            main: '#83CACD'
        },
        secondary: { 
            main: '#8A8AE2'
        }
    }
  })