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
                element: <AppliedJobPage />
            },
            {
                path: "/blog",
                element: <BlogPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <RouterProvider router={router} />
    </>
);
