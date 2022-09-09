import axios from "axios";
import { useEffect, useState } from "react";

const Superheros = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/superheros")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        setErr(error.message);
      });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (err) {
    return <h2>{err}</h2>;
  }
  return (
    <>
      <h2>Super Heroes Page</h2>
      {data?.map((hero) => {
        return <li key={hero.name}>{hero.name}</li>;
      })}
    </>
  );
};

export default Superheros;
