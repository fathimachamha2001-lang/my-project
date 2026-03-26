import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NotFound() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [countdown, setCountdown] = useState(10);

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

        .nf-page {
          min-height: 100vh;
          background-color: #003366;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          font-family: 'Lato', sans-serif;
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.06;
          animation: pulse-circle 4s ease-in-out infinite;
        }
        .bg-circle-1 {
          width: 600px; height: 600px;
          background: #F39200;
          top: -150px; left: -150px;
          animation-delay: 0s;
        }
        .bg-circle-2 {
          width: 400px; height: 400px;
          background: #A32126;
          bottom: -100px; right: -100px;
          animation-delay: 1.5s;
        }
        .bg-circle-3 {
          width: 200px; height: 200px;
          background: #ffffff;
          top: 50%; left: 60%;
          animation-delay: 0.8s;
        }

        @keyframes pulse-circle {
          0%, 100% { transform: scale(1); opacity: 0.06; }
          50% { transform: scale(1.15); opacity: 0.1; }
        }

        .gear-wrap {
          position: absolute;
          top: 30px; right: 40px;
          opacity: 0.12;
          animation: spin-slow 12s linear infinite;
        }
        .gear-wrap-2 {
          position: absolute;
          bottom: 40px; left: 50px;
          opacity: 0.08;
          animation: spin-slow 18s linear infinite reverse;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .nf-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 2rem;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .nf-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Solid color 404 - no gradient, no glitch layers */
        .nf-number {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: clamp(7rem, 20vw, 12rem);
          color: #F39200;
          line-height: 1;
          letter-spacing: -4px;
          animation: glitch 3s infinite;
          position: relative;
        }

        @keyframes glitch {
          0%, 90%, 100% { transform: translate(0); }
          92% { transform: translate(-3px, 1px); }
          94% { transform: translate(3px, -1px); }
          96% { transform: translate(-2px, 2px); }
          98% { transform: translate(2px, -2px); }
        }

        .nf-divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #F39200, #A32126);
          margin: 1rem auto 1.5rem;
          border-radius: 2px;
          animation: expand-line 0.8s ease 0.5s both;
        }
        @keyframes expand-line {
          from { width: 0; opacity: 0; }
          to { width: 80px; opacity: 1; }
        }

        .nf-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 1.4rem;
          color: #ffffff;
          margin-bottom: 0.75rem;
          opacity: 0;
          animation: fade-up 0.6s ease 0.4s forwards;
        }

        .nf-subtitle {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.6);
          max-width: 360px;
          margin: 0 auto 2rem;
          line-height: 1.6;
          opacity: 0;
          animation: fade-up 0.6s ease 0.6s forwards;
        }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .nf-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          animation: fade-up 0.6s ease 0.8s forwards;
        }

        .btn-primary {
          background-color: #F39200;
          color: #ffffff;
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
          background-color: #d97f00;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background-color: transparent;
          color: #ffffff;
          border: 2px solid rgba(255,255,255,0.3);
          padding: 0.8rem 2rem;
          border-radius: 8px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: border-color 0.2s, transform 0.15s;
        }
        .btn-secondary:hover {
          border-color: #F39200;
          color: #F39200;
          transform: translateY(-2px);
        }

        .nf-countdown {
          margin-top: 2rem;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
          opacity: 0;
          animation: fade-up 0.6s ease 1s forwards;
        }
        .nf-countdown span {
          color: #F39200;
          font-weight: 700;
        }

        .nf-top-bar {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 5px;
          background: linear-gradient(90deg, #A32126, #F39200, #003366);
          background-size: 200%;
          animation: bar-slide 3s linear infinite;
        }
        @keyframes bar-slide {
          0% { background-position: 0%; }
          100% { background-position: 200%; }
        }

        .gear-svg {
          width: 160px;
          height: 160px;
          fill: currentColor;
        }
      `}</style>

      <div className="nf-top-bar"></div>

      <div className="nf-page">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>

        <div className="gear-wrap" style={{ color: "#F39200" }}>
          <svg className="gear-svg" viewBox="0 0 100 100">
            <path d="M43.3,5.3l-3,10.7c-2.4,0.6-4.7,1.5-6.8,2.7L23.3,13l-9.8,9.8l5.7,10.2c-1.2,2.1-2.1,4.4-2.7,6.8L5.3,43.3v13.9l10.7,3c0.6,2.4,1.5,4.7,2.7,6.8L13,77.2l9.8,9.8l10.2-5.7c2.1,1.2,4.4,2.1,6.8,2.7l3,10.7h13.9l3-10.7c2.4-0.6,4.7-1.5,6.8-2.7l10.2,5.7l9.8-9.8l-5.7-10.2c1.2-2.1,2.1-4.4,2.7-6.8l10.7-3V43.3l-10.7-3c-0.6-2.4-1.5-4.7-2.7-6.8l5.7-10.2L77.2,13L67,18.7c-2.1-1.2-4.4-2.1-6.8-2.7l-3-10.7H43.3z M50,34c8.8,0,16,7.2,16,16s-7.2,16-16,16s-16-7.2-16-16S41.2,34,50,34z"/>
          </svg>
        </div>
        <div className="gear-wrap-2" style={{ color: "#ffffff" }}>
          <svg className="gear-svg" viewBox="0 0 100 100" style={{ width: 100, height: 100 }}>
            <path d="M43.3,5.3l-3,10.7c-2.4,0.6-4.7,1.5-6.8,2.7L23.3,13l-9.8,9.8l5.7,10.2c-1.2,2.1-2.1,4.4-2.7,6.8L5.3,43.3v13.9l10.7,3c0.6,2.4,1.5,4.7,2.7,6.8L13,77.2l9.8,9.8l10.2-5.7c2.1,1.2,4.4,2.1,6.8,2.7l3,10.7h13.9l3-10.7c2.4-0.6,4.7-1.5,6.8-2.7l10.2,5.7l9.8-9.8l-5.7-10.2c1.2-2.1,2.1-4.4,2.7-6.8l10.7-3V43.3l-10.7-3c-0.6-2.4-1.5-4.7-2.7-6.8l5.7-10.2L77.2,13L67,18.7c-2.1-1.2-4.4-2.1-6.8-2.7l-3-10.7H43.3z M50,34c8.8,0,16,7.2,16,16s-7.2,16-16,16s-16-7.2-16-16S41.2,34,50,34z"/>
          </svg>
        </div>

        <div className={`nf-content ${visible ? "visible" : ""}`}>
          <div className="nf-number">404</div>
          <div className="nf-divider"></div>
          <h2 className="nf-title">Page Not Found</h2>
          <p className="nf-subtitle">
            The page you're looking for doesn't exist or you don't have permission to access it.
          </p>

          <div className="nf-buttons">
            <button className="btn-primary" onClick={() => navigate("/login")}>
              ← Back to Login
            </button>
            <button className="btn-secondary" onClick={() => navigate(-1)}>
              Go Back
            </button>
          </div>

          <p className="nf-countdown">
            Redirecting to login in <span>{countdown}</span> seconds...
          </p>
        </div>
      </div>
    </>
  );
}
