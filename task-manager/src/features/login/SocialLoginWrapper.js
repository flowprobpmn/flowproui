import React from 'react';
import ReactDOM from 'react-dom';
import { FacebookLoginButton, GoogleLoginButton, InstagramLoginButton, LinkedInLoginButton } from "react-social-login-buttons";


import { SocialButton } from './';

class SocialLoginWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.nodes = {};
  }
  onLoginSuccess = (user) => {
    console.log(user)
  }

  onLoginFailure = (err) => {
    console.error(err)
  }
  onLogoutSuccess = (res) => {
    console.log(res);
  }
  setNodeRef = (provider, node) => {
    if (node) {
      this.nodes[provider] = node
    }
  }
  render() {
    return (
      <div className="c-login__social">
        <SocialButton
          provider='facebook'
          appId=''
          onLoginSuccess={this.onLoginSuccess}
          onLoginFailure={this.onLoginFailure}
          onLogoutSuccess={this.onLogoutSuccess}
          getInstance={this.setNodeRef.bind(this, 'facebook')}
          key={'facebook'}
        >
          <FacebookLoginButton />
        </SocialButton>
        <SocialButton
          provider='google'
          appId=''
          onLoginSuccess={this.onLoginSuccess}
          onLoginFailure={this.onLoginFailure}
          onLogoutSuccess={this.onLogoutSuccess}
          onLogoutFailure={this.onLogoutFailure}
          getInstance={this.setNodeRef.bind(this, 'google')}
          key={'google'}
        >
          <GoogleLoginButton />
        </SocialButton>
        <SocialButton
          autoCleanUri
          provider='instagram'
          appId=''
          redirect={process.env.INSTAGRAM_REDIRECT}
          onLoginSuccess={this.onLoginSuccess}
          onLoginFailure={this.onLoginFailure}
          onLogoutSuccess={this.onLogoutSuccess}
          getInstance={this.setNodeRef.bind(this, 'instagram')}
          key={'instagram'}
        >
          <InstagramLoginButton />
        </SocialButton>
        <SocialButton
          provider='linkedin'
          appId=''
          onLoginSuccess={this.onLoginSuccess}
          onLoginFailure={this.onLoginFailure}
          onLogoutSuccess={this.onLogoutSuccess}
          getInstance={this.setNodeRef.bind(this, 'linkedin')}
          key={'linkedin'}
        >
          <LinkedInLoginButton className="fasdf" />
        </SocialButton>
      </div>
    )
  }
}

export default SocialLoginWrapper;

