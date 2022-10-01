import styled from "styled-components";
import "../../App.css";
const FreePaymentButton = styled.button`
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  width: 150px;
  height: 50px;

  font-family: SCDream5;
  font-size: 20px;
  background-color: #35a753;

  cursor: pointer;
`;

const FreeVersion = () => {
  /**
   * @explain 1회 체험
   */
  const freeChance = () => {
    if (window.confirm("무료 체험 1회를 사용하시겠습니까?")) {
      window.alert("1회 체험을 사용합니다.");
    } else {
      window.alert("취소하셨습니다.");
    }
  };

  return <FreePaymentButton onClick={freeChance}>체험하기</FreePaymentButton>;
};

export default FreeVersion;
