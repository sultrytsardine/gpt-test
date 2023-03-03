import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
        Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        line-height: 1.6;
        font-size: 18px;
        background-color: #F5E9CF;
    }
    
    * {
        box-sizing: border-box;
    }
    
    a {
        color: #0070f3;
        text-decoration: none;
    }
    
    a:hover {
        text-decoration: underline;
    }
    
    img {
        max-width: 100%;
        display: block;
    }
    
    h1,
    h2,
    p,
    ul {
        margin: 0 0;
    }
    
    button {
        padding: 0.5rem 1rem;
        font-weight: bold;
    }
    
    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;