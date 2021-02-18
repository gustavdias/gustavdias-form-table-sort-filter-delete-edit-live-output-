import React from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

export default class Form extends React.Component {
  state = {
    firstName: "",
    firstNameError: "",
    lastName: "",
    lastNameError: "",
    username: "",
    usernameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
  };

  change = (e) => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      firstNameError: "",
      lastNameError: "",
      usernameError: "",
      emailError: "",
      passwordError: "",
    };

    if (this.state.username.length < 5) {
      isError = true;
      errors.usernameError = "Username needs to be atleast 5 characters long";
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Requires valid email";
    }

    this.setState({
      ...this.state,
      ...errors,
    });

    return isError;
  };

  onSubmit = (e) => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    const err = this.validate();
    if (!err) {
      // clear form
      this.setState({
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        username: "",
        usernameError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: "",
      });
      this.props.onChange({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
      });
    }
  };

  render() {
    return (
      <form>
        <TextField
          name="firstName"
          placeholder="First name"
          label="First name"
          value={this.state.firstName}
          onChange={(e) => this.change(e)}
          helperText={this.state.firstNameError}
        />
        <br />
        <TextField
          name="lastName"
          placeholder="Last Name"
          label="Last Name"
          value={this.state.lastName}
          onChange={(e) => this.change(e)}
          helperText={this.state.lastNameError}
        />
        <br />
        <TextField
          name="username"
          placeholder="Username"
          label="Username"
          value={this.state.username}
          onChange={(e) => this.change(e)}
          helperText={this.state.usernameError}
        />
        <br />
        <TextField
          name="email"
          placeholder="Email"
          label="Email"
          value={this.state.email}
          onChange={(e) => this.change(e)}
          helperText={this.state.emailError}
        />
        <br />
        <div>
          <TextField
            name="password"
            placeholder="Password"
            label="Password"
            value={this.state.password}
            onChange={(e) => this.change(e)}
            helperText={this.state.passwordError}
            type="password"
            floatingLabelFixed
          />
        </div>
        <br />

        <div>
          <Button
            label="Submit"
            variant="contained"
            onClick={(e) => this.onSubmit(e)}
            color="primary"
          >
            Submit
          </Button>
        </div>
        <br />
      </form>
    );
  }
}
