import React from "react";
import { QuestionList } from "../Types/dataTypes";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import styled from "styled-components";
import BackgroundLetterAvatars from "./display-avatar";

interface Props {
  item: QuestionList;
}

interface wrapperProps {
  darkTheme: boolean;
}

const Wrapper = styled.div<wrapperProps>`
background-color: ${(wrapperProps) => wrapperProps.darkTheme ? "black" : "white"};

.MuiAccordionDetails-root {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  word-break: break-all;
}

 .avatarDetails {
   color: red;
   display: flex;
   margin-bottom: 10px;
   align-items: center;
 }

 .avatarIcon {
  display: flex;
  padding-left: 20px;
  align-items: center
 }
  .profileLink{
    margin-left: 10px;
  }
`;


const HeaderWrapper = styled.div<wrapperProps>`
 .MuiAccordionSummary-root {
    background-color: ${(wrapperProps) => wrapperProps.darkTheme ? "aquamarine" : "white"};
  }
`;

const AccordianView: React.FC<Props> = ({ item }) => {
  const darkTheme = JSON.parse(window.localStorage.getItem("darkTheme") || "false");
  return (
    <Accordion>
      <HeaderWrapper  darkTheme={darkTheme}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <div className={darkTheme ? "" : "question-hedaer"}>{item.title}</div>
      </AccordionSummary>
      </HeaderWrapper>
      <Wrapper darkTheme={darkTheme}>
        <AccordionDetails>
          <div className="avatarDetails">
              Posted by:
            <div className="avatarIcon">
            <BackgroundLetterAvatars  avatarName={item.owner.display_name} />
            <div className="profileLink"><a style={{display: "table-cell"}} target="_blank" href={item.owner.link}>{item.owner.display_name}</a></div>
            </div>
          </div>
          <div className="resultsFound">{`Total answers: ${item.answer_count}`}</div>
          <div className="subHeader">{`Posted on: ${new Date(item.creation_date).toDateString()}`}</div>
          <div><a style={{display: "table-cell"}} target="_blank" href={item.link}>Click here to view answers</a></div>
        </AccordionDetails>
      </Wrapper>
    </Accordion>
  );
};

export default AccordianView;
