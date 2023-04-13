import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './component/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <AuthContextProvider >
      <Navbar/>
     <Outlet/>
    </AuthContextProvider >
    </QueryClientProvider>
  );
}

export default App;
