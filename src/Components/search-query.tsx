import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
import { getQuestions, getQuestionsByAdvanceSearch } from "../Api/search-api";
import { QuestionList } from "../Types/dataTypes";
import DisplayQuestionsList from "./display-questionsList";
import styled from "styled-components";
import { CircularProgress, Button } from "@material-ui/core";

const DisplayWrapper = styled.div`
  margin: 20px;
  padding: 10px;
`;

interface wrapperProps {
  darkTheme: boolean;
}

const Wrapper = styled.div<wrapperProps>`
  .ForwardRef-root-6 {
    background-color: ${(wrapperProps) => wrapperProps.darkTheme ? "aquamarine" : "white"};
  }

  .buttonWrapper {
    display: flex;
    justify-content: space-evenly;
  }
`;

const SearchQuery: React.FC = () => {
  const [queryString, setQueryString] = useState<string>();
  const [questionsList, setQuestionsList] = useState<QuestionList[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setErorr] = useState<string>();
  const darkTheme = JSON.parse(window.localStorage.getItem("darkTheme") || "false");

  const setQuery = (value: string) => {
    setQueryString(value);
    if (!value) {
      setQuestionsList(undefined);
    }
    setErorr(undefined);
  };

  const checkCachedQueries = (queryString: string) => {
    const result = JSON.parse(window.localStorage.getItem("userQueries") || "[]");

    if (result && result.find((item: any) => item.id === queryString)) {
      const queryResult = result.filter((item: any) => item.id === queryString);
      setQuestionsList(queryResult[0].value);
      return true;
    }
    return false;
  }

  const getSearchresults = async (advancedSearch?: boolean) => {
  
  if (queryString) {
    setLoading(true);
    const isQueryCached =  await checkCachedQueries(queryString);
     
    if (isQueryCached) {
      setLoading(false);
      setErorr(undefined);
      return;
    }


    let result;
     if (advancedSearch) {
      result = await getQuestionsByAdvanceSearch(queryString)
      .catch(() => { 
        setQuestionsList(undefined);
        setLoading(false);
        setErorr("Unable to find result, please try again");
      });

     } else {
      result = await getQuestions(queryString)
                        .catch(() => { 
                          setQuestionsList(undefined);
                          setLoading(false);
                          setErorr("Unable to find result, please try again");
                        });
     }

    if (result && result?.items && queryString) {
      let values = JSON.parse(window.localStorage.getItem("userQueries") || "[]");

      if (values && (values.length === 5 || values.length > 5)) {
        values = values.splice(1);
      } 

      values.push({
        id: queryString,
        value: result.items,
      });
      window.localStorage.setItem("userQueries", JSON.stringify(values));
      setQuestionsList(result.items);
      setErorr(undefined);
    }
    setLoading(false);
  }
  };

  return (
    <Wrapper darkTheme={darkTheme && queryString ? true : false}>
      <SearchBar
        onChange={(value) => setQuery(value)}
        onRequestSearch={() => getSearchresults()}
        placeholder="Type your query, hit enter and relax !!!"
        style={{
          margin: "20px auto 10px auto",
          maxWidth: 800
        }}
      />
      <div className="buttonWrapper"> 
        <Button 
        variant="contained" 
        color="primary" 
        disabled={!queryString && !darkTheme}
        onClick={() => {
          getSearchresults(true);
        }}
        >
         ADVANCE SEARCH
        </Button>
        <Button 
        variant="contained" 
        color="primary" 
        disabled={!window.localStorage.getItem("userQueries") && !darkTheme}
        onClick={() => {
          setQuestionsList(undefined);
          window.localStorage.removeItem("userQueries");
        }}
        >
         CLEAR RESULTS
        </Button>
      </div>
      {loading && <CircularProgress color="primary" />}
      {queryString && questionsList &&
      <DisplayWrapper>
        <DisplayQuestionsList data={questionsList} />
      </DisplayWrapper>
      }
      {error && <div className="error">{error}</div>}
    </Wrapper>
  );
};

export default SearchQuery;
