import React from 'react';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Cart from './component/pages/Cart.jsx'
import Password from './component/pages/Password.jsx'
import Blog from './component/pages/Blog.jsx'
import User from './component/user/User.jsx';
import Git from './component/user/Git.jsx';

import { contextCount } from './component/context/context.js';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/cart' element={<Cart />} />
      <Route path='/password' element={<Password />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/user/' element={<User />}>
        <Route path=':userid' element={<User />} />
      </Route>
      <Route path='github' element={<Git />} />
    </Route>
  )
)

export default function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}
