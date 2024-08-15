import React, { useState } from 'react';
import Header from './Header/Headers';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showData, setShowData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData(true);
  };

  return (
<>

  <Header/>
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>

      {showData && (
        <div className="login-data">
          <h2>Login Data:</h2>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
        </div>
      )}
    </div>
    </>
  );
}

export default LoginPage;
