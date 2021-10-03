import React, { useState } from "react";
import { Box, Container, Paper } from "@material-ui/core";
import { Switch  } from "@material-ui/core";
import SearchQuery from "./search-query";
import styled from "styled-components";

interface wrapperProps {
  darkTheme: boolean;
}

const Wrapper = styled.div<wrapperProps>`
background-color: ${(wrapperProps) => wrapperProps.darkTheme ? "black" : "white"};
   .toggle {
    display: flex;
    align-items: center;
    justify-content: right;
    color: brown;
   }
`;

const AppContent: React.FC = () => {
  const darkThemeEnabled = JSON.parse(window.localStorage.getItem("darkTheme") || "false");
  const [darkTheme, setDarkTheme] = useState<boolean>(darkThemeEnabled);
  const label = { 'aria-label': 'Dark Theme' };

  const onChangeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkTheme(event.target.checked);
    window.localStorage.setItem("darkTheme", JSON.stringify(event.target.checked));
  };

  return (
      <Wrapper darkTheme={darkTheme}>
      <div className="toggle">
            <h4>Enable Dark Theme</h4>
            <Switch checked={darkTheme} onChange={(value) => onChangeTheme(value)} inputProps={label} color="primary" />
        </div>
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      >
      <Container maxWidth="md" className="contentBackground">
        <h2 className="subHeader">Welcome, Let's get started...!!!</h2> 
        <SearchQuery />
      </Container>
      </Box>
      </Wrapper>
  )
};


export default AppContent;