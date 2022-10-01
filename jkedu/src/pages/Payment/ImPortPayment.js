import styled from "styled-components";
import "../../App.css";

const PaymentButton = styled.button`
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  width: 150px;
  height: 50px;

  font-family: SCDream5;
  cursor: pointer;
  font-size: 20px;
  background-color: #fd9f28;
`;

const ImPortPayment = (prop) => {
  const payInfo = prop.payInfo;

  /**
   * @explain 아임포트 결제 연동 함수
   */
  const paymenting = () => {
    // 1. 가맹점 식별
    var IMP = window.IMP;
    IMP.init("imp14410218");

    // 2. 결제 데이터 정의
    const data = {
      pg: "html5_inicis", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: payInfo.price, // 결제금액
      name: payInfo.productName, // 주문명
      buyer_name: "박정석", // 구매자 이름
      buyer_tel: "01012345678", // 구매자 전화번호
      buyer_email: "example@example", // 구매자 이메일
      buyer_addr: "신사동 661-16", // 구매자 주소
      buyer_postcode: "06018", // 구매자 우편번호
    };

    // 4. 콜백 함수
    const callback = (response) => {
      const { success, merchant_uid, error_msg } = response;
      console.log(response);
      if (success) {
        alert("결제 성공");
      } else {
        alert(`결제 실패: ${error_msg}`);
      }
    };

    // 3. 결제 창 호출
    IMP.request_pay(data, callback);
  };

  return <PaymentButton onClick={paymenting}>결제하기</PaymentButton>;
};

export default ImPortPayment;
