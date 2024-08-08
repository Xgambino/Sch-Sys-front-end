import React from 'react';
import './LogIn.css'; 

const Login = () => {
  return (
    <div className="form-container">
      <p className="title">Login</p>
      <form className="form">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" placeholder="" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="" />
          <div className="forgot">
            <a href="#" rel="noopener noreferrer">Forgot Password?</a>
          </div>
        </div>
        <button type="submit" className="sign">Sign in</button>
      </form>
      <div className="social-message">
        <div className="line"></div>
        <p className="message">Login with social accounts</p>
        <div className="line"></div>
      </div>
      <div className="social-icons">
        <button className="social-button">
          <div className="icon-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26.3 65.33"
              style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality' }}
            >
              {/* SVG path data */}
              <path d="M13.98 52.87c0.37,-0.8 ..."></path>
            </svg>
          </div>
        </button>
        <button className="social-button">
          <div className="icon-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 11.67 37.63"
              style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality' }}
            >
              {/* SVG path data */}
              <path d="M7.63 35.26c-0.02,0.13 ..."></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Login;
