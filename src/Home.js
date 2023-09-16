import React  from 'react';
import { Button, Typography } from '@mui/material';
import Movies from './Movies';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';
import Search from "./Search";
import { UseGlobalContext } from './context';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const Home = () => {
  const {Mode,setMode} = UseGlobalContext();

 const handleClick = (e)=>{
    if(Mode === false){
      setMode(true)
    }else{
      setMode(false)
    }

 } 
 const {loading} = UseGlobalContext();
  
  return (
   <>
   <div>
    <Button onClick={handleClick}  sx={
    {
      color:"black",
    }
   }>
    <DarkModeIcon sx={{backgroundColor:"#3d0c02",color:"white",borderRadius:"2px",margin:"4px"}}/> 
    {Mode?"lightmode":"darkmode"}
    </Button>
    </div>




   <Typography variant="h1" sx={
    {textAlign:"center",
    display:"block"}
   }
  className={Mode?"black":"white#"}
   
   
   
   
   >FilmHunt</Typography>

  
 
 
   <Search/>
  
   <Movies mode = {Mode}/>
 



  
   </>
  )
}

export default Home
