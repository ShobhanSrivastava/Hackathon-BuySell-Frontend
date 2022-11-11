import React, { useEffect, useState } from 'react'
import Countdown from 'react-countdown'

const ProductPage = ({ title, description, imageUrl, category, remainingTime, minBid, currentBid }) => {

    const [product, setProduct] = useState();

    // useEffect(async () => {
    //     const product = await fetch(

    //     )
    // }, [product]);
    

  return (
    <>
        <div>
            
        </div>
        <img src={ imageUrl } className="w-128" />
        <p>{ title }</p>
        <p>{ description }</p>
        <Countdown 
            // daysInHours="true"
            date={ Date.now()+1000 }>
            <span> Time Up!</span>
        </Countdown>
        <p>Minimum Bid: { minBid }</p>
        <p>Current Bid: { currentBid }</p>
    </>
  )
}

export default ProductPage