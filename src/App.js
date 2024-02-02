import React from "react";
import {
  TableRow,
  TableHead,
  TableBody,
  Table,
  TableCell,
  Paper,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import Customer from "./components/Customer";

const theme = createTheme();

const StyledPaper = styled(Paper)({
  width: "100%",
  marginTop: theme.spacing(3),
  overflowX: "auto",
});

const StyledTable = styled(Table)({
  minWidth: 1080,
});

function App() {
  const customers = [
    {
      id: "1",
      image: "https://placeimg.com/64/64/1",
      name: "홍길동",
      birthday: "010206",
      gender: "남자",
      job: "대학생",
    },
    {
      id: "2",
      image: "https://placeimg.com/64/64/2",
      name: "이순신",
      birthday: "7810125",
      gender: "남자",
      job: "회사원",
    },
    {
      id: "3",
      image: "https://placeimg.com/64/64/3",
      name: "신사임당",
      birthday: "880818",
      gender: "여자",
      job: "주부",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <StyledPaper>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>사진</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <Customer key={customer.id} {...customer} />
            ))}
          </TableBody>
        </StyledTable>
      </StyledPaper>
    </ThemeProvider>
  );
}

export default App;
