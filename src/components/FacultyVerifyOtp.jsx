import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function FacultyVerifyOtp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const verify = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/faculty/verify-otp",
        { email, otp }
      );

      alert(res.data.message || "Verified");
      navigate("/");

    } catch (err) {
      alert(err.response?.data?.message || "Verification failed");
    }
  };

  if (!email) return <h3>Invalid access</h3>;

  return (
    <form onSubmit={verify} style={{ padding: 40 }}>
      <h2>Faculty Email Verification</h2>
      <p>OTP sent to {email}</p>
      <input
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        maxLength="6"
      />
      <button type="submit">Verify</button>
    </form>
  );
}
