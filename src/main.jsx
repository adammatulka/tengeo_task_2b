import React, { useState } from 'react';

import { Heading } from './heading';

export const Main = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
   
   const onSubmit = (e) => {
   e.preventDefault();

      const data = JSON.stringify({email,phone});

      fetch('https://hookb.in/QJNorLGLwQckpp2WOPWY',
        {method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: data})
      .then(Response => Response.json())
      .then(data => {console.log('pouhouda', data);})

      .catch((error) =>{console.error('shits gone wrong: ',error);});

    console.log('mail in console: '+ email);  
    console.log('phone in console: '+ phone);

    alert('Both your e-mail: ' + email + ' AND phone number: ' + phone +' just got logged in console and POSTed on Hookbin rn my dude <3');
  }

  const onClear = () => {
    setEmail('')
    setPhone('')
  }

  return (
    <div>
      <Heading />
      <form onSubmit={onSubmit}>
        <label>
          email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          phone:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <input type="submit" value="SEND THAT SHIT" />
      </form>
      <button onClick={onClear}>Clear values</button>
    </div>
  )
}
