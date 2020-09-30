import React from 'react'
import Home from './pages/Home'
import DiscountCode from './pages/DiscountCode'
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom"
import './App.css';
import { AuthContext } from './context/auth'
import AuthenticatedRoute from './AuthenticatedRoute'

console.log(process.env)

function App() {
  return (
      <AuthContext.Provider value={false}>
        <Router>
          <div className="container">
            <div className="title">
              <NavLink to="/">Discount Service Admin </NavLink>
            </div>
            <hr />

            <div className="card">
              <div className="links" style={{ flexBasis: '100px', justifyContent: 'space-evenly', width: 'calc(1/3*100% - (1 - 1/3)*10px)' }}>
                <NavLink exact={true} activeClassName="link-active" to="/">Home</NavLink>
                <NavLink activeClassName="link-active" to="/discount-codes">Discount Codes</NavLink>
              </div>
              <div className="content" style={{ flexBasis: 'auto' }}>
                <Route exact path="/" component={Home} />
                <AuthenticatedRoute exact path="/discount-codes" component={DiscountCode} />
              </div>
            </div>

            <hr />
            <p>Copyright &copy; 2020</p>

          </div>
        </Router>
    </AuthContext.Provider>
  );
}

export default App;
