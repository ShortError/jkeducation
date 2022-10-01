import "../../App.css";
import styled from "styled-components";
import { useState } from "react";

// 결과를 나타내기 위한 div
const FirstResult = styled.div`
  font-size: 25px;
  width: 1080px;
  margin: 15px auto;
  font-family: SCDream5;
`;

// CEFR LEVEL, 총점, 백분위 text를 나타내는 Header
const Header = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 1000px;
  border-bottom: 2px solid #dbe2ef;
  background-color: #f4dfba;
`;
// CEFR LEVEL의 Header
const CEFR = styled.div`
  box-sizing: border-box;
  width: 700px;
  height: 45px;
  line-height: 45px;
  font-size: 20px;
  text-align: center;
  border-right: 2px solid #dbe2ef;
`;
// 총점의 Header
const TotalScore = styled(CEFR)`
  width: 150px;
`;
// 백분위의 Header
const Percent = styled(CEFR)`
  width: 150px;
`;

// Writing 결과
const Writing = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 1000px;
  height: 80px;
  border-bottom: 2px solid #dbe2ef;
`;
const Listening = styled(Writing)``;
const Speaking = styled(Writing)``;
const Reading = styled(Writing)``;

// CEFR LEVEL에 해당하는 내용
const CEFRContent = styled.div`
  box-sizing: border-box;
  width: 700px;
  display: flex;
  border-left: 2px solid #dbe2ef;
`;

// 영역 이름 ex : listening
const ResultName = styled.div`
  box-sizing: border-box;
  border-right: 2px solid #dbe2ef;
  width: 100px;
  height: 80px;
  line-height: 80px;
  text-align: center;
`;

// 해당 영역 점수
const ResultLevel = styled(ResultName)`
  width: 600px;
  text-align: left;
  height: 80px;
  > div {
    height: 40px;
    line-height: 40px;
  }
`;
// 맞춘 문제 / 총 문제
const TotalScoreContent = styled.div`
  box-sizing: border-box;
  width: 150px;
  border-right: 2px solid #dbe2ef;

  font-size: 20px;
  line-height: 80px;
  text-align: center;
`;
// 정답의 백분율
const PercentContent = styled(TotalScoreContent)``;

// 그래프 그리기
const ResultBarGraph = styled.div`
  width: 400px;
  background-color: #cfd2cf;
  border-radius: 15px;
`;

/**
 * @explain BarGraph의 상대 Bar
 */
const ResultBarGraphContent = styled.div.attrs((prop) => ({}))`
  width: ${(prop) => (prop.answer / prop.problem) * 400 + "px"};
  height: 100%;
  background-color: #a6b1e1;
  border-radius: 15px;
`;

const Result1 = (prop) => {
  const [result, setResult] = useState(prop.result);
  return (
    <>
      <FirstResult>
        * 영역별 평가항목 및 환산 점수(Detailed Evaluation)
      </FirstResult>
      <Header>
        <CEFR>CEFR LEVEL</CEFR>
        <TotalScore>총점</TotalScore>
        <Percent>백분위</Percent>
      </Header>
      <Writing>
        <CEFRContent>
          <ResultName>Writing</ResultName>
          <ResultLevel>
            <div>LEVEL : {result.Writing.level}</div>
            <div>레벨에 대한 설명</div>
          </ResultLevel>
        </CEFRContent>
        <TotalScoreContent>
          {result.Writing.answer} / {result.Writing.problem}
        </TotalScoreContent>
        <PercentContent>
          {Math.round((result.Writing.answer / result.Writing.problem) * 100)}%
        </PercentContent>
      </Writing>
      <Reading>
        <CEFRContent>
          <ResultName>Reading</ResultName>
          <ResultLevel>
            <div>LEVEL : {result.Reading.level}</div>
            <div>레벨에 대한 설명</div>
          </ResultLevel>
        </CEFRContent>
        <TotalScoreContent>
          {result.Reading.answer} / {result.Reading.problem}
        </TotalScoreContent>
        <PercentContent>
          {Math.round((result.Reading.answer / result.Reading.problem) * 100)}%
        </PercentContent>
      </Reading>
      <Listening>
        <CEFRContent>
          <ResultName>Listening</ResultName>
          <ResultLevel>
            <div>LEVEL : {result.Listening.level}</div>
            <div>레벨에 대한 설명</div>
          </ResultLevel>
        </CEFRContent>
        <TotalScoreContent>
          {result.Listening.answer} / {result.Listening.problem}
        </TotalScoreContent>
        <PercentContent>
          {Math.round(
            (result.Listening.answer / result.Listening.problem) * 100
          )}
          %
        </PercentContent>
      </Listening>
      <Speaking>
        <CEFRContent>
          <ResultName>Speaking</ResultName>
          <ResultLevel>
            <div>LEVEL : {result.Speaking.level}</div>
            <div>레벨에 대한 설명</div>
          </ResultLevel>
        </CEFRContent>
        <TotalScoreContent>
          {result.Speaking.answer} / {result.Speaking.problem}
        </TotalScoreContent>
        <PercentContent>
          {Math.round((result.Speaking.answer / result.Speaking.problem) * 100)}
          %
        </PercentContent>
      </Speaking>
    </>
  );
};

export default Result1;
