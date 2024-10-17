import React, { useState } from 'react';
import MovieList from './componentes/MovieList';
import Header from './componentes/Header';
import Login from './componentes/Login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasSubscription, setHasSubscription] = useState(false);
  const [hasVoucher, setHasVoucher] = useState(false);

  const loginHandler = (loggedIn, subscription, voucher) => {
    setIsLoggedIn(loggedIn);
    setHasSubscription(subscription);
    setHasVoucher(voucher);
  };

  return (
    <div className="App">
      <Header />
      <Login onLogin={loginHandler} />
      <MovieList isLoggedIn={isLoggedIn} hasSubscription={hasSubscription} hasVoucher={hasVoucher} />
    </div>
  );
}

export default App;
