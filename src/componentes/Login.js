import React, { useState } from 'react';

function Login({ onLogin }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [subscription, setSubscription] = useState(false);
  const [voucher, setVoucher] = useState(false);

  const handleSubmit = () => {
    onLogin(loggedIn, subscription, voucher);
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <label>
        <input type="checkbox" checked={loggedIn} onChange={() => setLoggedIn(!loggedIn)} />
        Usuário Logado
      </label>
      <label>
        <input type="checkbox" checked={subscription} onChange={() => setSubscription(!subscription)} />
        Assinatura Ativa
      </label>
      <label>
        <input type="checkbox" checked={voucher} onChange={() => setVoucher(!voucher)} />
        Voucher Promocional
      </label>
      <button onClick={handleSubmit}>Salvar Status</button>
    </div>
  );
}

export default Login;
