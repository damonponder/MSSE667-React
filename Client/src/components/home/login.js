import React, {Component} from 'react';
import { Link, HashRouter } from 'react-router-dom';
import './login.style.scss'


export default class Login  extends Component {
    constructor() {
        super()

        this.state = {
            email: "",
            password: "",
            accessLevel: null
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        fetch("/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })

        .then(response => response.json())
        .then(json => {
            console.log(json);
            if (json.error) return false;
        })
        .catch(error => console.log(error));
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
      };

    render() {
        return (
        <React.Fragment>
        <h1 className="homePage-header">WildCat Oil Tools</h1>
        <div className="login-form-container">
            <form className="form" onSubmit={this.handleSubmit}>
                <input
                    className="username-input"
                    name="email"
                    placeholder="Enter Email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    label="UserEmail"
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
                <button className="submit-login" onClick={this.login}>Log In</button>
                <br/>
                <HashRouter>
                    <Link to="/registration" className="nav-link">New User Registration</Link>
                </HashRouter>
            </form>
        </div>
        </React.Fragment>
        )
    }
}