import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Genre from "./components/Genre"
import HideButton from './components/HideButton'

function App() {
  const bookData = {
    "fiction": [
      {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": 10.00},
      {"title": "1984", "author": "George Orwell", "price": 8.50},
      {"title": "The Catcher in the Rye", "author": "J.D. Salinger", "price": 9.80}
    ],
    "non-fiction": [
      {"title": "Sapiens: A Brief History of Humankind", "author": "Yuval Noah Harari", "price": 15.00},
      {"title": "In Cold Blood", "author": "Truman Capote", "price": 12.00},
      {"title": "The Diary of a Young Girl", "author": "Anne Frank", "price": 7.00}
    ],
    "children": [
      {"title": "Charlotte's Web", "author": "E.B. White", "price": 5.00},
      {"title": "The Gruffalo", "author": "Julia Donaldson", "price": 6.00},
      {"title": "Where the Wild Things Are", "author": "Maurice Sendak", "price": 8.00}
    ]
  };
  
  // const [fictionVisible, setFiction] = useState(True)
  // const [nonFictionVisible, setNonFiction] = useState(True)
  // const [childrenVisible, setChildren] = useState(True)

  return (
    <>
      <h1> Online BookStore</h1>
      <HideButton title = "Fiction" />
      <HideButton title = "Nonfiction" />
      <HideButton title = "Children" />
      
      <div>
        {Object.entries(bookData).map(([category, books]) => (
          <div key={category}>
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <ul>
              {books.map((book, index) => (
                <li key={index}>
                  <i>{book.title}</i>, {book.author}, ${book.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
    
  )
}

export default App
