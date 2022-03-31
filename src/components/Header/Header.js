import React from 'react'
import './Header.css'
import { IoIosBeer } from 'react-icons/io'
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Link to='/'>
      <nav>
          <h1 style={{color: 'white'}}><IoIosBeer /></h1>
      </nav>
    </ Link>
  )
}
