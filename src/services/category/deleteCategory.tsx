import { useMutation, useQueryClient } from "@tanstack/react-query"
import { customAxios } from "../../hooks/customAxios"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const deleteCategory = () => {

    const { user } = useContext(AuthContext);
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (id: string) => customAxios.delete(`/category/${id}`, {
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

export default deleteCategory