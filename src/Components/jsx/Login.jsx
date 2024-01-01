import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Arrow1 from '../imgs/Arrow 1.png'
import Arrow2 from '../imgs/Arrow 2.png'
import '../css/login.css';

//import firebase 
import { db } from '../../firebase';
import { ref, get } from 'firebase/database';

function Login() {

  //title
  document.title = 'Login'

  let [user, setUser] = useState('');
  let [pass, setPass] = useState('');
  let passRef = useRef();
  let [passwordShow, setPasswordShow] = useState(false);

  function match() {
    get(ref(db, 'username/' + user + '/credentials/password'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          //username exists!
          const p = snapshot.val();
          console.log(p);
          //if password matches
          if (pass === p) {
            window.localStorage.setItem('user', user)
            alert("password matches");
            window.location.href = '/profile?=' + user;
          } else {
            alert("password does not match. plz try again");
            passRef.current.focus()
          }
        } else {
          alert('no user found. kindly signup');
          window.location.href = '/signup';
        }
      })
  }

  //toggle password visibility
  function passShow() {
    setPasswordShow(!passwordShow)
  }

  // let style1 = {
  //   marginLeft: '-30px',
  //   cursor: 'pointer'
  // }
  return (
    <>
      <div className='login'>
        <div className="container">
          <h2>Login</h2>
          <br /><br /><br />
          <input type="text" placeholder="Username" id="username" value={user} onChange={(e) => setUser(e.target.value)} />
          <br /><br /><br />
          <input ref={passRef} type={passwordShow ? 'text' : 'password'} id="password" placeholder="Password" className="inp" value={pass} onChange={(e) => setPass(e.target.value)} /><br />
          <input type="checkbox" onChange={passShow} style={{ width: '16px' }} />Show password
          {/* <i className="far fa-eye" id="togglePassword" style={style1}></i> */}

          <br /><br /><br /><br />
          <button type="submit" id="btn" onClick={match}>
            Go <img id="white_arrow" src={Arrow1} />
            <img id="black_arrow" src={Arrow2} />
          </button>
          <br />
          <p className="right"><Link to="/signup">New User? Sign Up</Link></p>
        </div>
        <h3>Made by <Link to='https://avibedi1768.github.io' style={{ color: '#fff', textDecoration: 'none' }}>Arsh</Link></h3>
      </div>
    </>
  )
}

export default Login