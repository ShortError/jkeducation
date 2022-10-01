import styled from "styled-components";
import { useState } from "react";
import StudentList from "./StudentList";
import "../../App.css";
const Main = styled.div`
  width: 900px;
  margin: 0 auto;
  font-family: SCDream5;
`;

const Header = styled.div``;
const HeaderH2 = styled.h2``;

const SearchDiv = styled.div.attrs(() => {})`
  text-align: right;
`;
const SearchInput = styled.input.attrs(() => ({
  placeholder: "이름을 검색하세요.",
}))``;

const ContentDiv = styled.div`
  box-sizing: border-box;
  margin: 15px 0 0 0;
  height: 600px;
  text-align: center;
`;

const ContentHeader = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  background-color: #d1d1d1;
  font-family: Jua;
`;

const Name = styled.div`
  box-sizing: border-box;
  width: 10%;
`;
const DateOfBirth = styled(Name)`
  width: 20%;
`;
const Phone = styled(Name)`
  width: 25%;
`;
const TestResult = styled(Name)`
  width: 15%;
`;
const Curriculum = styled(Name)`
  width: 15%;
`;
const TimeSchedule = styled(Name)`
  width: 10%;
`;

const Delete = styled(Name)`
  width: 5%;
`;

const Management = () => {
  const [name, setName] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Main>
      <Header>
        <HeaderH2>학생관리 시스템</HeaderH2>
        <SearchDiv>
          <SearchInput onChange={nameChange} value={name}></SearchInput>
        </SearchDiv>
      </Header>
      <ContentDiv>
        <ContentHeader>
          <Name>이름</Name>
          <DateOfBirth>생년월일</DateOfBirth>
          <Phone>전화번호</Phone>
          <TestResult>테스트 결과</TestResult>
          <Curriculum>커리큘럼</Curriculum>
          <TimeSchedule>시간표</TimeSchedule>
          <Delete>삭제</Delete>
        </ContentHeader>
        <StudentList searchName={name} />
      </ContentDiv>
    </Main>
  );
};

export default Management;
