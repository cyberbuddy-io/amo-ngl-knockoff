import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Arrow1 from '../imgs/Arrow 1.png'
import Arrow2 from '../imgs/Arrow 2.png'
import '../css/signup.css'

//import firebase 
import { db } from '../../firebase';
import { get, set, ref } from 'firebase/database';

function Signup() {

  //title
  document.title = 'Signup'
  let [user, setUser] = useState('')
  let [pass, setPass] = useState('')
  let [passChecker, setPassChecker] = useState('')
  let passRef = useRef()
  let [passwordShow, setPasswordShow] = useState(false)

  function check() {
    console.log(user + ' ' + pass)

    //check for empty values
    if (user === '' || pass === '') {
      alert('Please enter valid info');
      return;
    }

    //check password length
    if (pass.length < 8) {
      alert('Password must be at least 8 letters long')
      passRef.current.focus()
      return;
    }

    //check for repeating username
    get(ref(db, 'username/' + user))
      .then((snapshot) => {
        //username already exists
        if (snapshot.exists()) {
          alert('Username already exists. Please try some other username!')
          return;
        }
        //unique username
        else {
          send()
        }
      })

  }

  //all checks passed
  function send() {
    set(ref(db, 'username/' + user + '/credentials/'), {
      password: pass,
      username: user,
      number: 0
    })

    alert('signup successful')

    async function delay() {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      window.localStorage.setItem('user', user)
      window.location.href = '/profile?=' + user
    }

    delay()
  }

  //check pass length
  function checkPassLength() {
    if (pass.length < 7) {
      setPassChecker('Password should be at least 8 letters long')
    } else {
      setPassChecker('')
    }
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
      <div className='signup'>
        <div className="container">
          <h2>Sign-Up</h2>
          <input type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)} />
          <p>HINT: Enter your instagram username</p>
          <br />
          <p>HEY! {user}</p>
          <br />
          <input ref={passRef} type={passwordShow ? 'text' : 'password'} placeholder="Password" className="inp" onChange={(e) => { setPass(e.target.value); checkPassLength() }} /><br />
          <input type="checkbox" onChange={passShow} style={{ width: '16px' }} />Show Password
          {/* <i className="far fa-eye" id="togglePassword" style={style1}></i> */}
          <p>{passChecker}</p>

          <br /><br />
          {/* <input
            type="password"
            id="repassword"
            className="inp"
            placeholder="Re-enter Password"
          />
          <i className="far fa-eye" id="retogglePassword" style={style1}></i> */}

          <br /><br /><br />
          <button type="submit" id="btn" onClick={check}>
            Go <img id="white_arrow" src={Arrow1} />
            <img id="black_arrow" src={Arrow2} />
          </button>
          <p className="right"><Link to="/login">Already a User? Login</Link></p>
        </div>
        <h3>Made by <Link to='https://avibedi1768.github.io' style={{ color: '#fff', textDecoration: 'none' }}>Arsh</Link></h3>
      </div>
    </>
  )
}

export default Signup