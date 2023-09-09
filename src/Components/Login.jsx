import React from 'react'
import {Link} from 'react-router-dom'
import Arrow1 from './Arrow 1.png'
import Arrow2 from './Arrow 2.png'
// import './style.css';

function Login() {
  // let abc = 'hahahaha'
  let style1 = {
    marginLeft: '-30px',
    cursor: 'pointer'
  }
  return (
    <>
      <div class="container">
        <h2>Login</h2>
        <br /><br /><br />
        <input type="text" placeholder="Username" id="username" />
        <br /><br /><br/>
        <input type="password" id="password" placeholder="Password" class="inp" />
        <i class="far fa-eye" id="togglePassword" style={style1}></i>

        <br /><br /><br /><br />
        <button type="submit" id="btn">
          Go <img id="white_arrow" src={Arrow1} />
          <img id="black_arrow" src={Arrow2} /></button>
        <br />
        <p class="right"><Link to="/signup">New User? Sign Up</Link></p>
      </div>
    </>
  )
}

export default Login