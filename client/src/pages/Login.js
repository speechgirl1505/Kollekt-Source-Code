import React, { Component } from "react";
import "./Login.css";

class Login extends Component {

  state = {
    username: "",
    password: "",
    loggedin: false,
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="main row ">
        <div className="div1 col">
          <img src={"starwars_1.jpg"} alt="Logo" />
        </div>
        <div className="div2 col">
          <div class="wrapper">
            <form class="form-signin">
              <h2 class="form-signin-heading">Please login</h2>
              <br></br>

              <input
                type="text"
                class="form-control"
                name="username"
                placeholder="Username"
                required=""
                autofocus=""
              />
              <input
                type="password"
                class="form-control"
                name="password"
                placeholder="Password"
                required=""
              />
              <label class="checkbox">
                <input
                  type="checkbox"
                  value="remember-me"
                  id="rememberMe"
                  name="rememberMe"
                />
                Remember me
              </label>

              <button class="btn btn-lg btn-dark btn-block" type="submit">
                Login
              </button>

              <br></br>

              <a href="/signup">Create an account!</a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
