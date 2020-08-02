import React from 'react';
import {createGlobalStyle} from "styled-components";
import Header from "../components/Header/Header";
import logo from "../img/GitHub-Mark-Light-64px.png";
import Profile from "./Profile";

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

function App() {
    return (
        <>
            <GlobalStyle/>
            <Header logo={logo}/>
            <Profile/>
        </>
    );
}

export default App;
