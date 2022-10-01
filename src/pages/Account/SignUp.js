import styled from "styled-components";
import "../../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import TermOfService from "./TermOfService";
import TermOfCollectInfo from "./TermOfCollectInfo";
import { useEffect } from "react";

const Main = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: SCDream5;
  margin-top: 30px;
  margin-bottom: 30px;
  overflow: auto;
  height: 1000px;
`;

const ContentDiv = styled.div`
  width: 400px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const TitleH2 = styled.h2`
  margin: 0px;
  text-align: center;
`;

const SignUpForm = styled.form.attrs({
  type: "submit",
})`
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    margin-top: 15px;
  }
`;

const RoleDiv = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 10px;
`;

const StudentButton = styled.button`
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  width: 150px;
  height: 50px;

  font-family: SCDream5;
  cursor: pointer;
  font-size: 20px;
  background-color: ${(prop) =>
    prop.role === "student" ? "#35a753" : "#f0f5f9"};
`;

const TeacherButton = styled(StudentButton)`
  background-color: ${(prop) =>
    prop.role === "teacher" ? "#35a753" : "#f0f5f9"};
`;

const IdInput = styled.input.attrs({
  placeholder: "아이디",
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

const PwInput = styled(IdInput).attrs(() => ({
  placeholder: "비밀번호",
  type: "password",
}))``;

const PhoneInput = styled(IdInput).attrs(() => ({
  placeholder: "전화번호 (ex : 010-1234-5678)",
}))``;

const EmailInput = styled(IdInput).attrs(() => ({
  placeholder: "이메일",
  type: "email",
}))``;

/**
 * @explain 이용약관 관련
 */
const TermsOfServiceDiv = styled.div`
  margin-bottom: 5px;
  color: #cfd2cf;
`;

const TermOfServiceInput = styled.input.attrs(() => ({
  type: "checkbox",
  required: true,
}))``;

const TermOfServiceLabel = styled.label`
  &:hover {
    cursor: pointer;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 15px;
  margin-top: 15px;
`;

const GoBackLink = styled(Link)`
  box-sizing: border-box;
  padding: 10px 30px 10px 30px;
  border: none;
  border-radius: 15px;
  margin-top: 10px;
  font-size: 15px;
  background-color: #1e1d4d;
  text-decoration: none;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

const SignUpButton = styled.button`
  box-sizing: border-box;
  padding: 10px 30px 10px 30px;
  border: none;
  border-radius: 15px;
  margin-top: 10px;

  font-size: 15px;
  background-color: #1e1d4d;
  text-decoration: none;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

const SignUp = () => {
  // 회원가입시 입력받는 변수들
  const [signUpInfo, setSignUpInfo] = useState({
    role: "student",
    id: "",
    pw: "",
    phone: "",
    email: "",
    // 이용약관 및 개인 정보 수집 동의 여부
    service: false,
    collectInfo: false,
    all: false,
  });

  /**
   * @explain 회원가입 시도
   */
  const trySignUp = (e) => {
    e.preventDefault();
    window.alert("회원가입 성공하셨습니다.\n가입하신 아이디로 로그인하세요.");
    document.location.href = "/";
  };

  const changeSignUpInfo = (e) => {
    const { value, name, type } = e.target;

    // 체크 박스라면 체크박스 on / off 여부
    if (type === "checkbox") {
      // 체크 박스중 전체 동의를 눌렀다면 전체 동의 클릭 여부에 따라 나머지도 체크 on / off 체크
      if (name === "all") {
        setSignUpInfo({
          ...signUpInfo,
          [name]: !signUpInfo[name],
          service: !signUpInfo[name],
          collectInfo: !signUpInfo[name],
        });
      } else {
        setSignUpInfo({ ...signUpInfo, [name]: !signUpInfo[name] });
      }
    } else {
      setSignUpInfo({ ...signUpInfo, [name]: value });
    }
  };

  /**
   * @explain 유형선택하는 함수
   */
  const changeRole = (e, role) => {
    e.preventDefault();
    setSignUpInfo({ ...signUpInfo, role: role });
  };

  // 이용약관 동의 및 개인정보 수집 동의 여부에 따라 전체 동의 체크여부 변경
  useEffect(() => {
    if (signUpInfo.collectInfo === true && signUpInfo.service === true) {
      setSignUpInfo({ ...signUpInfo, all: true });
    } else {
      setSignUpInfo({ ...signUpInfo, all: false });
    }
  }, [signUpInfo.collectInfo, signUpInfo.all, signUpInfo.service]);

  return (
    <Main>
      <ContentDiv>
        <TitleH2>개인 정보</TitleH2>
        <SignUpForm onSubmit={trySignUp}>
          <RoleDiv>
            <StudentButton
              role={signUpInfo.role}
              onClick={(e) => changeRole(e, "student")}
            >
              학생
            </StudentButton>
            <TeacherButton
              role={signUpInfo.role}
              onClick={(e) => changeRole(e, "teacher")}
            >
              선생님
            </TeacherButton>
          </RoleDiv>

          <IdInput
            name="id"
            onChange={changeSignUpInfo}
            value={signUpInfo.id}
          />
          <PwInput
            name="pw"
            onChange={changeSignUpInfo}
            value={signUpInfo.pw}
          />
          <PhoneInput
            name="phone"
            onChange={changeSignUpInfo}
            value={signUpInfo.phone}
          />
          <EmailInput
            name="email"
            onChange={changeSignUpInfo}
            value={signUpInfo.email}
          />
          <TermsOfServiceDiv>
            <TermOfServiceLabel>
              <TermOfServiceInput
                name="service"
                onChange={changeSignUpInfo}
                checked={signUpInfo.service}
              />
              &nbsp;&nbsp;[필수] 제이케이에듀 이용약관 동의
            </TermOfServiceLabel>
            <TermOfService />
          </TermsOfServiceDiv>
          <TermsOfServiceDiv>
            <TermOfServiceLabel>
              <TermOfServiceInput
                name="collectInfo"
                onChange={changeSignUpInfo}
                checked={signUpInfo.collectInfo}
              />
              &nbsp;&nbsp;[필수] 개인정보 수집 및 이용 동의
            </TermOfServiceLabel>
            <TermOfCollectInfo />
          </TermsOfServiceDiv>
          <TermsOfServiceDiv>
            <TermOfServiceLabel>
              <TermOfServiceInput
                name="all"
                onChange={changeSignUpInfo}
                checked={signUpInfo.all}
              />
              &nbsp;&nbsp;[전체 동의]
            </TermOfServiceLabel>
          </TermsOfServiceDiv>
          <ButtonDiv>
            <GoBackLink to="/">돌아가기</GoBackLink>
            <SignUpButton type="submit">가입하기</SignUpButton>
          </ButtonDiv>
        </SignUpForm>
      </ContentDiv>
    </Main>
  );
};

export default SignUp;
