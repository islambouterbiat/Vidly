import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./form";

class RegisterForm extends Form {
  state = {
    data: { username: "", fullname: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().email().required().label("Username"),
    fullname: Joi.string().required().label("Fullname"),
    password: Joi.string().required().min(6).label("Password"),
  };

  doSubmit = () => {
    //backend
    console.log("submitted");
  };
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleLoginSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("fullname", "Fullname")}
          {this.renderInput("password", "Password", "password")}
        </form>
        {this.renderButton("Register")}
      </div>
    );
  }
}

export default RegisterForm;
