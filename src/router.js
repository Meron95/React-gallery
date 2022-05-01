import React from "react";
import Nature from "./pages/Nature";
import Other from "./pages/Other";
import Home from "./pages/Home";
import Fantasy from "./pages/Fantasy";

const routes = {

  "/": () => <Home />,
  "/nature": () => <Nature />,
  "/fantasy": () => <Fantasy />,
  "/other": () => <Other />
};

export default routes;
