// palette.d.ts

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    kpmgPurple: {
      main: string
      dark: string
    }
    disabled: string
  }
  interface PaletteOptions {
    kpmgPurple: {
      main: string
      dark: string
    }
    disabled: string
  }
}

export default function createPalette(palette: PaletteOptions): Palette
