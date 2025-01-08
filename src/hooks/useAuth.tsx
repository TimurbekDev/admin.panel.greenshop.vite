// import { useEffect, useState } from 'react'
// import { customAxios } from './customAxios';
// import { IUseAuth } from '../types/useAuthType';

// const useAuth = (payload: IUseAuth) => {

//     const [isLoading, setIsLoading] = useState<boolean>(false);
//     const [error, setError] = useState<string | null>(null);
//     const [data, setData] = useState<object | null>(null);

//     useEffect(() => {
//         setIsLoading(true);
//         customAxios.post('/login', payload)
//             .then(res => setData(res.data))
//             .catch(error => setError(error.message))
//             .finally(() => setIsLoading(false));
//     },[])

//     return { isLoading, error, data }
// }

// export default useAuth