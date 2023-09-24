import React from 'react'
import '../styles/App.css';
import { useState, useEffect } from 'react';
const App = () => {
//code here 
  const [id, setId] = useState(1);
  const [name, setName] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch(`https://content.newtonschool.co/v1/pr/main/users/${id}`);
      const data = await response.json();
      setName(data.name);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const changeInput = (event) => {
    const newId = parseInt(event.target.value);
    if (newId >= 1 && newId <= 10) {
      setId(newId);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" onChange={changeInput} value={id} />
      <p id="name">{name}</p>
    </div>
  );
}


export default App;
