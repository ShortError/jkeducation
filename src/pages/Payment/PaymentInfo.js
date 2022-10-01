import styled from "styled-components";
import "../../App.css";

const Main = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentDiv = styled.div``;

const TitleH2 = styled.h2`
  margin: 15px auto;
  text-align: center;
`;

const InfoRow = styled.div`
  display: flex;
  font-size: 25px;
`;

const InfoHeader = styled.div`
  box-sizing: border-box;
  width: 200px;
  height: 100px;
  border: 1px solid #c9d6df;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f0f5f9;
  border-right: none;
  text-align: center;
`;

const InfoContent = styled(InfoHeader)`
  background-color: white;
  color: black;
`;

// 체험 및 횟수 작성 span
const BasicSpan = styled.span``;
// 제공하는 기능 span
const ProvideSpan = styled.span`
  color: green;
`;
// 미제공 기능 span
const NotProvideSpan = styled.span`
  color: red;
`;

const InfoContentEnd = styled(InfoHeader)`
  background-color: white;
  border-right: 1px solid #c9d6df;
`;

const PaymentInfo = () => {
  return (
    <Main>
      <ContentDiv>
        <TitleH2>이용권별 정보</TitleH2>
        <InfoRow>
          <InfoHeader></InfoHeader>
          <InfoContent>
            <BasicSpan>체험</BasicSpan>
          </InfoContent>
          <InfoContent>
            <BasicSpan>1회</BasicSpan>
          </InfoContent>
          <InfoContent>
            <BasicSpan>10 + 1회</BasicSpan>
          </InfoContent>
          <InfoContentEnd>
            <BasicSpan>50 + 5회</BasicSpan>
          </InfoContentEnd>
        </InfoRow>
        <InfoRow>
          <InfoHeader>
            <BasicSpan>학생 관리</BasicSpan>
          </InfoHeader>
          <InfoContent>
            <NotProvideSpan>X</NotProvideSpan>
          </InfoContent>
          <InfoContent>
            <NotProvideSpan>X</NotProvideSpan>
          </InfoContent>
          <InfoContent>
            <BasicSpan>100명</BasicSpan>
          </InfoContent>
          <InfoContentEnd>
            <BasicSpan>무제한</BasicSpan>
          </InfoContentEnd>
        </InfoRow>
        <InfoRow>
          <InfoHeader>
            <BasicSpan>추천 커리큘럼</BasicSpan>
          </InfoHeader>
          <InfoContent>
            <NotProvideSpan>X</NotProvideSpan>
          </InfoContent>
          <InfoContent>
            <ProvideSpan>O</ProvideSpan>
          </InfoContent>
          <InfoContent>
            <ProvideSpan>O</ProvideSpan>
          </InfoContent>
          <InfoContentEnd>
            <ProvideSpan>O</ProvideSpan>
          </InfoContentEnd>
        </InfoRow>
        <InfoRow>
          <InfoHeader>
            <BasicSpan>자동 시간표</BasicSpan>
          </InfoHeader>
          <InfoContent>
            <NotProvideSpan>X</NotProvideSpan>
          </InfoContent>
          <InfoContent>
            <ProvideSpan>O</ProvideSpan>
          </InfoContent>
          <InfoContent>
            <ProvideSpan>O</ProvideSpan>
          </InfoContent>
          <InfoContentEnd>
            <ProvideSpan>O</ProvideSpan>
          </InfoContentEnd>
        </InfoRow>
      </ContentDiv>
    </Main>
  );
};

export default PaymentInfo;
