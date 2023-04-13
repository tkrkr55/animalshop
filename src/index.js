import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import NotFound from './page/NotFound';
import Home from './page/Home';
import AllProducts from './page/AllProducts';
import NewProduct from './page/NewProduct';
import ProductDetail from './page/ProductDetail';
import MyCart from './page/MyCart';
import ProtectedRoute from './page/ProtectedRoute';
const router = createBrowserRouter([{
  path:'/',
  element :  <App/>,
  errorElement: <NotFound/>,
  children:[
  { index:true,path:'/' ,element : <Home/>},
  { path: '/products', element: <AllProducts/>},
  { path: '/products/new', element: 
  <ProtectedRoute requireAdmin> <NewProduct/> </ProtectedRoute>},
  { path: '/products/:id', element: <ProductDetail/>},
  { path: '/carts', element: 
  <ProtectedRoute> <MyCart/> </ProtectedRoute>
 },
 
  ]
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
