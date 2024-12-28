import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import HomePage from "../components/HomePage";
import SpaceDetailsPage from "../components/SpaceDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultLayout>
        <HomePage />
      </DefaultLayout>
    ),
    errorElement: <></>,
  },
  {
    path: "/space-details/:id",
    element: (
      <DefaultLayout>
        <SpaceDetailsPage />
      </DefaultLayout>
    ),
  },
]);
