import styled from "styled-components";

const TermDiv = styled.div`
  box-sizing: border-box;
  border: 2px solid grey;
  border-radius: 10px;
  height: 150px;
  color: black;
  margin: 5px 0 0 0;
  overflow: auto;
`;

const TermOfService = () => {
  return (
    <TermDiv>
      <h3>제이케이에듀 이용약관 동의</h3>
      <span>
        (주) 제이케이에듀를 이용해 주셔서 감사합니다. 본 약관은
        ~~~~~~~~~~~~~~~~~~~
      </span>
    </TermDiv>
  );
};

export default TermOfService;
