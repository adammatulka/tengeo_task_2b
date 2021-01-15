import React, { useState } from 'react';

import { Heading } from './heading';

export const Main = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = (e) => {
    alert('A name was submitted: ' + email + ' ' + phone);
    e.preventDefault();
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
