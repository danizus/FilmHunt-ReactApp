import React, { useContext, useEffect, useState } from 'react';


const AppContext = React.createContext();

export const API_URL = `https://omdbapi.com/?apikey=3752530f&s=` 

const arrayMovies = ["love","mission impossible","fast and furious", "naruto","kabhi","avatar","fight","kid","happy","jawan"]



const AppProvider = ({children}) => {
  const [Mode,setMode] = useState(false)
      const [isloading,setloading] = useState(true);
      const [movie, setMovie] = useState([]);
      const [error,setError] = useState({show:null, msg:""});
      const [search,setSearch] = useState(arrayMovies[Math.floor(Math.random() * 9)])

      const HandleChange=(e)=>{
       if(e.target.value){
        setSearch(e.target.value);
       }else{
        setSearch(arrayMovies[Math.floor(Math.random() * 9)])
       }
      }

 const getMovies = async (url)=>{
  setloading(true)
  try{

  
   const data = await fetch(url);
  const  parsedData = await data.json();
  


  if(parsedData.Response === "True"){
    setloading(false);
    setMovie(parsedData.Search);
    setError({show:false ,msg:""})
  
  }else{

    setError({show:true,msg:parsedData.Error})


  }
  }
  catch(error){
    console.log(error);
    
  }


 }
 
 useEffect (()=>{
var TimerOut = setTimeout(()=>{

  getMovies(`${API_URL}${search}`);
},650)
  
return () => clearTimeout(TimerOut);
 },[search])
 
 
  return (
  <AppContext.Provider value={{isloading,movie,error,HandleChange,search,setSearch,Mode,setMode}}>
    {children}
  </AppContext.Provider>
  )
}

const UseGlobalContext = ()=>{

 return useContext(AppContext);
}

export { AppContext, AppProvider ,UseGlobalContext}
