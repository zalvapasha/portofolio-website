import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactPage from "../pages/ContactPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
];

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<MainLayout>{route.element}</MainLayout>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
