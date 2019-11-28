import React from 'react'
import { navigate } from 'gatsby'
import Header from '../components/Header'

const test = () => {
  return (
    <div>
      <Header title='Jeppikajee' />
      <h3>Hello World.</h3>
      <button onClick={() => navigate('/')}>
        Navigate to Homepage
      </button>
    </div>
  )
}

export default test

