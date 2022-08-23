import React,{useState, useEffect} from 'react'
import Search from './Search';
import axios from 'axios';


const MyApi = () => {

  const [character, setCharacter] = useState([]);
  

  useEffect(() => {  

    const fetchCharacters= async () => {
      const result = await axios('https://thronesapi.com/api/v2/Characters');
      setCharacter(result.data);

      console.log(character);
   
    }
    fetchCharacters();
  }, [])


    return( 
        <>
        <Search props={character}/>
        </>
    );
}

export default MyApi;
