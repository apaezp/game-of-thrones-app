import React from 'react'
import'./HeroSection.css';
import { Button } from "./Button";
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';


export default function HeroSectionGot() {
  return (
    <div className='heroGradient'>
  <div className="hero-containerGot"> 
          
          <h1>"Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you."</h1>
          <p>— Tyrion Lannister.</p>
          <div className="hero-btns">
          <Link to='./CharactersGot' className='btn-mobile'>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Characters
            </Button>
          </Link>
          <Link to='./Books' className='btn-mobile'>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Books
            </Button>
            </Link>
            <Link to='./TvSeries' className='btn-mobile'>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              TV Series
            </Button>
            </Link>
            <Link to='./Footer' className='btn-mobile'>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Quotes
            </Button>
            </Link>
            <Link to='./Search' className='btn-mobile'>
            <Button
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"              
            >
              Search <FaSearch className="fa-search" />
            </Button>
            </Link>
            
          </div>
        
      
    </div>

    </div>
  );
}