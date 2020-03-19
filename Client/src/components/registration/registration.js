import React, {Component} from 'react';
import './registration.style.scss';


export default class Registration extends Component {
    constructor() {
        super()

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password1: "",
            password2: ""
        };
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
      };
    render() {
        return (
            <React.Fragment>
        <h1 className="registration-title">Registration Form</h1>
        <div className="login-form-container">
            <form className="form" onSubmit={this.handleSubmit}>
                <input
                    className="firstName-input"
                    name="firstName"
                    placeholder="Enter First Name"
                    onChange={this.handleChange}
                    label="firstName"
                    required
                />
                <input
                    className="lastName-input"
                    name="lastName"
                    placeholder="Enter Last Name"
                    onChange={this.handleChange}
                    label="lastName"
                    required
                />
                <input
                    className="email-input"
                    name="email"
                    placeholder="Enter Email"
                    onChange={this.handleChange}
                    // value={this.state.email}
                    label="UserEmail"
                    required
                />
                <input
                    className="password1-input"
                    name="password1"
                    type="password"
                    placeholder="Enter Password"
                    // value={this.state.password}
                    onChange={this.handleChange}
                    label="password"
                    required
                />
                <input
                    className="password2-input"
                    name="password2"
                    type="password"
                    placeholder="Please Enter Matching Password"
                    // value={this.state.password}
                    onChange={this.handleChange}
                    label="password2"
                    required
                />
                <button className="submit-registration" onClick={this.register}>Submit Registration Form</button>
                <br/>
            </form>
        </div>
        </React.Fragment>
        )
    }
}