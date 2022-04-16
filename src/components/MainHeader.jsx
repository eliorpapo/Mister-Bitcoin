import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

export function MainHeader() {
  return (
    <header className="app-header">
      <section className="container">
        <h1 className="logo">Mr. Bitcoin</h1>
        <nav>
          <Link to="/">
            <Button variant="outlined">Home</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outlined"> Contacts</Button>
          </Link>
          <Link to="/statistic">
            <Button variant="outlined">Statistics</Button>
          </Link>
          <Link to="/login">
            <Button variant="outlined">Login</Button>
          </Link>
        </nav>
      </section>
    </header>
  )
}
