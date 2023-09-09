import React from 'react'
import { Link } from 'react-router-dom'
import Arrow1 from '../imgs/Arrow 1.png'
import Arrow2 from '../imgs/Arrow 2.png'
// import '../css/style.css'

function Signup() {

  function send() {
    console.log('helo')
    //   var username = document.getElementById('username').value;
    //   var password = document.getElementById('password').value;
    //   if (username == '' || password == '') {
    //     const alert = () => {
    //       alert('Please enter data');
    //     }
    //   }
  }

  let style1 = {
    marginLeft: '-30px',
    cursor: 'pointer'
  }
  return (
    <>

      <div class="container">
        <h2>Sign-Up</h2>
        <input type="text" placeholder="Username" id="username" />
        <p>HINT: Enter your instagram username</p>
        <br /><br />
        <input type="password" id="password" placeholder="Password" class="inp" />
        <i class="far fa-eye" id="togglePassword" style={style1}></i>

        <br /><br />
        <input
          type="password"
          id="repassword"
          class="inp"
          placeholder="Re-enter Password"
        />
        <i class="far fa-eye" id="retogglePassword" style={style1}></i>

        <br /><br /><br />
        <button type="submit" id="btn" onClick={send}>
          Go <img id="white_arrow" src={Arrow1} />
          <img id="black_arrow" src={Arrow2} />
        </button>
        <p class="right"><Link to="/login">Already a User? Login</Link></p>
      </div>
    </>
  )
}

export default Signup