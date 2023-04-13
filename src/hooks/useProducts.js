import {useQuery, QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import { getProducts as fetchProducts } from '../service/firebase'
import { addNewProduct } from '../service/firebase';
export default function useProducts(){
  const queryClient = useQueryClient();

  const getProducts = useQuery(['products'],fetchProducts ,{
    staleTime: 1000 * 60 
  })

  const addProduct = useMutation(({product,url})=>addNewProduct(product,url),{
    onSuccess: ()=> queryClient.invalidateQueries('products')
  })

  return {getProducts,addProduct};
}