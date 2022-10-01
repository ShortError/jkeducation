import styled from "styled-components";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const MainDiv = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: SCDream5;
`;

const ContentDiv = styled.div`
  box-sizing: border-box;
  width: 800px;
  height: 700px;
  border: 3px solid gray;

  font-size: 20px;
`;

const TitleDiv = styled.div`
  margin-top: 20px;
  font-family: SCDream5;
  text-align: center;
  font-size: 45px;
`;

const InfomationDiv = styled.div``;

const IdDiv = styled.div`
  display: flex;
  height: 60px;
  width: 600px;
  margin: 10px auto 0px auto;
  box-sizing: border-box;
  align-items: center;
`;
const IdSpan = styled.span`
  width: 250px;
  vertical-align: middle;
`;
const PwInput = styled.input.attrs(() => ({
  type: "password",
}))`
  box-sizing: border-box;
  padding-left: 15px;
  width: 400px;
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

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;

const GoBackLink = styled(Link)`
  box-sizing: border-box;
  width: 150px;
  padding: 10px 30px 10px 30px;
  text-align: center;
  border: none;
  border-radius: 15px;
  font-size: 15px;
  font-family: Jua;
  color: white;
  background-color: #1e1d4d;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const ChangeButton = styled.button`
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

const DeleteAccountButton = styled(ChangeButton)`
  background-color: red;
`;

const DeleteAccount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
`;

const MyPage = () => {
  const navi = useNavigate();

  const [pw, setPw] = useState({
    currentPw: "",
    newPw: "",
    newPwConfirm: "",
  });

  /**
   * @explain 비밀번호 변경을 클릭했을 때
   */
  const isClickChangePw = (e) => {
    e.preventDefault();
    /**
     * 비밀번호 일치하는지 확인하고
     */
    if (pw.newPw === pw.newPwConfirm) {
      window.alert("비밀번호를 성공적으로 변경하셨습니다.");
      navi("/main");
    } else {
      window.alert("비밀번호가 일치하지 않습니다.\n다시확인해주세요.");
    }
  };
  /**
   * @explain 비밀변호 input 변경 시
   */
  const isChangePw = (e) => {
    const { name, value } = e.target;
    setPw({ ...pw, [name]: value });
  };

  /**
   * 계정을 삭제하는 함수
   */
  const isDeleteAccount = (e) => {
    e.preventDefault();
    const inputName = window.prompt(
      "정말로 계정을 삭제하시겠습니까?\n삭제하시려면 아이디를 입력해주세요."
    );

    if (inputName === "aa") {
      window.alert("삭제가 완료되었습니다.");
    } else {
      window.alert("아이디를 다시 한번 확인해주세요");
    }
  };

  return (
    <MainDiv>
      <ContentDiv>
        <TitleDiv>마이 페이지</TitleDiv>
        <form>
          <InfomationDiv>
            <IdDiv>
              <IdSpan>아이디</IdSpan>
              <div>adasdasdasdas</div>
            </IdDiv>
            <IdDiv>
              <IdSpan>현재 비밀번호</IdSpan>
              <PwInput
                onChange={isChangePw}
                name="currentPw"
                value={pw.currentPw}
              ></PwInput>
            </IdDiv>
            <IdDiv>
              <IdSpan>새 비밀번호</IdSpan>
              <PwInput
                onChange={isChangePw}
                name="newPw"
                value={pw.newPw}
              ></PwInput>
            </IdDiv>
            <IdDiv>
              <IdSpan>새 비밀번호 확인 </IdSpan>
              <PwInput
                onChange={isChangePw}
                name="newPwConfirm"
                value={pw.newPwConfirm}
              ></PwInput>
            </IdDiv>
            <IdDiv>
              <IdSpan>전화번호</IdSpan>
              <div>010-1234-5678</div>
            </IdDiv>
            <IdDiv>
              <IdSpan>이메일</IdSpan>
              <div>xxxxxx@naver.com</div>
            </IdDiv>
            <IdDiv>
              <IdSpan>남은 테스트 횟수</IdSpan>
              <div>1 회</div>
            </IdDiv>
          </InfomationDiv>
          <ButtonDiv>
            <GoBackLink to="/main">Back</GoBackLink>
            <ChangeButton onClick={isClickChangePw}>Save</ChangeButton>
          </ButtonDiv>
          <DeleteAccount>
            <DeleteAccountButton onClick={isDeleteAccount}>
              계정 삭제
            </DeleteAccountButton>
            <span>계정 삭제시 잔여 테스트 횟수가 삭제가 삭제됩니다.</span>
          </DeleteAccount>
        </form>
      </ContentDiv>
    </MainDiv>
  );
};

export default MyPage;
