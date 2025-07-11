import { lazy } from "react";
import GlobalLayout from "./pages/_layout";

const Index = lazy(() => import("./pages/index"));
const PoroductsIndex = lazy(() => import("./pages/products/index"));
const ProductsId = lazy(() => import("./pages/products/[id]"));

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/viteNewVersionStudy/", element: <Index /> },
      { path: "/viteNewVersionStudy/products", element: <PoroductsIndex /> },
      { path: "/viteNewVersionStudy/products/:id", element: <ProductsId /> },
    ],
  },
];

export const pages = [
  { route: "/viteNewVersionStudy/" },
  { route: "/viteNewVersionStudy/products" },
  { route: "/viteNewVersionStudy/products/:id" },
];
