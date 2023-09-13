import React, { useState } from 'react'
import LoadMsg from './LoadMsg'

//import firebase
import { db } from '../../firebase'
import { get, ref } from 'firebase/database'

function Profile() {
  let [msgs, setMsgs] = useState([])

  //first we will do for an example: raghav
  var n;
  function show() {
    get(ref(db, 'username/' + 'raghav' + '/credentials/number'))
      .then((snapshot) => {
        n = snapshot.val()
        console.log(n + ' msgs')
        //do loop from 1 to n, and do 'get' for each message
        loop(n)
      })
  }

  //for msgs: 0 to n
  function loop(n) {
    const addMsgs = []
    for (var i = 0; i < n; i++) {
      console.log(i)
      get(ref(db, 'username/' + 'raghav' + '/messages/' + i + '/message'))
        .then((snapshot) => {
          let message = snapshot.val()
          console.log(message)
          addMsgs.push(message)
        })
    }
    console.log(addMsgs)
    setMsgs(addMsgs)
  }

  return (
    <div>
      {<LoadMsg msg='arsh' />}
      <button onClick={show}>check</button><br />
      <ul>
        {msgs.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  )
}

export default Profile