import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* manrope-600 - latin */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
        url('/fonts/manrope-v4-latin-600.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
  }

  /* manrope-800 - latin */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local(''),
        url('/fonts/manrope-v4-latin-800.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      height: 100%;
    }

    body {
      font-family: ${theme.font.family};
      background-color: ${theme.colors.neutral.veryPaleBlue};
    }

    p {
      font-size: ${theme.font.sizes.small};
    }

    ul,
    li {
      list-style: none;
    }
  `}
`

export default GlobalStyles
