import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import AuthContextProvider from './contexts/AuthContext.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 5,
      //@ts-ignore
      cacheTime: 1000 * 60 * 10,
      refetchOnWindowFocus: true
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
