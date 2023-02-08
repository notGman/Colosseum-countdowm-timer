import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ContactPage from "./components/ContactPage";
import EventsPage from "./components/EventsPage";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/events", element: <EventsPage/> },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);