import React from 'react'
import {useState} from 'react'


const Search = ({props}) => {
    const [search, setSearch] = useState('')
    // const [character, setCharacter] = useState([])
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = (e) => {
        e.preventDefault()

        const filteredResults = props.filter(item => {
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
          <div className="input-name">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>
              {" "}
              <i className="fa-solid fa-magnifying-glass"></i>{" "}
            </button>
          </div>

          {searchResults.map(item => (
            <div className='cardCharacterGot' key={item.id}>
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
          

          

export default Search;
