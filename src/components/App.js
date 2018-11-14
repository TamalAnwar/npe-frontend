import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import logo from '../public/images/logo.png';
const Header = () => {
  return (
    <header className="header">
      <div className="wrapper header-inner">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Node.js Logo" />
          </Link>
        </div>
        <div className="title">
          <h3 className="site-title">Node People Everywhere</h3>
          <p className="tagline">
            A directory of companies and developers working with Node.js
          </p>
        </div>
      </div>
      <nav id="menu" className="wrapper">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/register">Register</Link>
        <Link to="/submit">Submit</Link>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">&copy; Node.js Foundation</div>
    </footer>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
  }

  register(e) {
    e.preventDefault();
    let data = {
      email: e.target.email.value,
      password: e.target.password.value,
      passwordConfirm: e.target.passwordConfirm.value
    };
    fetch('/api/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.register}>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
          <label htmlFor="password">Confirm Password:</label>
          <input type="password" name="passwordConfirm" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const Submit = () => {
  return (
    <div>
      <h2>Submit</h2>
      <form action="/" method="">
        <label htmlFor="type">Listing Type:</label>
        <select name="type" id="">
          <option value="company">Company</option>
          <option value="developer">Developer</option>
        </select>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
        <label htmlFor="location">Location:</label>
        <input type="text" name="location" />
        <label htmlFor="skills">Skills:</label>
        <input type="text" name="skills" />
        <label htmlFor="keywords">Keywords:</label>
        <input type="text" name="keywords" />
        <label htmlFor="description">Description/Bio:</label>
        <textarea name="description" id="" cols="30" rows="10" />
        <label htmlFor="github">Github Profile:</label>
        <input type="text" name="github" />
        <label htmlFor="linkedin">Linkedin Profile:</label>
        <input type="text" name="linkedin" />
        <label htmlFor="npm">NPM Profile:</label>
        <input type="text" name="npm" />
        <label htmlFor="website">Website or Other Profile:</label>
        <input type="website" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="main">
          <Header />
          <main className="content">
            <div className="wrapper">
              <Route exact path="/" component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/submit" component={Submit} />
            </div>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
