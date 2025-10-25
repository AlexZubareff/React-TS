export interface ITheme {
  name:string,
  colors: {
    bgPrimary: string,
    bgSecondary: string,
    bgButton: string,


  }
}

export interface IThemes {
  [key: string]: ITheme
}