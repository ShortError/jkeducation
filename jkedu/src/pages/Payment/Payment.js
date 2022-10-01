import styled from "styled-components";
import { useState } from "react";
import ImPortPayment from "./ImPortPayment";
import FreeVersion from "./FreeVersion";
import PaymentInfo from "./PaymentInfo";
import "../../App.css";

const Main = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  justify-content: center;
  font-family: SCDream5;
`;

const ContentDiv = styled.div`
  margin: 50px auto;
  width: 1080px;
`;

const TitleH2 = styled.h2`
  text-align: center;
  margin: 0;
`;

const MenuList = styled.div`
  box-sizing: border-box;
  width: 1000px;
  margin: 15px auto 0 auto;
  display: flex;
`;

const Menu = styled.div`
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  border: 1px solid #c9d6df;
  border-right: none;
  text-align: center;
`;

const MenuInfo = styled(Menu)`
  display: flex;
  justify-content: center;
  background-color: #f0f5f9;
  align-items: center;
  font-size: 25px;
`;
const MenuTitle = styled.h2`
  font-size: 35px;
`;
const MenuContent = styled.div`
  margin: 10px auto;
  font-size: 20px;
`;

const Payment = () => {
  const [payInfo, setPayInfo] = useState({
    firstItem: {
      productName: "1회 이용권",
      price: 10000,
    },
    secondItem: {
      productName: "10+1회 이용권",
      price: 100000,
    },
    thirdItem: {
      productName: "50+5회 이용권",
      price: 500000,
    },
  });

  return (
    <Main>
      <ContentDiv>
        <TitleH2>Payment</TitleH2>
        <MenuList>
          <MenuInfo>요금제 선택</MenuInfo>
          <Menu>
            <MenuTitle>체험</MenuTitle>
            <MenuContent>1회 무료</MenuContent>
            <FreeVersion></FreeVersion>
          </Menu>
          <Menu>
            <MenuTitle>1회</MenuTitle>
            <MenuContent>10,000원</MenuContent>
            <ImPortPayment payInfo={payInfo.firstItem} />
          </Menu>
          <Menu>
            <MenuTitle>10 + 1회</MenuTitle>
            <MenuContent>100,000원</MenuContent>
            <ImPortPayment payInfo={payInfo.secondItem} />
          </Menu>
          <Menu style={{ borderRight: "1px solid #c9d6df" }}>
            <MenuTitle>50 + 5회</MenuTitle>
            <MenuContent>500,000원</MenuContent>
            <ImPortPayment payInfo={payInfo.thirdItem} />
          </Menu>
        </MenuList>
        <PaymentInfo />
      </ContentDiv>
    </Main>
  );
};

export default Payment;
