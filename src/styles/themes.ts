import { ITheme, IThemes } from '../models/theme'

const light: ITheme = {
  name: 'light',
  colors: {
    bgPrimary: '#4682b4',
    bgSecondary: 'rgb(237, 240, 241)',
    bgButton: '#084b81ff',


  },
}

const dark: ITheme = {
  name: 'dark',
  colors: {
    bgPrimary: 'black',
    bgSecondary: 'gray',
    bgButton: 'gray',
  },
}

export const themes: IThemes = {
  light: light,
  dark: dark
}
