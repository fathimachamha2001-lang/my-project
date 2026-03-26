import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Unauthorized() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    setTimeout(() => setVisible(true), 50);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/login");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900;700&family=Lato:wght@400;600&display=swap');

        .unauth-page {
          min-height: 100vh;
          background-color: #A32126;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          font-family: 'Lato', sans-serif;
        }

        /* Background circles */
        .bg-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.07;
          animation: pulse-circle 4s ease-in-out infinite;
        }
        .bg-circle-1 {
          width: 600px; height: 600px;
          background: #ffffff;
          top: -200px; left: -200px;
          animation-delay: 0s;
        }
        .bg-circle-2 {
          width: 450px; height: 450px;
          background: #003366;
          bottom: -150px; right: -150px;
          animation-delay: 1.5s;
        }
        .bg-circle-3 {
          width: 250px; height: 250px;
          background: #F39200;
          top: 40%; left: 65%;
          animation-delay: 0.8s;
        }

        @keyframes pulse-circle {
          0%, 100% { transform: scale(1); opacity: 0.07; }
          50% { transform: scale(1.15); opacity: 0.12; }
        }

        /* Spinning lock icons */
        .lock-wrap {
          position: absolute;
          top: 30px; right: 40px;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }
        .lock-wrap-2 {
          position: absolute;
          bottom: 40px; left: 50px;
          opacity: 0.07;
          animation: float 8s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        /* Main content */
        .unauth-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 2rem;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .unauth-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* 401 number - solid white */
        .unauth-number {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: clamp(7rem, 20vw, 12rem);
          color: #ffffff;
          line-height: 1;
          letter-spacing: -4px;
          animation: shake 4s infinite;
          position: relative;
        }

        @keyframes shake {
          0%, 85%, 100% { transform: translate(0); }
          87% { transform: translate(-4px, 0); }
          89% { transform: translate(4px, 0); }
          91% { transform: translate(-3px, 0); }
          93% { transform: translate(3px, 0); }
          95% { transform: translate(-2px, 0); }
          97% { transform: translate(2px, 0); }
        }

        /* Lock icon above number */
        .lock-icon {
          font-size: 3.5rem;
          margin-bottom: 0.5rem;
          display: block;
          opacity: 0;
          animation: fade-up 0.6s ease 0.2s forwards, bounce-lock 2s ease 1s infinite;
        }

        @keyframes bounce-lock {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .unauth-divider {
          width: 80px;
          height: 4px;
          background: rgba(255,255,255,0.4);
          margin: 1rem auto 1.5rem;
          border-radius: 2px;
          animation: expand-line 0.8s ease 0.5s both;
        }
        @keyframes expand-line {
          from { width: 0; opacity: 0; }
          to { width: 80px; opacity: 1; }
        }

        .unauth-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 1.4rem;
          color: #ffffff;
          margin-bottom: 0.75rem;
          opacity: 0;
          animation: fade-up 0.6s ease 0.4s forwards;
        }

        .unauth-subtitle {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.75);
          max-width: 380px;
          margin: 0 auto 0.75rem;
          line-height: 1.7;
          opacity: 0;
          animation: fade-up 0.6s ease 0.6s forwards;
        }

        /* Attempt info badge */
        .attempt-info {
          display: inline-block;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.3);
          color: #ffffff;
          font-size: 0.8rem;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          margin-bottom: 2rem;
          opacity: 0;
          animation: fade-up 0.6s ease 0.7s forwards;
        }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .unauth-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          animation: fade-up 0.6s ease 0.8s forwards;
        }

        .btn-primary {
          background-color: #ffffff;
          color: #A32126;
          border: none;
          padding: 0.8rem 2rem;
          border-radius: 8px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          letter-spacing: 0.5px;
        }
        .btn-primary:hover {
          background-color: #f0f0f0;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background-color: transparent;
          color: #ffffff;
          border: 2px solid rgba(255,255,255,0.4);
          padding: 0.8rem 2rem;
          border-radius: 8px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: border-color 0.2s, transform 0.15s, background 0.2s;
        }
        .btn-secondary:hover {
          border-color: #ffffff;
          background: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }

        .unauth-countdown {
          margin-top: 2rem;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
          opacity: 0;
          animation: fade-up 0.6s ease 1s forwards;
        }
        .unauth-countdown span {
          color: #ffffff;
          font-weight: 700;
        }

        /* Top animated bar */
        .unauth-top-bar {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 5px;
          background: linear-gradient(90deg, #003366, #F39200, #A32126);
          background-size: 200%;
          animation: bar-slide 3s linear infinite;
        }
        @keyframes bar-slide {
          0% { background-position: 0%; }
          100% { background-position: 200%; }
        }
      `}</style>

      <div className="unauth-top-bar"></div>

      <div className="unauth-page">
        {/* Background decorations */}
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>

        {/* Floating lock decorations */}
        <div className="lock-wrap">
          <span style={{ fontSize: "8rem" }}>🔒</span>
        </div>
        <div className="lock-wrap-2">
          <span style={{ fontSize: "5rem" }}>🔐</span>
        </div>

        {/* Main content */}
        <div className={`unauth-content ${visible ? "visible" : ""}`}>
          <span className="lock-icon">🔒</span>
          <div className="unauth-number">401</div>
          <div className="unauth-divider"></div>
          <h2 className="unauth-title">Access Denied</h2>
          <p className="unauth-subtitle">
            Your account has been temporarily locked due to
            too many failed login attempts. Please contact
            your system administrator or reset your password.
          </p>
          <div className="attempt-info">
            ⚠️ 10 / 10 failed login attempts reached
          </div>

          <div className="unauth-buttons">
            <button className="btn-primary" onClick={() => navigate("/forgot-password")}>
              🔑 Reset Password
            </button>
            <button className="btn-secondary" onClick={() => navigate("/login")}>
              ← Back to Login
            </button>
          </div>

          <p className="unauth-countdown">
            Redirecting to login in <span>{countdown}</span> seconds...
          </p>
        </div>
      </div>
    </>
  );
}
