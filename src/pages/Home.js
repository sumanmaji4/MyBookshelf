import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Book from '../components/Book'

function Home() {
  let curr = localStorage.getItem('books')
    ? JSON.parse(localStorage.getItem('books'))
    : []
  //console.log('here', curr)
  //   console.log(curr)
  const [books, setBooks] = useState(curr)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const timer = useRef()

  useEffect(() => {
    if (search.trim() === '') return
    async function fetchData() {
      console.log(search)
      setLoading(true)
      let res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=10`
      )

      res = await res.json()
      //if (!res) res.items = []
      console.log(res)
      if (res.items) {
        setBooks(res.items)
        localStorage.setItem('books', JSON.stringify(res.items))
      } else {
        setBooks([])
        localStorage.setItem('books', JSON.stringify([]))
      }

      setLoading(false)
    }

    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      fetchData()
    }, 500)
  }, [search])

  //console.log(books)
  return (
    <div className='p-8 flex flex-col items-center h-screen w-screen'>
      <div className='flex flex-col w-full items-center gap-4 md:gap-0'>
        <Link to='/myshelf' className='md:ml-auto'>
          <button className='bg-green-500 text-white p-2 rounded-2xl px-8'>
            My Bookshelf
          </button>
        </Link>

        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=' p-2 border-2 border-gray-500 rounded-md w-72'
          placeholder='Enter text to search'
        />
      </div>
      <div className='p-4 w-full mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {loading ? (
          <p>loading...</p>
        ) : books && books.length ? (
          books.map((item) => <Book item={item} key={item.id} />)
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  )
}

export default Home
