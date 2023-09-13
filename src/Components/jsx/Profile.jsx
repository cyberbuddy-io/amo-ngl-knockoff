import React, { useState } from 'react'
import LoadMsg from './LoadMsg'

//import firebase
import { db } from '../../firebase'
import { get, ref } from 'firebase/database'

function Profile() {
  let [numbers, setNumbers] = useState([])

  //first we will do for an example: raghav
  var n;
  function show() {
    get(ref(db, 'username/' + 'raghav' + '/credentials/number'))
      .then((snapshot) => {
        n = snapshot.val()
        console.log(n + 'msgs')
        loop(n)
      })
  }

  // function loop(n) {
  //   const numberArray = []
  //   for (var i = 0; i < n; i++) {
  //     console.log(i)
  //     // {<LoadMsg msg={i}/>}
  //     numberArray.push(i)
  //   }
  //   setNumbers(numberArray)
  // }

  function loop(n) {
    // for (var i = 0; i < n; i++) {
      console.log(n)
      // { <LoadMsg msg='arsh' /> }
    // }
  }

  return (
    <div>
      <h1>hello</h1>
      {<LoadMsg msg='arsh' />}
      <button onClick={show}>check</button><br />

    </div>
  )
}

export default Profile