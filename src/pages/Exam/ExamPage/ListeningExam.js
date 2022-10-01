import styled from "styled-components";
import exams from "../../../db/listening_dummy.json";
import "../../../App.css";
import { useState } from "react";
import produce from "immer";
import { useNavigate } from "react-router-dom";
const Main = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  font-family: SCDream5;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1080px;
  margin: 0 auto;
`;

const PartTitle = styled.div`
  box-sizing: border-box;
  margin-top: 50px;
  font-size: 40px;
  border-bottom: 5px solid grey;
`;

const ExamQuestion = styled.div`
  box-sizing: border-box;
  font-size: 35px;
  margin-top: 20px;
`;
const ExamExample = styled.div`
  box-sizing: border-box;
  width: 1000px;
  font-size: 30px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    border: 2px solid grey;
    border-radius: 10px;
    background-color: #ededed;
  }
`;

const ButtonDiv = styled.div`
  box-sizing: border-box;
  margin-top: 25px;
  text-align: center;
`;

const NextButton = styled.button`
  box-sizing: border-box;
  width: 150px;
  padding: 10px 30px 10px 30px;
  text-align: center;
  border: none;
  border-radius: 15px;
  font-size: 15px;
  font-family: SCDream5;
  color: white;
  background-color: #1e1d4d;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const ListeningExam = () => {
  const navi = useNavigate();

  // explain dummy에서 시험문제 가져오기
  const exam = exams.exam;

  // number : 몇 번째 문제
  // answer : 정답 (주관식이면 서술형 답, 객관식이면 보기를 저장)
  // answerNum : 몇 번째 보기인지
  const [examInfo, setExamInfo] = useState({
    number: 1,
    answer: "",
    answerNum: "",
  });

  const selectAnswer = (answer) => {
    setExamInfo({ ...examInfo, answerNum: answer });
  };

  console.log(examInfo);

  const getNextQuestion = (e) => {
    e.preventDefault();
    setExamInfo(
      produce((draft) => {
        draft.number += 1;
        draft.answer = "";
        draft.answerNum = "";
      })
    );

    // 더 이상 문제가 없다면
    /**
     * @explain 서버에 요청해서 다음문제가 없을 때를 가정
     * 다음 문제가 없다면 다시 시험을 선택하는 화면으로 넘어가게
     */
    if (exam[examInfo.number] === undefined) {
      navi("/select-exam");
    }
  };

  // exam[examInfo.number -1] : examInfo.number에는 현재 몇 번째 문제를 풀고 있는지 나타내는데
  // 배열은 0부터 시작하니 현재 문제 번호 -1이 현재 풀고 있는 문제를 나타낸다.
  return (
    <Main>
      <Wrapper>
        <PartTitle>Part : Listening</PartTitle>
        <ExamQuestion>
          {examInfo.number}. {exam[examInfo.number - 1].question}
        </ExamQuestion>
        <audio controls>
          <source src={exam[examInfo.number - 1].url} type="audio/mp3" />
        </audio>
        {exam[examInfo.number - 1].example.map((example, index) => (
          <ExamExample key={example} onClick={() => selectAnswer(index + 1)}>
            {index + 1 === examInfo.answerNum ? (
              <img
                src="/img/test/check.png"
                style={{ width: "20px", height: "20px" }}
                alt="check"
              />
            ) : (
              <span>{index + 1}. </span>
            )}
            {example}
          </ExamExample>
        ))}
        <ButtonDiv>
          <NextButton onClick={getNextQuestion}>다음 문제</NextButton>
        </ButtonDiv>
      </Wrapper>
    </Main>
  );
};

export default ListeningExam;
