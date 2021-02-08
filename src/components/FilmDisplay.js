import React from 'react';
import placeholderImg from '../placeholder.png'
import { ReactComponent as ChevronLeft } from '../chevron-left.svg'
import { ReactComponent as ChevronRight } from '../chevron-right.svg'

function FilmDisplay({pagesAmount,currentPage,searchResult,setCurrentPage,getFilmList}) {

  const handlePages = (action) => {
    if (action === 'back') {
      getFilmList(currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
    if (action === 'forward') {
      getFilmList(currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  };
  
  return (
    <div className="search-results">
      <div className="chevron">
        <ChevronLeft onClick={() => handlePages('back')} style={{cursor: currentPage > 1 && 'pointer', display: currentPage === 1 && 'none'}}/>
      </div>
      <div className="search-results-list">
        {searchResult.Search && searchResult.Search.map((result,index) => (
          <div key={`film_${index}`} className="search-item">
            <img
              src={result.Poster === 'N/A' ? placeholderImg : result.Poster}
              alt="poster"
            />
            <div className="search-item-data">
              <div className="title">{result.Title}</div>
              <div className="meta">{`${result.Type} | ${result.Year}`}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="chevron">
        <ChevronRight onClick={() => handlePages('forward')} style={{cursor: currentPage < pagesAmount && 'pointer',display: currentPage === pagesAmount && 'none'}}/>
      </div>
    </div>
  )
};

export default FilmDisplay;