import { useQuery } from '@tanstack/react-query'
import { customAxios } from '../../hooks/customAxios'
import { ICategory } from '../../types/CategoryType'

const getCategory = () => {

    const { data = [] } = useQuery<ICategory[]>({
        queryKey: ['categories'],
        queryFn: () => customAxios.get('/categories', {
            params: {
                page: 1,
                limit: 1000
            }
        }).then(res => res?.data?.categories.map((category: any, index: number) => {
            return { ...category, key:index+1 }
        }))
    })

    return data
}

export default getCategory