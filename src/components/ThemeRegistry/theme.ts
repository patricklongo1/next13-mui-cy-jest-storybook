import { Roboto } from 'next/font/google'
import { colors } from '@mui/material'
import { createTheme } from '@mui/material/styles'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  palette: {
    background: {
      default: '#ffffff',
      paper: colors.common.white,
    },
    primary: {
      dark: '#11389A',
      main: '#005EB8',
      light: '#1976D2',
    },
    secondary: {
      main: colors.indigo[500],
    },
    kpmgPurple: {
      main: '#7213ea',
      dark: '#550be1',
    },
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        gutters: {
          '@media (min-width: 600px)': {
            minHeight: '94px',
          },
          minHeight: '94px',
        },
      },
    },
  },
})

export default theme
