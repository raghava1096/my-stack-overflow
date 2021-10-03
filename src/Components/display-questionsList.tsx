import React, { useState } from "react";
import { QuestionList } from "../Types/dataTypes";
import AccordianView from "./accordian-view";
import styled from "styled-components";
import { Table, TableBody, TableHead, TableRow, TableCell, TablePagination  } from "@material-ui/core";

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

interface Props {
  data: QuestionList[];
}

const DisplayQuestionsList: React.FC<Props> = ({ data }) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Table>
      <TableHead>
            <TableRow>
                <TableCell
                  key={data.length}
                  align="left"
                  style={{ top: 57, minWidth: 170 }}
                >
                {data.length > 0 ? <div className="resultsFound">{`Total results found: ${data.length}`}</div> : "No results found"}
                </TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((item, index) => (
          <Wrapper key={index}>
            <AccordianView item={item} />
          </Wrapper>
        ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default DisplayQuestionsList;
