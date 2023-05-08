import axios from 'axios'
import { useQuery } from '@tanstack/vue-query'

const getArticles = async () => {
  const { data } = await axios.get('https://dev.to/api/articles?username=elcascarudodev')

  return data
}

const useDevToArticles = () => {

  const { isLoading, data } = useQuery(
    ['articles'],
    getArticles
  )

  return {
    isLoading,
    data
  }
}

export default useDevToArticles