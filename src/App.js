import React from 'react'
import Header from './components/Header'
import AddProduct from './pages/AddProduct'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import ProductPage from './pages/ProductPage'
import SignUpPage from './pages/SignUpPage'

const imageUrl = "https://media.istockphoto.com/id/464621465/photo/old-leather-shoes.jpg?b=1&s=170667a&w=0&k=20&c=ThXhQhIPrKR_46LRdVh0pzwDt0tobDeerMvZz-EmoR0=";

const App = () => {
  return (
    <>
        <Header />
        {/* Add Pages here! */}
        {/* <Homepage /> */}
        {/* <SignUpPage /> */}
        <LoginPage />
        {/* <AddProduct /> */}
        {/* <ProductPage title="Old Shoes" description="Only 3 months old" imageUrl={imageUrl} /> */}
    </>
  )
}

export default App