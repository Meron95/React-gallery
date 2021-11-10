import React from "react";
import Nature from "./components/Nature";
import Other from "./components/Other";
import Home from "./components/Home";
import Fantasy from "./components/Fantasy";

const routes = {

  "/": () => <Home />,
  "/nature": () => <Nature />,
  "/fantasy": () => <Fantasy />,
  "/other": () => <Other />
};

export default routes;
