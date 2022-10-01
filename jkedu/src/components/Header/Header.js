import styled from "styled-components";
import "../../App.css";
import { Link, useLocation } from "react-router-dom";

const HeaderBar = styled.header`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 80px;

  align-items: center;
  justify-content: center;

  background-color: #1e1d4d;
  text-align: center;
  font-family: SCDream5;
  font-size: 24px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 40px;
  }
`;

/**
 * @explain 로그인 전에 로고 눌렀을 때
 */
const ImgLink = styled.a.attrs(() => ({
  href: "/",
}))`
  height: 60px;

  > img {
    height: 60px;
    width: 300px;
  }

  @media screen and (max-width: 768px) {
    height: 30px;

    > img {
      height: 30px;
      width: 150px;
    }
  }
`;

/**
 * @explain 로그인 후에 로고 눌렀을 때
 */
const ImgLink2 = styled(ImgLink).attrs(() => ({
  href: "/main",
}))``;

const DropDownDiv = styled.div`
  box-sizing: border-box;
  width: 140px;
  text-align: right;
  color: white;
  position: absolute;
  right: 15px;

  &:hover {
    > div {
      display: block;
    }
  }
  @media screen and (max-width: 768px) {
    width: 70px;
    right: 12px;
    font-size: 12px;
  }
`;
const DropDownContent = styled.div`
  display: none;
  box-sizing: border-box;
  width: inherit;
  position: absolute;
  z-index: 1;
  text-align: right;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const DropDownMenu = styled(Link)`
  box-sizing: border-box;
  height: 40px;
  display: block;
  padding: 10px 5px;
  color: black;
  background-color: #f5f5f5;
  text-decoration: none;
  &:hover {
    background-color: #dbe2ef;
  }

  @media screen and (max-width: 768px) {
    height: 20px;
    padding: 5px 2.5px;
  }
`;

const AccountDiv = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  position: absolute;
  right: 15px;
  @media screen and (max-width: 768px) {
    height: 40px;
    right: 7px;
  }
`;

const LoginLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
  ::after {
    content: "|";
    padding: 0 10px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const SignUpLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Header = () => {
  const location = useLocation();

  if (
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/sign-up"
  ) {
    return (
      <HeaderBar>
        <ImgLink>
          <img src="/img/jk-logo/jk-logo2.png" alt="jk-logo" />
        </ImgLink>
        <AccountDiv>
          <LoginLink to="/login">로그인</LoginLink>
          <SignUpLink to="/sign-up">회원가입</SignUpLink>
        </AccountDiv>
      </HeaderBar>
    );
  }

  return (
    <HeaderBar>
      <ImgLink2>
        <img src="/img/jk-logo/jk-logo2.png" alt="jk-logo" />
      </ImgLink2>
      <DropDownDiv>
        <span>*** 님</span>
        <DropDownContent>
          <DropDownMenu to="/mypage">마이페이지</DropDownMenu>
          <DropDownMenu to="/">로그아웃</DropDownMenu>
        </DropDownContent>
      </DropDownDiv>
    </HeaderBar>
  );
};

export default Header;
