import React,{useState, useEffect} from 'react'
import { GiMagnifyingGlass } from 'react-icons/gi'
import Video from './assets/videos/snow-forest.mp4'
import "./MyApi.css"


const MyApi = () => {

  
  const [character, setCharacter] = useState([])

  useEffect(() => {

    try {

    fetch("https://thronesapi.com/api/v2/Characters")
    .then(response => response.json())
    .then(data => setCharacter(data))

    } catch (error) {
      console.log(error)
    }

    }, [])  
  
    const [search, setSearch] = useState('')    
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = (e) => {
        e.preventDefault()

        const filteredResults = character.filter(item => {
            return item.fullName.toLowerCase().includes(search.toLowerCase())
        } )        

        if(search === ''){
            alert('Please enter a name');
            return
        } else if (filteredResults.length === 0){
            alert('No results found');
            return
        } else {
            setSearchResults(filteredResults)
        }

        setSearch('');
    
    };
  

return (
        <>
        <div className="search-card-container">
        <video src={Video} autoPlay loop muted />
          <div className="input-name">
            <input className="search-input" type="text" placeholder="Search for a character" value={search} onChange={(e) => setSearch(e.target.value)} />
           
            <button className="btn-search" onClick={handleSearch}>
              {" "}
              <GiMagnifyingGlass clasName="magnifying-glass-icon "/>{" "}
            </button>
          </div>

          {searchResults.map(item => (
            <div className='cardCharacter' key={item.id}>
            <div className='imgCardGot'>
            <img className='cardImgGot'src={item.imageUrl} alt={item.fullName}/>
            </div>
            <div className='cardInfoGot'>
              <h3 className='nameGot'>{item.fullName}</h3>
              <h4 className='familyGot'>{item.family}</h4>
              <h4 className='titleGot'>{item.title}</h4>
            </div>
        </div>
            ))}
        </div>
        </>
    )
}     


          


export default MyApi;
