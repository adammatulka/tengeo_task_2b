import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Main } from './main.class'

const App = () => {
    const [showForm, setShowForm] = useState(true);

    return <div>
        <button onClick={() => {setShowForm(!showForm)}}>{showForm ? 'Hide form' : 'Show form'}</button>
        {showForm && <Main />}
    </div>;
}

ReactDOM.render(<App />,document.getElementById('root'));
