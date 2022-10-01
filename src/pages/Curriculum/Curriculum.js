import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../../App.css";

const Main = styled.div`
  width: 1080px;
  box-sizing: border-box;
  margin: 15px auto;
  border: none;
  font-family: SCDream5;
`;

const Title = styled.div`
  font-size: 30px;
  margin: 0;
`;
const SubTitle = styled.div`
  font-size: 20px;
  margin: 15px 0;
`;

const Month = styled.div`
  display: flex;
`;
const CurriculumButton = styled.button`
  box-sizing: border-box;
  border: none;
  font-family: SCDream5;
  border-radius: 15px;
  font-size: 15px;
  padding: 10px 30px;
  background-color: #35a753;
  text-decoration: none;
  color: white;
  display: inline-block;
  margin: 0px 10px 0px 0px;
  &:hover {
    cursor: pointer;
    background-color: #83bd75;
  }
`;

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 15px 0;
  height: 858px;
  border: 4px solid black;
`;

const CurriculumHeader = styled.div`
  display: flex;
`;
const SpeakingCurriculum = styled(CurriculumHeader)``;
const ReadingCurriculum = styled(CurriculumHeader)``;
const WritingCurriculum = styled(CurriculumHeader)``;
const ListeningCurriculum = styled(CurriculumHeader)``;

// 좌측상단의 빈 div
const DivideDiv = styled.div`
  box-sizing: border-box;
  width: 200px;
  height: 50px;
  text-align: center;
  border-right: 2px solid gray;
  border-bottom: 2px solid gray;
`;

// 몇 개월을 나타내는 div
const MonthDiv = styled.div`
  box-sizing: border-box;
  width: 200px;
  text-align: center;
  border-right: 2px solid gray;
  border-bottom: 2px solid gray;
`;

// 영역을 나타내는 div
const PartDiv = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  border-bottom: 2px solid gray;
  border-right: 2px solid gray;

  align-items: center;
  justify-content: center;

  font-size: 30px;
`;

// 각 영역별 커리큘럼에 맞는 책을 보여주는 div
const CurriculumDiv = styled(PartDiv)``;
const BookImg = styled.img`
  width: 140px;
  height: 180px;
`;

const ButtonDiv = styled.div`
  margin: 20px 0;
`;
const NaviButton = styled(CurriculumButton)``;
const ScheduleButton = styled(CurriculumButton)``;

const Curriculum = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <Title>커리큘럼 추천</Title>
      <SubTitle>ㅇㅇㅇ님의 추천하는 커리큘럼입니다.</SubTitle>
      <Month>
        <CurriculumButton>3개월</CurriculumButton>
        <CurriculumButton>6개월</CurriculumButton>
        <CurriculumButton>12개월</CurriculumButton>
      </Month>
      <Content>
        <CurriculumHeader>
          <DivideDiv></DivideDiv>
          <MonthDiv>1</MonthDiv>
          <MonthDiv>2</MonthDiv>
          <MonthDiv>3</MonthDiv>
        </CurriculumHeader>
        <WritingCurriculum>
          <PartDiv>Writing</PartDiv>
          <CurriculumDiv>
            <BookImg src="http://image.kyobobook.co.kr/images/book/xlarge/595/x9788945092595.jpg"></BookImg>
          </CurriculumDiv>
          <CurriculumDiv>
            <BookImg src="http://image.kyobobook.co.kr/images/book/xlarge/601/x9788945092601.jpg"></BookImg>
          </CurriculumDiv>
          <CurriculumDiv>
            <BookImg src="http://image.kyobobook.co.kr/images/book/xlarge/033/x9788993306033.jpg"></BookImg>
          </CurriculumDiv>
        </WritingCurriculum>
        <ListeningCurriculum>
          <PartDiv>Listening</PartDiv>
          <CurriculumDiv>
            <BookImg src="https://bimage.interpark.com/partner/goods_image/2/2/6/5/210522265g.jpg"></BookImg>
          </CurriculumDiv>
          <CurriculumDiv>
            <BookImg src="http://image.kyobobook.co.kr/images/book/xlarge/842/x9788993306842.jpg"></BookImg>
          </CurriculumDiv>
          <CurriculumDiv>
            <BookImg src="http://image.kyobobook.co.kr/images/book/xlarge/859/x9788993306859.jpg"></BookImg>
          </CurriculumDiv>
        </ListeningCurriculum>
        <SpeakingCurriculum>
          <PartDiv>Speaking</PartDiv>
          <CurriculumDiv>
            <BookImg src="http://image.kyobobook.co.kr/images/book/xlarge/809/x9788966530809.jpg"></BookImg>
          </CurriculumDiv>
          <CurriculumDiv>
            <BookImg src="https://image.yes24.com/goods/45018578/XL"></BookImg>
          </CurriculumDiv>
          <CurriculumDiv>
            <BookImg src="https://image.yes24.com/goods/2988595/XL"></BookImg>
          </CurriculumDiv>
        </SpeakingCurriculum>
        <ReadingCurriculum>
          <PartDiv>Reading</PartDiv>
          <CurriculumDiv>
            <BookImg src="http://image.kyobobook.co.kr/images/book/xlarge/355/x9791188228355.jpg"></BookImg>
          </CurriculumDiv>
          <CurriculumDiv>
            <BookImg src="http://image.kyobobook.co.kr/images/book/xlarge/362/x9791188228362.jpg"></BookImg>
          </CurriculumDiv>
          <CurriculumDiv>
            <BookImg src="http://image.kyobobook.co.kr/images/book/large/379/l9791188228379.jpg"></BookImg>
          </CurriculumDiv>
        </ReadingCurriculum>
      </Content>
      <ButtonDiv>
        <NaviButton
          onClick={() => {
            navigate(-1);
          }}
        >
          다시 결과 페이지로
        </NaviButton>
        <ScheduleButton
          onClick={() => {
            navigate("/make-schedule");
          }}
        >
          시간표
        </ScheduleButton>
      </ButtonDiv>
    </Main>
  );
};

export default Curriculum;
