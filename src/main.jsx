import React, { useState } from 'react';

import { Heading } from './heading';

export const Main = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  var xhr = new XMLHttpRequest();

  xhr.open("POST", "https://hookb.in/mZRdGYVQ0DSeqq710eD3", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

 /*  const onSubmit = (e) => {
    alert('Email was submitted: ' + email + ' phone was submitted' + phone);
    e.preventDefault();
  }
*/
   const onSubmit = (e) => {
    e.preventDefault();
    alert('Both your e-mail: ' + email + ' AND phone number: ' + phone +' just got logged in console and POSTed on Hookbin rn my dude <3');

      console.log('mail in console: '+ email);  
      console.log('phone in console: '+ phone);

    var data = JSON.stringify({email,phone});
  
    xhr.send(data);
    
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
