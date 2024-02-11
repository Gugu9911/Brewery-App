import React from "react";
import BreweryCards from "../components/BreweryCards";
import { useFetchBrewery } from "../hooks/useFetchBrewery";


const Home = () => {
  const { breweries, loading, error } = useFetchBrewery();


  return (
    <div>
      <h1>Breweries</h1>
      <BreweryCards breweries={breweries} />
    </div>
  );
}

export default Home;
