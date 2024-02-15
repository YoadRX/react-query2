import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Todos } from "./components/Todos";

function App() {
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <h1>TODOs</h1>
        <Todos />
      </QueryClientProvider>
    </>
  );
}

export default App;
