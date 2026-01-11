import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function StudentVerifyOtp() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Email passed from signup page
  const email = location.state?.email;

  const verifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://juonlinebackend.onrender.com/api/student/verify-otp",
        {
          email,
          otp,
        }
      );

      alert(res.data.message || "Verification successful");

      // ✅ REDIRECT TO HOME PAGE
      navigate("/");

    } catch (err) {
      alert(err.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  if (!email) {
    return <h3 style={{ textAlign: "center" }}>Invalid access</h3>;
  }

  return (
    <>
      <style>{`
        .otp-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #020617, #1e293b);
          font-family: "Segoe UI", sans-serif;
        }

        .otp-box {
          background: white;
          padding: 30px;
          width: 340px;
          border-radius: 10px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.25);
          text-align: center;
        }

        .otp-box input {
          width: 100%;
          padding: 12px;
          margin-bottom: 16px;
          font-size: 18px;
          letter-spacing: 6px;
          text-align: center;
        }

        .otp-box button {
          width: 100%;
          padding: 12px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>

      <div className="otp-container">
        <form className="otp-box" onSubmit={verifyOtp}>
          <h2>Email Verification</h2>
          <p>Enter the OTP sent to</p>
          <b>{email}</b>

          <input
            type="text"
            maxLength="6"
            placeholder="••••••"
            value={otp}
            required
            onChange={(e) => setOtp(e.target.value)}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      </div>
    </>
  );
}

