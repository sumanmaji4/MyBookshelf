import React from 'react'
import { Link } from 'react-router-dom'
import Book from '../components/Book'

function My_Bookshelf() {
  const books = localStorage.getItem('bookShelf')
    ? JSON.parse(localStorage.getItem('bookShelf'))
    : []
  return (
    <div className='p-4'>
      <Link to='/' className='bg-green-500 text-white p-2 rounded-2xl px-8'>
        Home
      </Link>
      <div className='p-4 w-full mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {books && books.length ? (
          books.map((item) => <Book item={item} shelf={true} key={item.id} />)
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  )
}

export default My_Bookshelf
