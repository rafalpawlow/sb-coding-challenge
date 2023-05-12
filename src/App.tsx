import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '@/pages'
import { GlobalStyles } from '@/styles'

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
