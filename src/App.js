import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ETCEFacultyLandingPage from "./components/ETCELandingPage";
import LoremPage from "./components/LoremPage";

import StudentLogin from "./components/StudentLogin";
import StudentSignup from "./components/StudentSignUp";
import StudentVerifyOtp from "./components/StudentVerifyOTP";

import FacultyLogin from "./components/FacultyLogIn";
import FacultySignup from "./components/FacultySignup";
import FacultyVerifyOtp from "./components/FacultyVerifyOtp.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<ETCEFacultyLandingPage />} />

        {/* NAVBAR → LOREM */}
        <Route path="/organisation" element={<LoremPage title="Organisation" />} />
        <Route path="/offerings" element={<LoremPage title="Faculty" />} />
        <Route path="/documents" element={<LoremPage title="Research" />} />
        <Route path="/resources" element={<LoremPage title="Publications" />} />
        <Route path="/connect" element={<LoremPage title="Contact" />} />

        {/* STUDENT AUTH */}
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student-signup" element={<StudentSignup />} />
        <Route path="/student-verify-otp" element={<StudentVerifyOtp />} />

        {/* FACULTY AUTH */}
        <Route path="/faculty-login" element={<FacultyLogin />} />
        <Route path="/faculty-signup" element={<FacultySignup />} />
        <Route path="/faculty-verify-otp" element={<FacultyVerifyOtp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
