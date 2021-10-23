import { createGlobalStyle } from 'styled-components';
import font from 'assets/fonts/RedHatDisplay-VariableFont_wght.ttf';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Red Hat Display';
    src: url(${font});
}
 html {
        box-sizing: border-box;
        font-size: 62.5%;
    }
    *, *:before, *:after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    body {
        font-size: 1.6rem;
        font-family: 'Red Hat Display', sans-serif;
    } 
`;
