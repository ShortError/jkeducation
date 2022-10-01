/**
 * @explain 응시 영역 선택하는 컴포넌트
 */

import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import "../../../App.css";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 80px);
  font-family: SCDream5;
`;

const Wrapper = styled.div``;

const SelectLevelDiv = styled.div``;

const BasicButton = styled.button`
  box-sizing: border-box;
  border: none;
  padding: 0px;
  width: 220px;
  height: 90px;
  color: white;
  font-family: SCDream5;
  font-size: 24px;
  border-radius: 10px;
  border: none;
  background-color: #35a753;
  cursor: pointer;
`;
const IntermediateButton = styled(BasicButton)``;
const AdvancedButton = styled(BasicButton)``;
const PrepButton = styled(IntermediateButton)``;

const ResultDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;
const ResultButton = styled.button`
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  width: 220px;
  height: 90px;

  text-align: center;
  text-decoration: none;
  color: white;
  font-family: SCDream5;
  cursor: pointer;
  font-size: 20px;
  background-color: #fd9f28;
`;

const SelectExam = () => {
  const navi = useNavigate();

  const isSelectTest = (test) => {
    if (window.confirm(`${test}시험을 시작할까요?`)) {
      navi(`/exam/${test}`);
    } else {
    }
  };

  const goResultPage = () => {
    navi("/result");
  };

  return (
    <Main>
      <Wrapper>
        <SelectLevelDiv>
          <h1 style={{ textAlign: "center" }}>시험 영역을 선택하세요.</h1>
          <div style={{ display: "flex", columnGap: "30px" }}>
            <BasicButton onClick={() => isSelectTest("Writing")}>
              Writing
            </BasicButton>
            <IntermediateButton onClick={() => isSelectTest("Reading")}>
              Reading
            </IntermediateButton>
            <AdvancedButton onClick={() => isSelectTest("Listening")}>
              Listening
            </AdvancedButton>
            <PrepButton onClick={() => isSelectTest("Speaking")}>
              Speaking
            </PrepButton>
          </div>
          <ResultDiv>
            <ResultButton onClick={goResultPage}>결과보기</ResultButton>
          </ResultDiv>
        </SelectLevelDiv>
      </Wrapper>
    </Main>
  );
};
export default SelectExam;
