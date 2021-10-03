import React from "react";
import { QuestionList } from "./types/dataTypes";
import AccordianView from "./accordian-view";
import styled from "styled-components";
import { List } from "@material-ui/core";

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

interface Props {
  data: QuestionList[];
}

const DisplayQuestionsList: React.FC<Props> = ({ data }) => {
  console.log("DATAAAAAAAAA", data);
  return (
    <div>
      <List>
        {data.map((item, index) => (
          <Wrapper key={index}>
            <AccordianView item={item} />
          </Wrapper>
        ))}
      </List>
    </div>
  );
};

export default DisplayQuestionsList;
