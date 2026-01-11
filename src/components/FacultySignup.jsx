import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FacultySignup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
         "https://juonlinebackend.onrender.com/api/faculty/signup",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        }
      );

      alert(res.data.message || "OTP sent to faculty email");

      // ✅ Redirect to Faculty OTP verification page
      navigate("/faculty-verify-otp", {
        state: { email: data.email },
      });

    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ===== EMBEDDED CSS ===== */}
      <style>{`
        .signup-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #020617, #1e293b);
          font-family: "Segoe UI", sans-serif;
        }

        .signup-box {
          background: white;
          padding: 34px;
          width: 380px;
          border-radius: 10px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.25);
        }

        .signup-box h2 {
          text-align: center;
          margin-bottom: 26px;
          color: #020617;
        }

        .signup-box input {
          width: 100%;
          padding: 12px;
          margin-bottom: 14px;
          border: 1px solid #cbd5f5;
          border-radius: 6px;
          font-size: 14px;
        }

        .signup-box input:focus {
          outline: none;
          border-color: #2563eb;
        }

        .signup-box button {
          width: 100%;
          padding: 12px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
        }

        .signup-box button:disabled {
          background: #94a3b8;
          cursor: not-allowed;
        }

        .signup-footer {
          text-align: center;
          margin-top: 14px;
          font-size: 13px;
          color: #475569;
        }
      `}</style>

      {/* ===== SIGNUP FORM ===== */}
      <div className="signup-container">
        <form className="signup-box" onSubmit={submit}>
          <h2>Faculty Signup</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={data.name}
            required
            onChange={(e) =>
              setData({ ...data, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Faculty Email"
            value={data.email}
            required
            onChange={(e) =>
              setData({ ...data, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={data.password}
            required
            onChange={(e) =>
              setData({ ...data, password: e.target.value })
            }
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending OTP..." : "Sign Up"}
          </button>

          <div className="signup-footer">
            ETCE Department · Jadavpur University
          </div>
        </form>
      </div>
    </>
  );
}

