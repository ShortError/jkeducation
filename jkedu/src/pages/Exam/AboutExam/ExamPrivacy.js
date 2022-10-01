/**
 * @explain 테스트 응시자 정보 확인 페이지
 */

import styled from "styled-components";
import "../../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Main = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 80px);
  width: 100vw;
  font-family: SCDream5;
`;

const ContentDiv = styled.div`
  width: 400px;
`;

const TitleH2 = styled.h2`
  margin: 0px;
  text-align: center;
  font-size: 40px;
`;

const TestForm = styled.form.attrs({
  type: "submit",
})`
  margin-top: 10px;
`;

const NameInput = styled.input.attrs({
  placeholder: "이름",
  required: true,
})`
  box-sizing: border-box;
  padding-left: 15px;
  width: 100%;
  height: 45px;
  margin: 10px auto;
  font-size: 18px;
  border: 0;
  border-radius: 15px;
  background-color: #f0f5f9;

  ::placeholder {
    font-size: 16px;
    font-family: SCDream5;
  }

  :focus {
    outline: 2px solid black;
  }
`;

const BirthInput = styled(NameInput).attrs(() => ({
  placeholder: "생년월일",
}))``;

const PhoneInput = styled(NameInput).attrs(() => ({
  placeholder: "전화번호 (ex : 010-1234-5678)",
}))``;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 15px;
  margin-top: 15px;
`;

const TestButton = styled.button`
  box-sizing: border-box;
  padding: 10px 30px 10px 30px;
  border: none;
  border-radius: 15px;
  margin-top: 10px;
  font-size: 15px;
  font-family: Jua;
  background-color: #1e1d4d;
  text-decoration: none;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

const GoBackButton = styled(TestButton)``;

const ExamPrivacy = () => {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    name: "",
    birth: "",
    phone: "",
  });

  const trySignUp = (e) => {
    e.preventDefault();
    if (
      window.confirm(
        `응시자 정보\n이름 : ${info.name}\n생년월일 : ${info.birth}\n전화번호 : ${info.phone}이(가) 맞나요?`
      )
    ) {
      navigate("/exam-notice");
    }
  };

  const changeInfo = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const goMainPage = () => {
    navigate("/main");
  };

  return (
    <Main>
      <ContentDiv>
        <TitleH2>Student's Infomation</TitleH2>
        <TestForm onSubmit={trySignUp}>
          <NameInput
            name="name"
            value={info.name}
            onChange={changeInfo}
          ></NameInput>
          <BirthInput
            name="birth"
            value={info.birth}
            onChange={changeInfo}
          ></BirthInput>
          <PhoneInput
            name="phone"
            value={info.phone}
            onChange={changeInfo}
          ></PhoneInput>
          <ButtonDiv>
            <GoBackButton onClick={goMainPage}>돌아가기</GoBackButton>
            <TestButton type="submit">다음으로</TestButton>
          </ButtonDiv>
        </TestForm>
      </ContentDiv>
    </Main>
  );
};

export default ExamPrivacy;
