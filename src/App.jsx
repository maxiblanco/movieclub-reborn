import React from 'react';
// Views
import Home from '/views/Home.jsx';
import './App.scss';

const App = () => {
    console.log(process.env.API_KEY);
    console.log(process.env.API_URL);

    return <Home />;
};

export default App;
