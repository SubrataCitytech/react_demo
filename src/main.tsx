
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { QueryClient } from '@tanstack/react-query'
import { AuthProvider } from './context/AuthContext.tsx'

// const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <App />
  </AuthProvider>,
)
