import '@emotion/react';
import { Theme as MUITheme } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
/* This is the suggested way of declaring theme types */
declare module '@emotion/react' {
  export interface Theme extends MUITheme {}
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    poster: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    banner: true;
  }
}
