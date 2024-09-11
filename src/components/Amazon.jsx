import React from 'react'
import list from './Data'
import Card from './Card'
const Amazon = ({handleClick}) => {
  return (
   <section>
      {
        list.map((item) => (
          <Card key ={item.id} item={item} handleClick={handleClick}/>
        )
        )
      }
</section>
  )
}

export default Amazon
