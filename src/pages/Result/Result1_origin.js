import "../../App.css";
import styled from "styled-components";
import { useState } from "react";

/**
 * @explain 1. 결과를 나타내기 위한 div
 */
const FirstResult = styled.div`
  font-size: 25px;
  margin-bottom: 15px;
`;

/**
 * @explain 영역 별 점수와 그래프를 나타내는 헤더
 */
const ResultOfHeader = styled.div`
  display: flex;
  border-bottom: 2px solid #dbe2ef;
  margin: 0px 0px 0px 15px;
`;
/**
 * @exaplin 결과 헤더 이름을 작성하기 위한 div
 */
const ResultOfHeaderBar = styled.div`
  width: 500px;
`;
/**
 * @explain 결과 레벨
 */
const ResultOfHeaderLevel = styled.div`
  width: 70px;
`;

/**
 * @explain Writing 결과
 */
const ResultOfWriting = styled.div`
  display: flex;
  padding: 15px 0px 10px 0px;
  border-bottom: 2px solid #dbe2ef;
  margin: 0px 0px 0px 15px;
`;
const ResultOfListening = styled(ResultOfWriting)``;
const ResultOfSpeaking = styled(ResultOfWriting)``;
const ResultOfReading = styled(ResultOfWriting)``;

/**
 * @explain 어떤 영역의 결과인지를 알려주는 div
 */
const ResultName = styled.div`
  font-family: Arial;
  width: 100px;
`;

const ResultLevel = styled(ResultOfHeaderLevel)``;

/**
 * @explain 전체 문제중 맞춘 문제 수
 */
const ResultProblemCount = styled.div`
  font-size: 20px;
  font-family: Arial;
  width: 100px;
`;

/**
 * @explain BarGraph를 그리기 위한 기준 Bar
 */
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

const Result1_origin = (prop) => {
  const [result, setResult] = useState(prop.result);
  return (
    <>
      <FirstResult>
        * 영역별 평가항목 및 환산 점수(Detailed Evaluation)
      </FirstResult>
      <ResultOfHeader>
        <ResultName>분야</ResultName>
        <ResultOfHeaderLevel>레벨</ResultOfHeaderLevel>
        <ResultProblemCount>맞춘 문제</ResultProblemCount>
        <ResultOfHeaderBar>점수 그래프</ResultOfHeaderBar>
      </ResultOfHeader>
      <ResultOfWriting>
        <ResultName>Writing</ResultName>
        <ResultLevel>{result.Writing.level}</ResultLevel>
        <ResultProblemCount>
          {result.Writing.answer} / {result.Writing.problem}
        </ResultProblemCount>
        <ResultBarGraph>
          <ResultBarGraphContent
            answer={result.Writing.answer}
            problem={result.Writing.problem}
          />
        </ResultBarGraph>
      </ResultOfWriting>
      <ResultOfListening>
        <ResultName>Listening</ResultName>
        <ResultLevel>{result.Listening.level}</ResultLevel>
        <ResultProblemCount>
          {result.Listening.answer} / {result.Listening.problem}
        </ResultProblemCount>
        <ResultBarGraph>
          <ResultBarGraphContent
            answer={result.Listening.answer}
            problem={result.Listening.problem}
          />
        </ResultBarGraph>
      </ResultOfListening>
      <ResultOfSpeaking>
        <ResultName>Speaking</ResultName>
        <ResultLevel>{result.Speaking.level}</ResultLevel>
        <ResultProblemCount>
          {result.Speaking.answer} / {result.Speaking.problem}
        </ResultProblemCount>
        <ResultBarGraph>
          <ResultBarGraphContent
            answer={result.Speaking.answer}
            problem={result.Speaking.problem}
          />
        </ResultBarGraph>
      </ResultOfSpeaking>
      <ResultOfReading>
        <ResultName>Reading</ResultName>
        <ResultLevel>{result.Reading.level}</ResultLevel>
        <ResultProblemCount>
          {result.Reading.answer} / {result.Reading.problem}
        </ResultProblemCount>
        <ResultBarGraph>
          <ResultBarGraphContent
            answer={result.Reading.answer}
            problem={result.Reading.problem}
          />
        </ResultBarGraph>
      </ResultOfReading>
    </>
  );
};

export default Result1_origin;
