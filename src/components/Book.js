import React from 'react'

function Book({ item, shelf = false }) {
  function addToBookShelf() {
    let bookShelf = localStorage.getItem('bookShelf')
      ? JSON.parse(localStorage.getItem('bookShelf'))
      : []

    let has = bookShelf.find((curr) => curr.id === item.id)
    if (has) return

    bookShelf.push(item)

    localStorage.setItem('bookShelf', JSON.stringify(bookShelf))
  }

  return (
    <section
      key={item.id}
      className='border-2 border-gray-500 p-4 rounded-lg min-h-60 flex flex-col'
    >
      <h3 className='font-serif font-bold text-xl pb-8'>
        {item?.volumeInfo?.title}
      </h3>
      <p className='font-serif font-semibold text-gray-700 text-right'>
        {item.volumeInfo.authors ? item.volumeInfo.authors[0] : 'Unknown'}
      </p>
      {!shelf && (
        <button
          className='bg-green-500 text-white p-2 rounded-2xl px-8 w-48 mt-auto mx-auto'
          onClick={addToBookShelf}
        >
          Add to Bookshelf
        </button>
      )}
      {/* {shelf && (
        <button
          className='bg-green-500 text-white p-2 rounded-2xl px-8 w-48 mt-auto mx-auto'
          onClick={remove}
        >
          Remove
        </button>
      )} */}
    </section>
  )
}

export default Book
