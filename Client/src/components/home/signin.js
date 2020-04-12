import React, { Component } from "react";
import { Link } from "react-router-dom";
import { add as jwtAdd } from "../../redux/jwt/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./login.style.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      roles: null
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const options = {
      headers: { "Content-Type": "application/json" }
    };

    axios
      .post(
        "http://localhost:8080/api/auth/signin",
        {
          username: this.state.username,
          password: this.state.password
        },
        options
      )
      .then(response => response.data)
      .then(json => {
        console.log(json);
        if (json.error) return false;
        this.props.dispatch1(json.accessToken, json.email, json.roles);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { isAuthenticated, roles } = this.props.jwt;
    if (isAuthenticated && roles.length > 0)
      return <Redirect to="/execDashboard" />;

    return (
      <React.Fragment>
        <h1 className="homePage-header">WildCat Oil Tools</h1>
        <div className="login-form-container">
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              className="username-input"
              name="username"
              placeholder="User Name"
              onChange={this.handleChange}
              value={this.state.username}
              label="username"
              required
            />
            <input
              className="password-input"
              name="password"
              type="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.handleChange}
              label="password"
              required
            />
            <button className="submit-login" onSubmit={this.Login}>
              Log In
            </button>
            <br />
            <Link to="/signup" className="nav-link">
              New User Registration
            </Link>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    jwt: state.jwt
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: (token, email, accessLevel) => {
      dispatch(jwtAdd(token, email, accessLevel));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
