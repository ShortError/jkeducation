import styled from "styled-components";
import "../../App.css";

const Main = styled.div`
  width: 100%;
  // header 만큼 뺴기
  height: calc(100% - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div``;

const TitleDiv = styled.div`
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
const TitleSpanBlack = styled.span`
  font-size: 96px;
  font-family: SCDream9;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
`;
const TitleSpanRed = styled(TitleSpanBlack)`
  color: #ff0000;
`;

const ContentDiv = styled.div``;
const ContentSpanBlack = styled.span`
  font-size: 26px;
  font-family: SCDream5;

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`;
const ContentSpanRed = styled(ContentSpanBlack)`
  color: red;
`;

const Intro = () => {
  return (
    <Main>
      <Wrapper>
        <TitleDiv>
          <TitleSpanRed>JK&nbsp;</TitleSpanRed>
          <TitleSpanBlack>Evaluation</TitleSpanBlack>
        </TitleDiv>
        <ContentDiv>
          <ContentSpanRed>JK&nbsp;</ContentSpanRed>
          <ContentSpanBlack>
            Evaluation을 통해 자신의 영어 실력을 정확하게 평가하고,
          </ContentSpanBlack>
        </ContentDiv>
        <ContentDiv>
          <ContentSpanRed>JK&nbsp;</ContentSpanRed>
          <ContentSpanBlack>
            보스턴 만의 '맞춤형 커리큘럼 및 교재'를 추천 받으세요.
          </ContentSpanBlack>
        </ContentDiv>
      </Wrapper>
    </Main>
  );
};

export default Intro;
