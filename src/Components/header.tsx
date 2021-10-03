import React from "react";
import { AppBar, Toolbar, Typography  } from "@material-ui/core";
import styled from "styled-components";
import  Icon  from "../Images/Icon.png";

const Wrapper = styled.div`
        position: sticky;
        top: 0;
        width: 100%;
        z-index: 9999;
   
    .title {
        padding: 5px;
    }
`;

const Header = () => {
return (
<Wrapper>
  <AppBar position="static"> 
   <Toolbar>
   <img src={Icon} width="50px" alt="logo" />
   <div className="title">
    <Typography variant="h6">
            My Stack-Overflow
    </Typography>
    </div>
    </Toolbar>
   </AppBar>
   </Wrapper>
);
};

export default Header;