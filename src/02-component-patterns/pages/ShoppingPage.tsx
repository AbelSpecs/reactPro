import React from 'react'
import { ProductCard } from '../components';
import { ProductImg } from '../components';



const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
       <h1>Shopping Page</h1>
       <hr /> 
       <ProductCard product={product}>
          <ProductImg/>
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image/>
          <ProductCard.Title/>
        </ProductCard>
    </div>
  )
}
