import React from 'react';
import { UseGlobalContext } from './context';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';



import { NavLink } from 'react-router-dom';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';




const Movies = ({mode}) => {
  const {movie,isloading} = UseGlobalContext();



 if(isloading){
  return(
 <Typography sx={{textAlign:"center",mt:"20px"}} variant='h6'>{<HourglassBottomIcon/> }LOADING ...</Typography>
  )
  }

 
  return (
  <>
  

  
  <>
 
 
    <Box
    className={mode?"black":"white"}
    sx={{
      display:"flex", justifyContent:"center",alignItems:"center"
      } }
    
    >
    <Grid container   spacing={4} sx={{position:"relative",padding:"40px",width:"80%"}} >
      {movie.map((m)=>{

        let movieName = m.Title.substring(0,20)
        if(m.Title.length>20){
          movieName = m.Title.substring(0,20) + "..."
        }
        if(m.Poster === 'N/A'){
          m.Poster = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/61da8438155793.57575971afe13.jpg"
        }


        return (
       < >
       
       
       <Grid item  xs={12} sm={12} md={6}  lg={4}  width={100} key={m.imdbID} >
       <NavLink  to={`movie/${m.imdbID}`} style={{textDecoration:"none"}}
       >
      <Card className="card"  sx={{display:"flex",justifyContent:"space-between",p:"10px"}} >
      <Box sx={{justifyContent:"space-between"}}>
      
        <CardContent sx={{ flex: '1 0 auto'}}>
          <Typography  component="div" variant="h5" sx={
            {
              
              fontFamily: 'Poppins'
            }
          }>
            {movieName}
          </Typography>
          <br/>
         
         
          <Typography  className='card'  component="div" sx={{ fontFamily: 'Poppins'}}>
           {m.Type}
          <br />
       

           
          </Typography>
          <Typography className='card' component="div" sx={{ fontFamily: 'Poppins'}}>
           
           Year: {m.Year}
          </Typography>
          <Typography className='card' component="div" sx={{ fontFamily: 'Poppins'}}>
           
          Released: {m.Released}
          </Typography>
          
          </CardContent>
         
          </Box>
        
          
          <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={m.Poster}
        alt={m.Title}
      />
      

          </Card>
          </NavLink> 
          </Grid>
          
          
        

          
    
       </>
      
        )

      })}

      
    </Grid>

   </Box>


   </>



   </>
   
  )
}

export default Movies
