import React from 'react';
import Home from './Home';
import { Routes,Route } from 'react-router-dom';
import SingleMovie from './SingleMovie';
import Error from './Error';
import { UseGlobalContext } from './context';

const App = () => {
  const {movie} = UseGlobalContext();
  return (
 <>
 
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='movie/:id' element={<SingleMovie  />}/>
  <Route path='*' element={<Error/>}/>


 </Routes>
 
 
 

     
 </>
   
  )
}

export default App
