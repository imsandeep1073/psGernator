import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import 'rsuite/dist/rsuite.min.css';


import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Cart from './component/pages/Cart.jsx'
import Password from './component/pages/Password.jsx'
import Blog from './component/pages/Blog.jsx'
import User from './component/user/User.jsx';
import Git from './component/user/Git.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='cart' element={<Cart />} />
      <Route path='password' element={<Password />} />
      <Route path='blog' element={<Blog />} />
      <Route path='user/' element={<User />}>
        <Route path=':userid' element={<User />} />
      </Route>
      <Route path='github' element={<Git />} />
    </Route>
  )
)




createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
