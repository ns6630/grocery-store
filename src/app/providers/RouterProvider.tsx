import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider as OriginalRouterProvider,
} from "react-router-dom";
import { HomePage } from "pages/home";
import { ProductPage } from "pages/product";
import { Layout } from "widgets/layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="products" element={<ProductPage />} />
      <Route path="*" element={<HomePage />} />
    </Route>,
  ),
);

export function RouterProvider() {
  return <OriginalRouterProvider router={router} />;
}
