import React from 'react'
import ProductCard from './ProductCard'
import useProducts from '../hooks/useProducts'

export default function Products() {
  const{getProducts: {isLoading,error,data:products}} =useProducts()
  return (
    <>
    {isLoading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    <ul className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
    {products && products.map((product)=> <ProductCard key={product.id} product={product}/>)}
    </ul>
    </>
  )
}
