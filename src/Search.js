import React from 'react';
import { InputBase,Box,Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { UseGlobalContext } from './context';
import ErrorIcon from '@mui/icons-material/Error';



const Search = () => {
  const {HandleChange,error } = UseGlobalContext();


  return (
   <>
   
  <section>

   <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    
     <InputBase
     autofocus
  placeholder="Search your favourite movie"
  inputProps={{ 'aria-label': 'search' }}
  endAdornment={<SearchIcon/>}
  sx={{m:"20px",border:"2px solid black",borderRadius:"10px",width:"50%"}} onSubmit={(e)=>{
    e.preventDefault()
  }}
   onChange={HandleChange} type="text"
/>



    
    </div>
    { error.show &&
<Box display="flex" justifyContent="center">
  <ErrorIcon/>
  <Typography>{error.msg}</Typography>
</Box>
}

   
</section>

    </>
  )
}

export default Search
