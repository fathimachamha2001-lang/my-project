import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import idbLogo from "../assets/idblogo.png.jpeg";
import emblem from "../assets/logo.png.jpeg";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Login data:", data);

      // TODO: Replace with real API call
      // const res = await axios.post("/api/login", data);
      // if (res.data.success) { navigate("/dashboard"); return; }

      // Simulating failed login
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts >= 10) {
        // Redirect to 401 page
        navigate("/401");
      } else {
        setLoginError(
          `Invalid username or password. ${10 - newAttempts} attempt${
            10 - newAttempts === 1 ? "" : "s"
          } remaining.`
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Lato:wght@400;600&display=swap');
        * { font-family: 'Lato', sans-serif; }
        .top-bar { background-color: #A32126; height: 6px; width: 100%; }
        .login-wrapper { min-height: 100vh; background-color: #F8F9FA; display: flex; align-items: center; justify-content: center; padding: 1rem; }
        .login-card { background-color: #FFFFFF; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); width: 100%; max-width: 480px; padding: 2.5rem; }
        .card-header { display: flex; align-items: center; justify-content: space-between; padding-bottom: 1.25rem; margin-bottom: 1.5rem; border-bottom: 2px solid #F8F9FA; }
        .card-header img { height: 72px; width: 72px; object-fit: contain; }
        .header-title { text-align: center; flex: 1; padding: 0 0.75rem; }
        .header-title h1 { font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 1rem; color: #003366; line-height: 1.3; margin-bottom: 0.25rem; }
        .header-title p { font-size: 0.7rem; color: #333333; font-weight: 400; }
        .sign-in-title { font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 1.5rem; color: #4120e7; text-align: center; margin-bottom: 1.5rem; }
        .input-field { width: 100%; background-color: #acaaaa; color: #ffffff; padding: 0.9rem 1rem; border-radius: 8px; border: none; font-size: 0.875rem; outline: none; box-sizing: border-box; transition: box-shadow 0.2s; }
        .input-field::placeholder { color: rgba(255,255,255,0.75); }
        .input-field:focus { box-shadow: 0 0 0 2px #F39200; }
        .input-wrapper { position: relative; margin-bottom: 0.25rem; }
        .show-btn { position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); background: none; border: none; color: rgba(255,255,255,0.85); font-size: 0.75rem; cursor: pointer; }
        .show-btn:hover { color: #F39200; }
        .forgot-link { display: flex; justify-content: flex-end; margin-top: 0.4rem; margin-bottom: 1.5rem; }
        .forgot-link button { background: none; border: none; font-size: 0.75rem; color: #333333; cursor: pointer; }
        .forgot-link button:hover { color: #A32126; text-decoration: underline; }
        .login-btn { width: 100%; background-color: #F39200; color: #ffffff; padding: 0.85rem; border-radius: 8px; border: none; font-size: 0.95rem; font-weight: 700; font-family: 'Montserrat', sans-serif; cursor: pointer; transition: background-color 0.2s ease, transform 0.15s; letter-spacing: 0.5px; }
        .login-btn:hover:not(:disabled) { background-color: #d97f00; transform: translateY(-1px); }
        .login-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .error-msg { color: #A32126; font-size: 0.72rem; margin-top: 0.25rem; margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .attempt-warning {
          background-color: #fff3cd;
          border: 1px solid #ffc107;
          color: #856404;
          border-radius: 8px;
          padding: 0.6rem 1rem;
          font-size: 0.8rem;
          margin-bottom: 1rem;
          animation: slide-down 0.3s ease;
        }
        .attempt-badge {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .attempt-badge span {
          background: #fff0f0;
          border: 1px solid #ffcccc;
          color: #A32126;
          font-size: 0.75rem;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-weight: 600;
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="top-bar"></div>
      <div className="login-wrapper">
        <div className="login-card">
          <div className="card-header">
            <img src={emblem} alt="Sri Lanka Emblem" />
            <div className="header-title">
              <h1>INDUSTRIAL DEVELOPMENT BOARD</h1>
              <p>Ministry of Industry and Entrepreneurship Development</p>
            </div>
            <img src={idbLogo} alt="IDB Logo" />
          </div>

          <h2 className="sign-in-title">Sign In</h2>

          {/* Attempt counter badge */}
          {attempts > 0 && (
            <div className="attempt-badge">
              <span>⚠️ {attempts} / 10 failed attempts</span>
            </div>
          )}

          {/* Inline warning */}
          {loginError && (
            <div className="attempt-warning">⚠️ {loginError}</div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="input-field"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && <p className="error-msg">{errors.username.message}</p>}
            </div>

            <div className="input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input-field"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
              />
              <button type="button" className="show-btn" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <p className="error-msg">{errors.password.message}</p>}

            <div className="forgot-link">
              <button type="button" onClick={() => navigate("/forgot-password")}>
                Forgot password?
              </button>
            </div>

            <button type="submit" className="login-btn" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
