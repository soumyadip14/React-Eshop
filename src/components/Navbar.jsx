import React from 'react';
import { TbShoppingCartCode } from "react-icons/tb";

const Navbar = ({size, setShow}) => {

  return (
    <nav>
      <div className='nav_box'>
        <span className='my_shop' onClick={()=>setShow(true)}>
          My Shop
        </span>
        <div className='cart' onClick={()=>setShow(false)}>
          <span>
            <TbShoppingCartCode />
          </span>
          <span>
            {size}
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
