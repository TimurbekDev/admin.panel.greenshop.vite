import { useQuery } from "@tanstack/react-query"
import { customAxios } from "../../hooks/customAxios"
import { IGetProductParam } from "../../types/GetProductParamType";

const getProducts = (params: IGetProductParam) => {

    const { data } = useQuery({
        queryKey: ['products',params.category],
        queryFn: () => customAxios.get('/products', {
            params: params
        }).then(res => res.data?.products.map((p:any,index:number)=>{
            return {...p,key:index+1}
        }))
    })

    return data;
}

export default getProducts