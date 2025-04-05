import React from 'react'
import '../styles/genre.css'

const Genre = ({title, genreData}) => {
  const books = [];
  const numberOfBooks = length(genreData)

  
  return (
    <div>
      <h1>{title}</h1>
      <ul>book1</ul>
      <ul>book2</ul>
      <ul>book3</ul>
    </div>
  )
}

export default Genre
