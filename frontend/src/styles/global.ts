import { css } from '@emotion/react'

export default css`
  html,
  body,
  #__next {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  html {
    word-break: normal;
  }
  #__next {
    display: flex;
    flex-direction: column;
  }
  body {
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  }
`
