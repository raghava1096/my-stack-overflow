import React from "react";
import { AppBar, Toolbar, Typography, Container  } from "@material-ui/core";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    
    .footerConent {
        padding: 5px;
    }
`;

const Footer = () => {
    return (
        <Wrapper>
        <AppBar position="static" color="primary">
          <Container maxWidth="xs">
            <Toolbar>
            <div className="footerConent">
            <Typography variant="body1" color="inherit">
               <div>Contact: raghavashettySAR@gmail.com</div>
                <div>© 2021 raghavashetty.com</div>
              </Typography>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
        </Wrapper>
    )
};

export default Footer;