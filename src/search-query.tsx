import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
import { getQuestions } from "./Api/search-api";
import { QuestionList } from "./types/dataTypes";
import DisplayQuestionsList from "./display-questionsList";
import styled from "styled-components";
import { Container } from "@material-ui/core";

const DisplayWrapper = styled.div`
  margin: 20px;
  padding: 10px;
`;
const SearchQuery: React.FC = () => {
  const [queryString, setQueryString] = useState<string>();
  const [questionsList, setQuestionsList] = useState<QuestionList[]>([]);

  const getSearchresults = async () => {
    console.log("onRequestSearch", queryString);
    const result = await getQuestions(queryString);
    console.log("result", result);

    if (result && result?.items) {
      setQuestionsList(result.items);
    }
  };

  return (
    <Container maxWidth="md">
      <SearchBar
        onChange={(value) => {
          if (value) {
            setQueryString(value);
          }
        }}
        onRequestSearch={() => getSearchresults()}
        placeholder="Enter your query here"
        style={{
          margin: "0 auto",
          maxWidth: 800
        }}
      />
      <DisplayWrapper>
        <DisplayQuestionsList data={questionsList} />
      </DisplayWrapper>
    </Container>
  );
};

export default SearchQuery;
