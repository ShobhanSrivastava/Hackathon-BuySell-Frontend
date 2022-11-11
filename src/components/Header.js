import React from 'react'

const Header = () => {
  return (
    <div className='h-[10vh] w-full sticky border border-black flex items-center justify-between px-5'>
        <div className=''>
          <p className='text-3xl tracking-[4px]'>BidHub</p>
          <p className='text-[10px]'>A Graphic Era Product</p>
        </div>
        <ul className='flex space-x-4 text-lg'>
            <li>Menu</li>
            <li>Buy</li>
            <li>Sell</li>
            <li>About</li>
        </ul>
    </div>
  )
}

export default Header