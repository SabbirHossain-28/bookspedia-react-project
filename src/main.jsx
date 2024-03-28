import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import BooksDetails from './Components/BookDetails/BooksDetails';
import ReadPages from './Components/ReadPagesChart/ReadPages';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Membership from './Components/Membership/Membership';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/booksListed",
        element: <ListedBooks></ListedBooks>
      },
      {
        path:"/readPages",
        element:<ReadPages></ReadPages>
      },
      {
        path:"/membership",
        element: <Membership></Membership>
      },
      {
        path:"/bookCard/:id",
        element: <BooksDetails></BooksDetails>,
        loader:()=>fetch('https://sabbirhossain-28.github.io/books-json-host/books.json'),
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
