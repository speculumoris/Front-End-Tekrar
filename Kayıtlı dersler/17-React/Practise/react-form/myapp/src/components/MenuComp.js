import React from 'react'
import {Nav} from "react-bootstrap"

const MenuComp = () => {
  return (
    <Nav className='display-flex justify-content-center align-items-center gap-5 mt-3 '>
    <Nav.Item >
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item >
      <Nav.Link href="/login">Login</Nav.Link>
    </Nav.Item>
    <Nav.Item >
      <Nav.Link href="/register">Register</Nav.Link>
    </Nav.Item>
  </Nav>
  )
}

export default MenuComp