import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/Home.page";
import RQSuperheros from "./components/RQSuperheros.page";
import Superheros from "./components/Superheros.page";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import "./App.css";
export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/super-heroes">RQ Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-super-heroes"> Traditional Super Heroes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<RQSuperheros />} path="/super-heroes" />
        <Route element={<Superheros />} path="/rq-super-heroes" />
      </Routes> 
      <ReactQueryDevtools initialIsOpen={false}  position="bottom-right"/>
    </QueryClientProvider>
  );
}
