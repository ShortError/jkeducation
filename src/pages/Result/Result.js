import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Result1 from "./Result1";
import Result1Graph from "./Result1Graph";
import "../../App.css";
import Result1RadarChart from "./Result1RadarChart";

const Main = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 50px 0;
  display: flex;
  justify-content: center;
  font-family: SCDream5;
`;

const Wrapper = styled.div``;

const NameH2 = styled.h2`
  margin: 15px 0px;
  font-size: 35px;
`;

const Content = styled.div``;

const CurriculumLink = styled(Link)`
  border: none;
  border-radius: 15px;
  font-family: SCDream5;
  font-size: 15px;
  padding: 10px 30px 10px 30px;
  background-color: #35a753;
  text-decoration: none;
  color: white;
  display: inline-block;
  margin: 15px 0px 0px 0px;
  &:hover {
    cursor: pointer;
  }
`;

const Result = () => {
  /**
   * @explain answer : 정답 수, problem : 문제 수
   */
  const [result, setResult] = useState({
    Writing: {
      answer: 5,
      problem: 6,
      level: "B2+",
    },
    Listening: {
      answer: 15,
      problem: 34,
      level: "B1",
    },
    Speaking: {
      answer: 10,
      problem: 10,
      level: "C1",
    },
    Reading: {
      answer: 8,
      problem: 34,
      level: "A1",
    },
    Grammar: {
      answer: 6,
      problem: 10,
      level: "B1",
    },
  });

  return (
    <Main>
      <Wrapper>
        <NameH2>Evaluation Report</NameH2>
        <NameH2>결과 리포트</NameH2>

        <Content>
          <ResultPersonalInfo />
          <Result1 result={result} />
          <div style={{ display: "flex", marginTop: "20px" }}>
            <Result1RadarChart result={result} />
            <Result1Graph result={result} />
          </div>
          {/* <Result2 result={result} /> */}
        </Content>
        <CurriculumLink to="/curriculum">추천 커리큘럼 보러가기</CurriculumLink>
      </Wrapper>
    </Main>
  );
};

export default Result;
