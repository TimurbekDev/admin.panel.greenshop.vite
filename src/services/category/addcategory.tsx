import { useMutation, useQueryClient } from "@tanstack/react-query"
import { customAxios } from "../../hooks/customAxios"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const addcategory = () => {

    const { user } = useContext(AuthContext);
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (name: string) => customAxios.post('/category', { category_name: name }, {
            headers: {
                Authorization: `Bearer ${user?.access_token}`
            }
        }),
        onSuccess: () => {
           queryClient.invalidateQueries({ queryKey: ['categories'] })
        }
    })

    return mutation
}

export default addcategory