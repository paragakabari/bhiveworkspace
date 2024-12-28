import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import DefaultLayout from "./defaultLayout";

const HomePage = lazy(() => import("../components/HomePage"));
const SpaceDetailsPage = lazy(() => import("../components/SpaceDetailsPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <HomePage />
        </Suspense>
      </DefaultLayout>
    ),
    errorElement: <></>,
  },
  {
    path: "/space-details/:id",
    element: (
      <DefaultLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <SpaceDetailsPage />
        </Suspense>
      </DefaultLayout>
    ),
  },
]);
