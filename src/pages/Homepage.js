import React from 'react'
import Button from '../components/Button'
import Header from '../components/Header';

const Homepage = () => {

    const onClick = () => {
        window.alert("Button Clicked");
    }

  return (
    <>
        <Header />
        <Button text="Click Me!" onClick={onClick} />
    </>
  )
}

export default Homepage