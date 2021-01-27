import axios from 'axios';
import React, { useState } from 'react';

import { Heading } from './heading.class';

export const Main = (props) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [send, setSend] = useState('SEND THAT SHIT')

  const onSubmit = (e) => {
   e.preventDefault();

   setSend('Sending...')

    const data = { email, phone };

    axios.post('https://hookb.in/QJNorLGLwQckpp2WOPWY', { data }).then(() => {
      alert('Both your e-mail: ' + email + ' AND phone number: ' + phone +' just got logged in console and POSTed on Hookbin rn my dude <3');
    });

    console.log('mail in console: '+ email);  
    console.log('phone in console: '+ phone);

    setSend('SEND THAT SHIT')
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
        <input type="submit" value={send} />
      </form>
      <button onClick={onClear}>Clear values</button>
    </div>
  )
}
