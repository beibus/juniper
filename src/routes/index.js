import React from "react";
import PathConstants from "./pathConstants";

const Home = React.lazy(() => import("../pages/Home/Home"))
const Info = React.lazy(() => import("../pages/Info/Info"))
const Shop = React.lazy(() => import("../pages/Shop/Shop"))
const TOS = React.lazy(() => import("../pages/TOS/TOS"))

const routes = [
  { path: PathConstants.HOME, element: <Home />},
  { path: PathConstants.INFO, element: <Info />},
  { path: PathConstants.SHOP, element: <Shop />},
  { path: PathConstants.TOS, element: <TOS />}
]
export default routes