import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import { Characters } from './components/characters';
//import Button from './components/button';
import './App.css';





function App() {

  const [ characters, setCharacters] = useState([])

  const iniUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) =>{

    fetch(url)
      .then( response => response.json() )
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error))
  };

  useEffect(() => {
    fetchCharacters(iniUrl);
  }, [])

  return (
  <>
      <Navbar/> 
    
      <div className='container mt-5'>
        <Characters characters={characters} />
        

      </div>
        

  </>
   
  );
}

export default App;
