import React from 'react';
import { signInWithGoogle } from '../firebase';
import { auth } from '../firebase';
import './Banner.css'

class Login extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='user-info'>
        {

          this.state.currentUser ?

            (<div style={{display:"flex"}}>
              <div style={{marginLeft:"20px", marginTop:"6px"}}>
                <img height="40px" src={this.state.currentUser.photoURL} />
              </div>
              {/* <div>Name: {this.state.currentUser.displayName}</div>
              <div>Email: {this.state.currentUser.email}</div> */}

              <button className='btn-login' onClick={() => auth.signOut()}>Logout</button>
            </div>
            ) :

            <button className='btn-login' onClick={signInWithGoogle}>Login</button>

        }
      </div >
    );
  }
}


export default Login;