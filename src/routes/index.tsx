import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const Home = lazy(() => import("../pages/Home"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Home />
      </Suspense>
    ),
  },
]);
