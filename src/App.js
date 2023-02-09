import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

import IndexPosts from './views/Posts';

 // Create a client
 const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IndexPosts />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
