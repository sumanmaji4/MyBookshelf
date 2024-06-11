import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'
import MyBookshelf from './pages/MyBookshelf'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/myshelf', element: <MyBookshelf /> },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
