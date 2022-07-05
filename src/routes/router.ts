import { lazy } from "react";
import Home from "../pages/home";
interface router {
  path: string;
  component: any;
  children?: Array<router>;
}

const routers: Array<router> = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "*",
    component: lazy(() => import("../pages/error")),
  },
];

export default routers;
