import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import * as React from "react";

const Home = () => {
  const { data } = useQuery(["key"], async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    return res.data;
  });
  console.log(data);
  return <h1>Hello</h1>;
};

export default Home;
