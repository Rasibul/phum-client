import AdminDashBoard from "../pages/admin/AdminDashBoard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import React from "react";



type TRoute = {
  path: string;  
  element: React.ReactNode;
}


const adminPaths = [
  {
    name: "DashBoard",
    path: "/admin/dashboard",
    element: <AdminDashBoard />,
  },
  {
    name: "User- Management",
    Children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        path: "create-Student",
        element: <CreateStudent />,
      },
    ],
  },
];


export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {

  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element
    });
  }

  if (item.Children) {
    item.Children.forEach((child) => {
      if (child.path && child.element) {
        acc.push({
          path: child.path,
          element: child.element
        });
      }
    });
  }

  return acc;  
}, []);


