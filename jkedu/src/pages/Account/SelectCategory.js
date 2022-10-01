import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../App.css";
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 80px);

  font-family: SCDream5;
`;

const ContentDiv = styled.div``;

const TitleDiv = styled.div`
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 20px;
`;
const TitleSpanBlack = styled.span`
  font-size: 96px;
  font-family: SCDream9;
`;
const TitleSpanRed = styled(TitleSpanBlack)`
  color: #ff0000;
`;

const LinkDiv = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 270px;
`;

const StudentLink = styled(Link)`
  box-sizing: border-box;
  display: inline-block;
  padding: 35px 80px;
  border-radius: 15px;
  text-decoration: none;
  background-color: #35a753;
  color: white;
`;
const TeacherLink = styled(StudentLink)`
  margin-top: 15px;
`;

const SelectCategory = () => {
  return (
    <Main>
      <ContentDiv>
        <TitleDiv>
          <TitleSpanRed>JK&nbsp;</TitleSpanRed>
          <TitleSpanBlack>Evaluation</TitleSpanBlack>
        </TitleDiv>

        <LinkDiv>
          <StudentLink to="/login">Student Login</StudentLink>
          <TeacherLink to="/login">Teacher Login</TeacherLink>
        </LinkDiv>
      </ContentDiv>
    </Main>
  );
};

export default SelectCategory;
