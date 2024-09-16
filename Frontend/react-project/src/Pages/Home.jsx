import React from "react";

import Message from "../My1";
import ItemList from "../My2";
import UpdateMe from "../My3";
import Counter from "../My5";

const Home = () => {
  return (
    <div>
      <h1> This is my Home page </h1>

      <div>
        <Message />

        <ItemList />

        <UpdateMe />

        <Counter />
      </div>
    </div>
  );
};

export default Home;
