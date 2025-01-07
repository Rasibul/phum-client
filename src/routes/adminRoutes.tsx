import AdminDashBoard from "../pages/admin/AdminDashBoard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";

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

export default adminPaths;
