import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
