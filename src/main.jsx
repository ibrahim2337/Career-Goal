import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Homepage from "./pages/HomePage/Homepage";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import AppliedJobPage from "./pages/AppliedJobPage/AppliedJobPage";
import JobDetailsPage from "./pages/JobDetailsPage/JobDetailsPage";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/statistics",
        element: <StatisticsPage />,
      },
      {
        path: "/applied-job",
        element: <AppliedJobPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/job-details/:id",
        element: <JobDetailsPage />,
        loader: () => fetch(`/feature.json`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Toaster position="top-center" reverseOrder={false} />
    <RouterProvider router={router} />
  </>
);
