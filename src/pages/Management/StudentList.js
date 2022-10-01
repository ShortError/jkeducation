import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import "../../App.css";
// 학생 더미데이터
import student_dummy from "../../db/student_dummy.json";

const Content = styled.div``;

const UserList = styled.div`
  display: flex;
  height: 50px;
  font-family: SCDream5;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Name = styled.div`
  box-sizing: border-box;
  border-bottom: 2px solid #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
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

const DeleteDiv = styled(Name)`
  width: 5%;
`;

const DeleteButton = styled.button`
  box-sizing: border-box;
  width: 40px;
  height: 25px;
  margin: 0;
  padding: 0;
  border: none;
  background-color: #ff2e63;
  color: white;
  border-radius: 5px;
`;

const ResultPage = styled.a.attrs(() => ({
  href: "/result",
}))`
  display: block;
  height: 45px;
  width: 45px;
  background-image: url("/img/management/test.png");
  background-size: 45px;
`;
const CurriculumPage = styled(ResultPage).attrs(() => ({
  href: "/curriculum",
}))`
  background-image: url("/img/management/curriculum.png");
`;
const SchedulePage = styled(ResultPage).attrs(() => ({
  href: "/make-schedule",
}))`
  background-image: url("/img/management/schedule.png");
`;

const StudentList = (prop) => {
  const name = prop.searchName;

  const deleteUser = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      window.alert("삭제되었습니다.");
    } else {
      window.alert("삭제가 취소되었습니다.");
    }
  };

  return (
    <Content>
      {student_dummy.students.map((info) => {
        // 검색 x
        if (name === "") {
          return (
            <UserList key={uuidv4()}>
              <Name>{info.name}</Name>
              <DateOfBirth>{info.birth}</DateOfBirth>
              <Phone>{info.phone}</Phone>
              <TestResult>
                <ResultPage />
              </TestResult>
              <Curriculum>
                <CurriculumPage />
              </Curriculum>
              <TimeSchedule>
                <SchedulePage />
              </TimeSchedule>
              <DeleteDiv>
                <DeleteButton onClick={deleteUser}>삭제</DeleteButton>
              </DeleteDiv>
            </UserList>
          );
          // 특정 사용자 검색
        } else if (info.name.includes(name)) {
          return (
            <UserList key={uuidv4()}>
              <Name>{info.name}</Name>
              <DateOfBirth>{info.birth}</DateOfBirth>
              <Phone>{info.phone}</Phone>
              <TestResult>
                <ResultPage />
              </TestResult>
              <Curriculum>
                <CurriculumPage />
              </Curriculum>
              <TimeSchedule>
                <SchedulePage />
              </TimeSchedule>
              <DeleteDiv>
                <DeleteButton onClick={deleteUser}>삭제</DeleteButton>
              </DeleteDiv>
            </UserList>
          );
        } else {
          return <div key={uuidv4()}></div>;
        }
      })}
    </Content>
  );
};

export default StudentList;
