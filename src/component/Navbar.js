import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoLogoOctocat } from 'react-icons/io';
import { BsFillPencilFill } from 'react-icons/bs';
import { login, logout, onUserStateChange } from '../service/firebase';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';
export default function Navbar() {
 
  const { user,login,logout } = useAuthContext()
  return (
    <header className='flex justify-between border-b border-gray-300 p-4'>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <IoLogoOctocat/>
      <h1>김집사</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold '>
        <Link to='/products'>Products</Link>
        {user && <Link to='/carts'>
          <CartStatus/>
          </Link>}
        {user && user.isAdmin && (
           <Link to='/products/new' className='text-2xl'>
           <BsFillPencilFill/>
         </Link>
         
        )}
       
        {user && <User user={user}/>}
        {!user && <Button text={'Login'} onClick={login}></Button>}
        {user &&  <Button text={'Logout'} onClick={logout}></Button>}
      </nav>
      

    </header>
  )
}
