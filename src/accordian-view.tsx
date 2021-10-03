import React from "react";
import { QuestionList } from "./types/dataTypes";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import styled from "styled-components";

interface Props {
  item: QuestionList;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AccordianView: React.FC<Props> = ({ item }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        {item.title}
      </AccordionSummary>
      <Wrapper>
        <AccordionDetails>
          <div>`Total answers: ${item.answer_count}`</div>
          <div>`Posted by: ${item.owner.display_name}`</div>
          <div>`Created on: ${item.creation_date}`</div>
          <a href={item.link}>{item.link}</a>
        </AccordionDetails>
      </Wrapper>
    </Accordion>
  );
};

export default AccordianView;
