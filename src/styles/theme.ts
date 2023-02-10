import { Raleway } from '@next/font/google';
import { Caveat } from '@next/font/google';
import { Poppins } from '@next/font/google';
import { createTheme } from "@mui/material/styles";

const raleway = Raleway({subsets:['latin']})

const caveat = Caveat({subsets:['latin']})

const poppins = Poppins({subsets:['latin'], weight:"400"})

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
    },
    palette: { 
        primary: { 
            main: '#83CACD'
        },
        secondary: { 
            main: '#8A8AE2'
        }
    }
  })