import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FacultyLogin() {
  const [data, setData] = useState({
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
        "https://juonlinebackend.onrender.com/api/faculty/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      alert(res.data.message || "Login successful");

      // ✅ Redirect to Home
      navigate("/");

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ===== EMBEDDED CSS ===== */}
      <style>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #020617, #1e293b);
          font-family: "Segoe UI", sans-serif;
        }

        .login-box {
          background: white;
          padding: 32px;
          width: 360px;
          border-radius: 10px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.25);
        }

        .login-box h2 {
          text-align: center;
          margin-bottom: 24px;
          color: #020617;
        }

        .login-box input {
          width: 100%;
          padding: 12px;
          margin-bottom: 14px;
          border: 1px solid #cbd5f5;
          border-radius: 6px;
          font-size: 14px;
        }

        .login-box input:focus {
          outline: none;
          border-color: #2563eb;
        }

        .login-box button {
          width: 100%;
          padding: 12px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 15px;
          cursor: pointer;
          font-weight: 600;
        }

        .login-box button:disabled {
          background: #94a3b8;
          cursor: not-allowed;
        }

        .login-footer {
          text-align: center;
          margin-top: 14px;
          font-size: 13px;
          color: #475569;
        }
      `}</style>

      {/* ===== LOGIN FORM ===== */}
      <div className="login-container">
        <form className="login-box" onSubmit={submit}>
          <h2>Faculty Login</h2>

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
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="login-footer">
            ETCE Department · Jadavpur University
          </div>
        </form>
      </div>
    </>
  );
}

