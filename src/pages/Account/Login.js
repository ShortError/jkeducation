import styled from "styled-components";
import "../../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const Main = styled.div`
  width: 100%;
  // footer만큼ƒ
  height: calc(100% - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentDiv = styled.div`
  width: 400px;
  border-radius: 20px;
  font-family: SCDream5;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const IntroduceDiv = styled.div`
  display: flex;
`;
const TitleH2 = styled.h2`
  margin: 0px;
`;

const LoginForm = styled.form`
  margin-top: 30px;
`;

const AccounrInfoDiv = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 15px;
  margin-top: 15px;
`;

const IdInput = styled.input.attrs({
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

  :focus {
    outline: 2px solid black;
  }
`;
const PwInput = styled(IdInput).attrs({})``;

const IdSpan = styled.span``;
const PwSpan = styled(IdSpan)``;

const SignInButton = styled.button.attrs({
  type: "submit",
})`
  box-sizing: border-box;
  width: 150px;
  padding: 10px 30px 10px 30px;
  border: none;
  border-radius: 15px;
  font-size: 15px;
  background-color: #1e1d4d;
  text-decoration: none;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

const SignUpLink = styled(Link)`
  box-sizing: border-box;
  width: 150px;
  padding: 10px 30px 10px 30px;
  text-align: center;
  border: none;
  border-radius: 15px;
  font-size: 15px;
  color: white;
  background-color: #1e1d4d;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    id: "",
    pw: "",
  });

  /**
   * @explain id, pw 입력을 받는 함수
   */
  const changeInfo = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const trySignIn = (e) => {
    e.preventDefault();

    // 여기에 로그인 로직 작성
    // ... 성공 시 다음 화면으로
    document.location.href = "/main";
  };

  return (
    <Main>
      <ContentDiv>
        <IntroduceDiv>
          <TitleH2>로그인</TitleH2>
          <LockOpenIcon fontSize="large" />
        </IntroduceDiv>
        <LoginForm onSubmit={trySignIn}>
          <IdSpan>ID</IdSpan>
          <IdInput value={loginInfo.id} onChange={changeInfo} name="id" />
          <PwSpan>비밀번호</PwSpan>
          <PwInput
            value={loginInfo.pw}
            onChange={changeInfo}
            name="pw"
            type="password"
          />
          <AccounrInfoDiv>
            <SignInButton type="submit">Login</SignInButton>
            <SignUpLink to="/sign-up">Join</SignUpLink>
          </AccounrInfoDiv>
        </LoginForm>
      </ContentDiv>
    </Main>
  );
};

export default Login;
