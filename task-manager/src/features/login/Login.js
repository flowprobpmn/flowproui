import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { SocialLoginWrapper } from './';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

  }

  onChangeInput = (key, e) => {
    this.setState({
      [key]: e.target.value
    })
  }

  // handleLogin = (e) => {
  //   e.preventDefault();
  // }

  render() {
    return (
      <div className="c-login-container">
        <div className="c-login">
          <div className="c-login__wrapper">
            <form>
              <div className="mt-3 mb-3">
                <div className="text-left mb-2">
                  <Typography>
                    Login
            </Typography>
                </div>
                <TextField onChange={this.onChangeInput.bind(null, 'username')} required={true} variant="outlined" />
              </div>
              <div>
                <div className="text-left mb-2">
                  <Typography>
                    Password
            </Typography>
                </div>
                <form>
                  <TextField required={true} onChange={this.onChangeInput.bind(null, 'password')} autoComplete="true" type="password" variant="outlined" />
                </form>
              </div>
              <div className="mt-3 mb-3 text-left">
                <a href="/">
                  Forgot Password?
              </a>
              </div>
              <div className="c-btn">
                <Link to="/tasks">
                  <Button type={"submit"} variant="contained" color="primary">
                    Submit
              </Button>
                </Link>
              </div>
            </form>
          </div>
          <div className="c-login__head">
            <Typography>
              Login
        </Typography>
          </div>
        </div>
        <SocialLoginWrapper />
      </div>
    )
  }
}

export default Login;
