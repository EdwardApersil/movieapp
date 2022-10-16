import React from 'react'

const SearchBar = ({setSearchMovie, searchMovie}) => {
  return (
    <>
        <input
            type="text"
            placeholder="Search..."
            className="p-1 border-0 outline-0"
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
          />
    </>
  )
}

export default SearchBar