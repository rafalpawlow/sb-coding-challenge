import axios from './client'
import { useQuery } from '@tanstack/react-query'
import { Swagger } from '@/queries/types/Swagger'

const getSwaggerJson = async () => {
  const { data } = await axios.get<Swagger>('/swagger.json')
  return data
}

export const useSwaggerJson = () => {
  return useQuery({ queryKey: ['swaggerJson'], queryFn: getSwaggerJson })
}
