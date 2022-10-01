import styled from "styled-components";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PaymentIcon from "@mui/icons-material/Payment";

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 80px);
  position: relative;
`;

const Wrapper = styled.div``;

const ContentDiv = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const LevelTestLink = styled(Link)`
  box-sizing: border-box;
  border: none;
  font-family: SCDream5;
  text-decoration: none;
`;
const ManagementLink = styled(LevelTestLink)`
  background-color: #a6e3e9;
`;

const PaymentLink = styled(LevelTestLink)``;

const InnerText = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: 80px;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  border-radius: 25px;
  background-color: #35a753;
  font-size: 25px;
`;

const PaymentInnerText = styled(InnerText)`
  background-color: #fd9f28;
`;

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

const Main = () => {
  return (
    <MainDiv>
      <Wrapper>
        <TitleDiv>
          <TitleSpanRed>JK&nbsp;</TitleSpanRed>
          <TitleSpanBlack>Evaluation</TitleSpanBlack>
        </TitleDiv>
        <ContentDiv>
          <LevelTestLink to="/exam-privacy">
            <InnerText>
              레벨 테스트
              <AssignmentIcon fontSize="large" />
            </InnerText>
          </LevelTestLink>
          <ManagementLink to="/management">
            <InnerText>
              학생 관리
              <ManageAccountsIcon fontSize="large" />
            </InnerText>
          </ManagementLink>
          <PaymentLink to="/payment">
            <PaymentInnerText>
              결제하기
              <PaymentIcon fontSize="large" />
            </PaymentInnerText>
          </PaymentLink>
        </ContentDiv>
      </Wrapper>
    </MainDiv>
  );
};

export default Main;
