/**
 * @explain 테스트 유의사항 확인 페이지
 */

import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 80px);
  width: 100vw;
`;

const ContentDiv = styled.div``;

const Content = styled.div`
  font-size: 18px;
  font-family: Jua;
  margin: 15px 0 0 0;
`;

const ContentH2 = styled.h2`
  text-align: center;
`;

const NextDiv = styled.div`
  margin: 15px 0 0 0;
  text-align: center;
`;

const NextLink = styled(Link)`
  box-sizing: border-box;
  border: none;
  border-radius: 50px;
  width: 250px;
  height: 250px;
  font-family: Jua;
  font-size: 20px;
  padding: 15px 20px 15px 20px;
  background-color: #1e1d4d;
  color: white;
  text-decoration: none;
`;

const ExamNotice = () => {
  return (
    <Main>
      <ContentDiv>
        <ContentH2>시험 정보</ContentH2>
        <Content>
          1. 시험은 총 4가지 영역으로 구성됩니다.(Speaking, Listening, Writing,
          Reading)
        </Content>
        <Content>
          2. 각 영역별로 난이도가 0부터 시작하여 문제를 맞출수록 난이도가
          올라갑니다.
        </Content>
        <Content>3. 총 시험 시간은 약 60분입니다.</Content>
        <Content>4. 컴퓨터로 시험치는 것을 권장합니다.</Content>
        <NextDiv>
          <NextLink to="/select-exam">시험 시작</NextLink>
        </NextDiv>
      </ContentDiv>
    </Main>
  );
};

export default ExamNotice;
