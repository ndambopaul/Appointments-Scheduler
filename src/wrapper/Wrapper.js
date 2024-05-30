import React from 'react'
import Navbar from "../components/Navbar"

const Wrapper = (props) => {
  return (
    <>
        <Navbar />
        {props.children}
    </>
  )
}

export default Wrapper