import React from "react";
import BreweryCards from "../components/BreweryCards";
import SearchBar  from "../components/SearchBar";
import Header from "../components/Header";
import { useFetchBrewery } from "../hooks/useFetchBrewery";
import FilterByType from "../components/FilterByType";
import Form from "../components/Form";

const Home = () => {
  const { breweries, loading, error } = useFetchBrewery();


  return (
    <div>
      <FilterByType />
      <BreweryCards breweries={breweries} />
      <Form />
    </div>
  );
}

export default Home;
