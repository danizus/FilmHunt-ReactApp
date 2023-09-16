import React from 'react';
import { UseGlobalContext } from './context';
import { NavLink, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Box ,Typography,Button, Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import image from "./Magnify-1s-200px.gif"


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
 <div className={Mode?"black":"white"}  style={{width:"100vw",height:"100vh"}}>
  <Grid container   sx={{display:"flex",justifyContent:"center",alignItems:"center" }}  >
   <Grid item  className={Mode?"black":"white"} sx={{padding:"10px"}}   >
     <img src={movie.Poster} alt="" />
     </Grid> 

    
     <Grid item className={Mode?"black":"white"}  width = "60%"sx={{textAlign:"justify",margin:"20px",padding:"20px", }}>
  
       <Typography  className={Mode?"black":"white"}   variant='h3'>
            {movie.Title}   
          </Typography>
          <br/>
          
         
         
          <Typography    component="div" sx={{ fontFamily: 'Poppins'}}>
          <b>Type</b>: {movie.Type}    ||   <b>Genre</b> : {movie.Genre}
          
          </Typography>
         
          <Typography    component="div" sx={{ fontFamily: 'Poppins'}}>
          <b>Released</b> : {movie.Released} ||  <b>imdbRating</b>: {movie.imdbRating}
       
          </Typography>
         
          <Typography  className='mobile' variant='subtitle1' component="div" sx={{ fontFamily: 'Poppins'}}>
          <b>Actors</b>: {movie.Actors}
         
         </Typography>
         
          
          <Typography  component="div" sx={{ fontFamily: 'Poppins'}}>
          <b>Awards</b>: {movie.Awards}
          </Typography>
         
       
       
        
          <Typography   variant='subtitle1'  component="div">
          <b >Plot:</b> {movie.Plot}
          </Typography>
         
          
        
        
   </Grid>
  

  
          
   </Grid>
   </div>
  </>
  )
 
}


export default SingleMovie
