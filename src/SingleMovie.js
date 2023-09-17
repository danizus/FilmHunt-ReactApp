import React from 'react';
import { UseGlobalContext } from './context';
import { NavLink, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Box ,Typography,Button, Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import image from "./Magnify-1s-200px.gif";



const SingleMovie = () => {
const {id} = useParams();
const {Mode} = UseGlobalContext();
const [isloading,setloading] = useState(true);
const [movie, setMovie] = useState("");
const API_URL=`https://omdbapi.com/?i=${id}&apikey=3752530f`


const handleBack= ()=>{

}


const getMovies = async (url)=>{
setloading(true)
try{


const data = await fetch(url);
const  parsedData = await data.json();



if(parsedData.Response === "True"){
setloading(false);
setMovie(parsedData);


}
}
catch(error){
console.log(error);

}


}

useEffect (()=>{
var TimerOut = setTimeout(()=>{

getMovies(`${API_URL}`);
},650)

return () => clearTimeout(TimerOut);
},[id])



if(isloading){
  return(
    
    <>
    <div>
    <NavLink to='/' ><Button style={Mode?{backgroundColor:"black",color:"white"}:{backgroundColor:"#fdf5e6"}} sx={
      {
        
        color:"black"
      }
    } onClick={handleBack}>{<ArrowBackIcon/> }back</Button></NavLink>

<div className={Mode?"black":"white"} style={{height:"100vh" ,margin:"4px",display:"flex" , justifyContent:"center",alignItems:"center"}}>
   
   <img src={image} alt="" />
    
    </div>

    </div>
    
    
    
    </>)}


  return (
   <>

   <div style={{marginBottom:"5px"}} >
  <NavLink  to='/'  ><Button style={Mode?{backgroundColor:"black",color:"white"}:{backgroundColor:"#fdf5e6"}}  sx={
      {
       
        color:"black"
      }
    }>{<ArrowBackIcon/> }back</Button></NavLink>
   
   
   </div>
<div className='body' style={Mode?{backgroundColor:"black"}:{backgroundColor:"#fdf5e6"}}>
   <div className="movie-poster" style={{backgroundColor:"#ffe4c4",color:"black"}}>
        <img src={movie.Poster} alt="Movie Poster"/>
        <h1 className="movie-title">{movie.Title}</h1>
        <p className="movie-description"><b>Plot: </b>{movie.Plot}.</p>
        <p className="release-date"> Released on: {movie.Released}</p>
    </div>

    </div>







 
  </>
  )
 
}


export default SingleMovie
