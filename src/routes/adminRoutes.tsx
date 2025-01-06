import AdminDashBoard from "../pages/admin/AdminDashBoard";
import CreateFacaulty from "../pages/admin/CreateFacaulty";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";

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
        path: "create-facaulty",
        element: <CreateFacaulty />,
      },
      {
        path: "create-Student",
        element: <CreateStudent />,
      },
    ],
  },
];

export default adminPaths;
