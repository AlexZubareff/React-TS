import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'
import { ITheme } from '../models/theme'

export const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
${normalize}

* {
    box-sizing: border-box;
}

body {
    transition: background-color .4s;
    background-color: ${({theme}) => theme.colors.bgSecondary};
    padding: 50px 0 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.429;
    color: black;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}
`
