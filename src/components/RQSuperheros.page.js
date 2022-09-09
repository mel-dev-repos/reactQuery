import axios from "axios";
import { useQuery } from "react-query";

const RQSuperheros = () => {
  const getData = () => {
    return axios.get("http://localhost:4000/superheros");
  };

  const { data, isLoading, error } = useQuery("superHeros", getData, {
    staleTime: 10000,
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <h2>isLoading...</h2>;
  if (error) return <h2>{error.message}</h2>;
  return (
    <>
      <h2>RQ Super Heroes </h2>
      {data?.data.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      })}
    </>
  );
};

export default RQSuperheros;
