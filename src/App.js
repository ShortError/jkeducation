import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aside from "./components/SideBar/SideBar";
import styled from "styled-components";
import Curriculum from "./pages/Curriculum/Curriculum";
import TimeSchedule from "./pages/TimeSchedule/TImeSchedule";
import Payment from "./pages/Payment/Payment";

import Login from "./pages/Account/Login";
import Main from "./pages/Main/Main";
import Management from "./pages/Management/Management";
import ExamNotice from "./pages/Exam/AboutExam/ExamNotice";
import ExamPrivacy from "./pages/Exam/AboutExam/ExamPrivacy";
import SpeakingExam from "./pages/Exam/ExamPage/SpeakingExam";
import SelectExam from "./pages/Exam/AboutExam/SelectExam";
import Intro from "./pages/Intro/Intro";

import MyPage from "./pages/MyPage/MyPage";
import SignUp from "./pages/Account/SignUp";
import ListeningExam from "./pages/Exam/ExamPage/ListeningExam";

const AllWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`


function App() {



  return (
    <AllWrapper>
      <ContentWrapper>
        <Header />
        <Aside />
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/exam-privacy" element={<ExamPrivacy />}></Route>
          <Route path="/exam-notice" element={<ExamNotice />}></Route>
          <Route path="/select-exam" element={<SelectExam />}></Route>
          <Route path="/exam/:part" element={<SpeakingExam />}></Route>
          <Route path="/curriculum" element={<Curriculum />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/management" element={<Management />}></Route>
          <Route path="/make-schedule" element={<TimeSchedule />}></Route>
          <Route path="/mypage" element={<MyPage />} />

          <Route path="/exam/listening" element={<ListeningExam />}></Route>
          {/* <Route path="/testing" element={<Testing />} /> */}
        </Routes>
      </ContentWrapper>
      <Footer />
    </AllWrapper>
  );
}

export default App;
