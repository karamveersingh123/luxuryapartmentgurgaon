'use client'
import React, { useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`)
    }
  }

  const clearSearch = () => {
    setSearchTerm('')
  }

  return (
    <form 
      className="search-bar d-flex align-items-center" 
      onSubmit={handleSearch}
    >
      <input
        type="text"
        className="search-input"
        placeholder='Search Project/Area/Developer'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        required
      />
      <button type="submit" className="search-btn">
        <FaSearch />
      </button>
      {searchTerm && (
        <button type="button" className="clear-btn" onClick={clearSearch}>
          <FaTimes />
        </button>
      )}
    </form>
  )
}

export default SearchBox
