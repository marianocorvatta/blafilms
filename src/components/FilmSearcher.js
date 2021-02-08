import React, { useState } from 'react'
import AppServices from '../services/AppServices'
import FilmDisplay from './FilmDisplay'

function FilmSearcher() {
  const [filmName, setFilmName] = useState('')
  const [searchResult, setSearchResult] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [pagesAmount, setPagesAmount] = useState(0)

  const getFilmList = async (page) => {
    if (filmName) {
      try {
        const resp = await AppServices.getFilmsByName(filmName, page)
        console.log("resp",resp);
        setPagesAmount(Math.ceil(parseInt(resp.totalResults) / 10))
        setSearchResult(resp)
      } catch (e) {
        console.log(e)
      }
    }
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          onChange={e => setFilmName(e.target.value)}
        />
        <button onClick={() => {getFilmList(1); setCurrentPage(1);}}>Search</button>
      </div>
      {!searchResult && (
        <div style={{ textAlign: 'center' }}>
          <h1>No results yet</h1>
        </div>
      )}
      {!searchResult.Error && searchResult ? (
        <FilmDisplay 
          searchResult={searchResult} 
          setCurrentPage={setCurrentPage} 
          getFilmList={getFilmList} 
          pagesAmount={pagesAmount} 
          currentPage={currentPage} 
        />
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h1>{searchResult.Error}</h1>
        </div>
      )}
    </>
  )
}

export default FilmSearcher
