import './App.css';
import Navbar from './components/Navbar';
import ListView from './components/ListView';
import axios from "axios";
import { useState, useEffect } from 'react';
import styled from 'styled-components';

function App() {

  const [cafe, setCafe] = useState([]);                     //plate
  const [chocolate, setChocolate] = useState([]);           //drink
  const [aperitivo, setAperitivo] = useState([]);           //sandwich
  const [aromatizador, setAromatizador] = useState();       //shisha



  useEffect(() =>  {
    
    fetchRecipes();
    
  }, []);


  const fetchRecipes = async () => {
    const { data } = await axios.get(`http://localhost:8000/api/recipes/`);
    

        var sorted = {};
        for( var i = 0; i < data.recipes.length ; i++ ){

          if( sorted[data.recipes[i].type] === undefined ){
          sorted[data.recipes[i].type] = [];
          }
          sorted[data.recipes[i].type].push(data.recipes[i]);
        }

        console.log(sorted)
        
        setChocolate(sorted['chocolate']);
        setAperitivo(sorted['aperitivo']);
        setCafe(sorted['cafe']);
      
        setAromatizador(sorted['aromatizador'])

  };

  const Link = styled.a`
  background-color: white;
  color: blue;
  `;


  return (
    <div className="App">
      <Navbar />
      
      <ListView recipes={cafe} type="cafes" />

      <ListView recipes={aperitivo} type="aperitivos"  />
     
     <ListView recipes={chocolate} type="chocolates" />

     <ListView recipes={aromatizador} type="aromatizadores" />
    </div>
  );
}

export default App;
