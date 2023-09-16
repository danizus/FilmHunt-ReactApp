import React from 'react';
import { UseGlobalContext } from './context';
import { NavLink, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Box ,Typography,Button} from '@mui/material';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
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

<div className={Mode?"black":"white"} style={{height:"90vh" ,margin:"4px",display:"flex" , justifyContent:"center",alignItems:"center"}}>
   
   <img src={image} alt="" />
    
    </div>

    </div>
    
    
    
    </>)}


  return (
   <>
  <NavLink  to='/'  ><Button style={Mode?{backgroundColor:"black",color:"white"}:{backgroundColor:"#fdf5e6"}}  sx={
      {
       
        color:"black"
      }
    }>{<ArrowBackIcon/> }back</Button></NavLink>

   <div   className={Mode?"black":"white"}  style={{height:"100vh" ,margin:"4px",display:"flex" , justifyContent:"center",alignItems:"center"}}>
   <Box  className={Mode?"black":"white"}  sm={12} sx={{width:"80vw",display:"flex",justifyContent:"center",alignItems:"center",height:"70vh",padding:"4px"}}>
   <Card  sx={{display:"flex",justifyContent:"space-between",padding:"4px"}} >
      <Box sx={{justifyContent:"space-between"}}>
      
        <CardContent sx={{ flex: '1 0 auto'}}>
          <Typography  component="div" variant="h5" sx={
            {
              
              fontFamily: 'Poppins'
            }
          }>
            {movie.Title}
          </Typography>
          <br/>
         
         
          <Typography    component="div" sx={{ fontFamily: 'Poppins'}}>
           Type: {movie.Type}
         
          </Typography>
          <br/>
          <Typography    component="div" sx={{ fontFamily: 'Poppins'}}>
          Genre: {movie.Genre}
       
          </Typography>
          <br />
          <Typography  className='mobile' variant='subtitle1' component="div" sx={{ fontFamily: 'Poppins'}}>
           ACTORS: {movie.Actors}
         
          </Typography>
          <br className='mobile'/>
          <Typography component="div" sx={{ fontFamily: 'Poppins'}}>
           Year: {movie.Year}
          </Typography>
          <br />
         
          <Typography  component="div" sx={{ fontFamily: 'Poppins'}}>
          imdbRating: {movie.imdbRating}
          </Typography>
          <br />
          <Typography  component="div" sx={{ fontFamily: 'Poppins'}}>
          Awards: {movie.Awards}
          </Typography>
          <br />
          <Typography  component="div" sx={{ fontFamily: 'Poppins'}}>
          Released: {movie.Released}
          </Typography>
          <br />
          <Typography className="mobile" variant='subtitle2'  component="div" sx={{ fontFamily: 'Poppins'}}>
          <b >Plot</b>: {movie.Plot}
          </Typography>
          <br />
          
          </CardContent>
         
          </Box>
        
          
          <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={movie.Poster}
        alt={movie.Title}
      />
      

          </Card>


   </Box>

  
          
   </div>
  
  
   


   
   </>
   
  )
 
}


export default SingleMovie
